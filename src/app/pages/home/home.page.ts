import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  mobileNavOpen = false;
  darkMode = false;
  loaderHidden = false;
  activeSection = 'home';
  formStatus = '';
  formStatusColor = '#00A86B';

  readonly contactForm;

  constructor(
    private readonly fb: FormBuilder,
    private readonly contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('portfolio-theme');
    this.darkMode = savedTheme === 'dark';
    document.body.classList.toggle('dark', this.darkMode);
    window.setTimeout(() => (this.loaderHidden = true), 650);
  }

  ngAfterViewInit(): void {
    this.observeRevealElements();
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];
    const currentPosition = window.scrollY + 120;
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (!section) {
        continue;
      }
      if (currentPosition >= section.offsetTop && currentPosition < section.offsetTop + section.offsetHeight) {
        this.activeSection = id;
      }
    }
  }

  toggleMenu(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  closeMenu(): void {
    this.mobileNavOpen = false;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    localStorage.setItem('portfolio-theme', this.darkMode ? 'dark' : 'light');
  }

  submitContact(): void {
    if (this.contactForm.invalid) {
      this.formStatus = 'Please complete all fields before sending.';
      this.formStatusColor = '#c0392b';
      return;
    }

    const value = this.contactForm.getRawValue();
    this.contactService
      .sendMessage({
        name: value.name ?? '',
        email: value.email ?? '',
        message: value.message ?? ''
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.formStatus = 'Message sent successfully. Thank you.';
          this.formStatusColor = '#00A86B';
          this.contactForm.reset();
        },
        error: () => {
          this.formStatus = 'Unable to send your message right now. Please try again.';
          this.formStatusColor = '#c0392b';
        }
      });
  }

  private observeRevealElements(): void {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    revealElements.forEach((el) => observer.observe(el));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
