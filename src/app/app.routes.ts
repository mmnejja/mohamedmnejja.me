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
    path: 'power-bi-financial-dashboard',
    loadComponent: () => import('./pages/power-bi/power-bi.page').then((m) => m.PowerBiPageComponent)
  },
  {
    path: 'csrd-reporting-simulation',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/csrd-form/csrd-form.component').then((m) => m.CsrdFormComponent)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
