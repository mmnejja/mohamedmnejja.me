import { Injectable } from '@angular/core';

type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'portfolio-theme';
  private currentTheme: ThemeMode = 'light';

  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved === 'dark' || saved === 'light') {
      this.currentTheme = saved;
    } else {
      this.currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    this.applyTheme(this.currentTheme);
  }

  isDark(): boolean {
    return this.currentTheme === 'dark';
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
    localStorage.setItem(this.storageKey, this.currentTheme);
  }

  private applyTheme(theme: ThemeMode): void {
    document.body.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }
}
