import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-linkedin-profile-analytics',
  standalone: true,
  templateUrl: './linkedin-profile-analytics.page.html',
  styleUrl: './linkedin-profile-analytics.page.css'
})
export class LinkedinProfileAnalyticsPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dashboardShell', { static: true }) dashboardShell!: ElementRef<HTMLElement>;

  isFullscreen = false;
  private nativeFullscreen = false;

  ngAfterViewInit() {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
  }

  ngOnDestroy() {
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
    document.body.classList.remove('dashboard-fullscreen-fallback');
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
