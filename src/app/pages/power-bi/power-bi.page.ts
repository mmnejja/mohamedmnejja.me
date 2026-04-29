import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-power-bi-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './power-bi.page.html',
  styleUrl: './power-bi.page.css'
})
export class PowerBiPageComponent {
  readonly reportUrl = 'https://app.powerbi.com/view?r=eyJrIjoiYjQ2YjkxN2QtMzVmYy00MzhhLWE3MzMtY2VhNWU5YTY3MzBlIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9';
  readonly safeReportUrl: SafeResourceUrl;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly themeService: ThemeService
  ) {
    this.safeReportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.reportUrl);
  }

  openReport(): void {
    window.open(this.reportUrl, '_blank');
  }

  get isDarkMode(): boolean {
    return this.themeService.isDark();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
