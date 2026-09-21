import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button class="theme-btn" (click)="toggleTheme()" aria-label="Toggle theme">
      {{ isDark ? 'Light' : 'Dark' }}
    </button>
  `,
  styles: [
    `:host { display: inline-block; }
    .theme-btn {
      background: var(--surface, #ffffff);
      color: var(--text, #0a2540);
      border: 1px solid var(--border, rgba(10,37,64,0.08));
      padding: 6px 12px;
      font-weight: 600;
      border-radius: 999px;
      cursor: pointer;
      box-shadow: 0 8px 20px rgba(10,37,64,0.06);
      transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
      display: inline-flex;
      align-items: center;
      gap: .5rem;
    }
    .theme-btn:hover {
      transform: translateY(-1px);
      border-color: var(--secondary, #00a86b);
      box-shadow: 0 12px 30px rgba(10,37,64,0.08);
    }
    `
  ]
})
export class ThemeToggleComponent implements OnInit {
  isDark = true;

  ngOnInit() {
    const stored = localStorage.getItem('darkMode');
    this.isDark = stored === null ? true : stored === 'true';
    this.apply(this.isDark);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('darkMode', this.isDark.toString());
    this.apply(this.isDark);
  }

  private apply(dark: boolean) {
    if (dark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }
}
