import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linkedin-profile-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin-profile-analytics.page.html',
  styleUrl: './linkedin-profile-analytics.page.css'
})
export class LinkedinProfileAnalyticsPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dashboardShell', { static: true }) dashboardShell!: ElementRef<HTMLElement>;
  @ViewChild('dashboardHost', { static: true }) dashboardHost!: ElementRef<HTMLElement>;

  isFullscreen = false;
  loadError = '';
  private nativeFullscreen = false;
  private injectedNodes: Node[] = [];

  ngAfterViewInit() {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
    void this.loadDashboard();
  }

  ngOnDestroy() {
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
    document.body.classList.remove('dashboard-fullscreen-fallback');
    this.injectedNodes.forEach((node) => node.parentNode?.removeChild(node));
  }

  private async loadDashboard() {
    try {
      const response = await fetch('assets/dash-branded.html');
      if (!response.ok) {
        throw new Error(`Dashboard request failed with status ${response.status}`);
      }

      const source = await response.text();
      const documentFragment = new DOMParser().parseFromString(source, 'text/html');
      const host = this.dashboardHost.nativeElement;

      documentFragment.querySelectorAll('style').forEach((style) => {
        const node = document.createElement('style');
        node.textContent = this.scopeStyles(style.textContent || '');
        document.head.appendChild(node);
        this.injectedNodes.push(node);
      });

      documentFragment.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
        const node = document.createElement('link');
        node.rel = 'stylesheet';
        node.href = link.getAttribute('href') || '';
        document.head.appendChild(node);
        this.injectedNodes.push(node);
      });

      Array.from(documentFragment.body.children)
        .filter((element) => element.tagName !== 'SCRIPT')
        .forEach((element) => host.appendChild(element));

      for (const script of Array.from(documentFragment.querySelectorAll('script'))) {
        const node = document.createElement('script');
        if (script.src) {
          node.src = script.src;
          await new Promise<void>((resolve, reject) => {
            node.onload = () => resolve();
            node.onerror = () => reject(new Error(`Dashboard script failed to load: ${script.src}`));
            document.body.appendChild(node);
          });
        } else {
          node.textContent = (script.textContent || '').replace(
            /document\.documentElement/g,
            "document.querySelector('.dashboard-runtime')"
          );
          document.body.appendChild(node);
        }
        this.injectedNodes.push(node);
      }
    } catch (error) {
      this.loadError = error instanceof Error ? error.message : 'Unable to load the dashboard.';
      console.error('LinkedIn dashboard load failed', error);
    }
  }

  private scopeStyles(css: string) {
    return css.replace(/([^{}]+)\{/g, (match, selector: string) => {
      if (selector.trim().startsWith('@')) {
        return match;
      }

      const scoped = selector
        .split(',')
        .map((part) => {
          const value = part.trim();
          if (!value) {
            return value;
          }
          const normalized = value
            .replace(/^:root:not/, '.dashboard-runtime:not')
            .replace(/^:root(?=\[)/, '.dashboard-runtime')
            .replace(/^:root\b/, '.dashboard-runtime')
            .replace(/^\[dir=rtl\]/, '.dashboard-runtime[dir=rtl]')
            .replace(/^body\b/, '.dashboard-runtime');
          return normalized === '.dashboard-runtime' ? normalized : `.dashboard-runtime ${normalized}`;
        })
        .join(', ');
      return `${scoped}{`;
    });
  }

  async toggleFullscreen() {
    if (this.isFullscreen) {
      await this.exitFullscreen();
      return;
    }

    const element = this.dashboardShell.nativeElement;
    if (element.requestFullscreen) {
      try {
        await element.requestFullscreen();
        this.nativeFullscreen = true;
      } catch {
        this.enableFallbackFullscreen();
      }
    } else {
      this.enableFallbackFullscreen();
    }
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    if (this.isFullscreen && !this.nativeFullscreen) {
      this.disableFallbackFullscreen();
    }
  }

  private handleFullscreenChange = () => {
    const active = document.fullscreenElement === this.dashboardShell.nativeElement;
    this.nativeFullscreen = active;
    this.isFullscreen = active || document.body.classList.contains('dashboard-fullscreen-fallback');
  };

  private async exitFullscreen() {
    if (this.nativeFullscreen && document.exitFullscreen) {
      await document.exitFullscreen();
    } else {
      this.disableFallbackFullscreen();
    }
  }

  private enableFallbackFullscreen() {
    document.body.classList.add('dashboard-fullscreen-fallback');
    this.isFullscreen = true;
    this.nativeFullscreen = false;
  }

  private disableFallbackFullscreen() {
    document.body.classList.remove('dashboard-fullscreen-fallback');
    this.isFullscreen = false;
  }
}
