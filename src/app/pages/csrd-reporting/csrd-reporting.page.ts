import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-csrd-reporting',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './csrd-reporting.page.html',
  styleUrl: './csrd-reporting.page.css'
})
export class CsrdReportingPageComponent {
  heroStats = [
    { value: 'HTML', label: 'Upload report' },
    { value: 'n8n', label: 'Automate workflow' },
    { value: 'AI', label: 'Process results' }
  ];
}
