import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePageComponent)
  },
  {
    path: 'opportunities',
    loadComponent: () =>
      import('./pages/opportunities/opportunities.page').then((m) => m.OpportunitiesPageComponent)
  },
  {
    path: 'chart-of-accounts-ai',
    loadComponent: () =>
      import('./pages/chart-of-accounts/chart-of-accounts.page').then((m) => m.ChartOfAccountsPageComponent)
  },
  {
    path: 'linkedin-profile-analytics',
    loadComponent: () =>
      import('./pages/linkedin-profile-analytics/linkedin-profile-analytics.page').then(
        (m) => m.LinkedinProfileAnalyticsPageComponent
      )
  },
  {
    path: 'business-plan-profitability',
    loadComponent: () =>
      import('./pages/business-plan/business-plan.page').then((m) => m.BusinessPlanPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
