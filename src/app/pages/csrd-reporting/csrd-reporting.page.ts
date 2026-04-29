import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CsrdReportService } from '../../core/services/csrd-report.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-csrd-reporting-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './csrd-reporting.page.html',
  styleUrl: './csrd-reporting.page.css'
})
export class CsrdReportingPageComponent {
  loading = false;
  status = '';
  statusType: '' | 'success' | 'error' = '';

  readonly form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly csrdReportService: CsrdReportService,
    private readonly themeService: ThemeService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      reportFile: [null as File | null, [Validators.required]]
    });
  }

  get isDarkMode(): boolean {
    return this.themeService.isDark();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.form.patchValue({ reportFile: file });
  }

  submit(): void {
    if (this.form.invalid) {
      this.statusType = 'error';
      this.status = 'Please complete all fields and upload your HTML report.';
      return;
    }
    const { name, email, reportFile } = this.form.getRawValue();
    if (!reportFile) {
      return;
    }

    this.loading = true;
    this.statusType = '';
    this.status = 'Uploading report...';

    this.csrdReportService.submitReport(name ?? '', email ?? '', reportFile).subscribe({
      next: () => {
        this.loading = false;
        this.statusType = 'success';
        this.status = 'CSRD report sent successfully.';
        this.form.reset();
      },
      error: (error) => {
        this.loading = false;
        this.statusType = 'error';
        this.status = error?.message ?? 'Failed to send the report.';
      }
    });
  }
}
