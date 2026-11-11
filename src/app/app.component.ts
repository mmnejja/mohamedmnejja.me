import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './shared/components/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isDarkMode = false;
  isMenuOpen = false;

  navLinks = [
    { label: 'Home', route: '/', fragment: 'home' },
    { label: 'About', route: '/', fragment: 'about' },
    { label: 'Skills', route: '/', fragment: 'skills' },
    { 
      label: 'Projects', 
      route: '/', 
      fragment: 'projects',
      sublinks: [
        { label: 'Chart of Accounts', route: '/chart-of-accounts-ai', fragment: undefined },
        {
          label: 'Business Plan Profitability',
          route: '/business-plan-profitability'
        },
        {
          label: 'Audit Sampling Tool',
          route: '/audit-sampling-tool'
        },
        {
          label: 'Internal Audit & Risk Management System',
          route: '/internal-audit-risk-management-system'
        },
        {
          label: 'IS Audit & Cybersecurity Toolkit',
          route: '/is-audit-cybersecurity-toolkit'
        },
        {
          label: 'ESG Sustainability Platform',
          route: '/esg-sustainability-platform'
        }
      ]
    },
    { label: 'Blog', route: '/', fragment: 'blog' },
    { label: 'Contact', route: '/', fragment: 'contact' },
    { label: 'LinkedIn Analytics', route: '/linkedin-profile-analytics' },
    { label: 'Opportunities', route: '/opportunities' }
  ];

  ngOnInit() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    this.setTheme(isDark);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.setTheme(this.isDarkMode);
  }

  private setTheme(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    this.isDarkMode = isDark;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
