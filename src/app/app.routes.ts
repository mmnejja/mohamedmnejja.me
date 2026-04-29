import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePageComponent)
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
    loadComponent: () => import('./pages/csrd-reporting/csrd-reporting.page').then((m) => m.CsrdReportingPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
