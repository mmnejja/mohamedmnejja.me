import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Opportunity {
  title: string;
  badge: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-opportunities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opportunities.page.html',
  styleUrl: './opportunities.page.css'
})
export class OpportunitiesPageComponent {
  opportunities: Opportunity[] = [
    {
      title: 'Finance & Reporting Opportunity',
      badge: 'Accounting',
      description: 'Selected opening in financial reporting, controls, and business performance analysis.',
      url: 'https://www.linkedin.com/jobs/view/4460738692/'
    },
    {
      title: 'Strategy & Performance Opportunity',
      badge: 'Finance',
      description: 'Opportunity focused on planning, performance tracking, and decision support.',
      url: 'https://www.linkedin.com/jobs/view/4464752535/'
    },
    {
      title: 'Audit & Assurance Opportunity',
      badge: 'Audit',
      description: 'Role centered on assurance, governance, and internal control reviews.',
      url: 'https://www.linkedin.com/jobs/view/4462282561/'
    },
    {
      title: 'Commercial Finance Opportunity',
      badge: 'FP&A',
      description: 'Finance opportunity covering forecasting, variance analysis, and value creation.',
      url: 'https://www.linkedin.com/jobs/view/4469826292/'
    },
    {
      title: 'Accounting & Control Opportunity',
      badge: 'Accounting',
      description: 'Professional opening in financial operations, controls, and reporting excellence.',
      url: 'https://www.linkedin.com/jobs/view/4430013966/'
    },
    {
      title: 'Business Finance Opportunity',
      badge: 'Finance',
      description: 'Selected role in business partnering, reporting, and financial decision-making.',
      url: 'https://www.linkedin.com/jobs/view/4462222184/'
    },
    {
      title: 'Risk & Reporting Opportunity',
      badge: 'Governance',
      description: 'Opportunity in governance, reporting quality, and control frameworks.',
      url: 'https://www.linkedin.com/jobs/view/4469135103/'
    },
    {
      title: 'Controller & Reporting Opportunity',
      badge: 'Controller',
      description: 'Role in reporting, financial discipline, and strategic business analysis.',
      url: 'https://www.linkedin.com/jobs/view/4467614849/'
    },
    {
      title: 'Data & Audit Opportunity',
      badge: 'Analytics',
      description: 'Opportunity combining data analysis, assurance, and process improvement.',
      url: 'https://www.linkedin.com/jobs/view/4464739618/'
    },
    {
      title: 'Operations Finance Opportunity',
      badge: 'Operations',
      description: 'Finance role supporting operational performance, controls, and strategic insight.',
      url: 'https://www.linkedin.com/jobs/view/4463053375/'
    }
  ];
}
