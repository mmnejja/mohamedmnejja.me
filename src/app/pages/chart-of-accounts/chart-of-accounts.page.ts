import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-of-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-of-accounts.page.html',
  styleUrl: './chart-of-accounts.page.css'
})
export class ChartOfAccountsPageComponent {
  features = [
    {
      title: 'AI-Powered Suggestions',
      description: 'Get intelligent recommendations for account categorization and structure'
    },
    {
      title: 'Real-time Validation',
      description: 'Validate accounts against GAAP and IFRS standards in real-time'
    },
    {
      title: 'Compliance Checking',
      description: 'Ensure your chart of accounts meets regulatory requirements'
    },
    {
      title: 'Multi-currency Support',
      description: 'Handle multiple currencies with automatic conversion'
    }
  ];

  benefits = [
    'Reduce setup time by 80%',
    'Ensure accounting compliance',
    'AI-powered account suggestions',
    'Real-time validation and alerts'
  ];
}
