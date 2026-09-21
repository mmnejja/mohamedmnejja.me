import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-power-bi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './power-bi.page.html',
  styleUrl: './power-bi.page.css'
})
export class PowerBiPageComponent {
  dashboards = [
    {
      title: 'Financial Overview',
      description: 'Real-time view of key financial metrics and KPIs'
    },
    {
      title: 'Cash Flow Analysis',
      description: 'Track cash inflows and outflows with predictive forecasting'
    },
    {
      title: 'Budget vs Actual',
      description: 'Compare budget allocations with actual spending patterns'
    },
    {
      title: 'Revenue Analytics',
      description: 'Deep dive into revenue streams and growth trends'
    }
  ];

  benefits = [
    'Interactive real-time dashboards',
    'Advanced data visualization',
    'Predictive analytics and forecasting',
    'Mobile-responsive design',
    'Automated reporting and alerts'
  ];
}
