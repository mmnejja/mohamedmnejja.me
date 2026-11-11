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
    path: 'audit-sampling-tool',
    loadComponent: () =>
      import('./pages/audit-sampling-tool/audit-sampling-tool.page').then(
        (m) => m.AuditSamplingToolPageComponent
      )
  },
  {
    path: 'internal-audit-risk-management-system',
    loadComponent: () =>
      import('./pages/internal-audit-risk-management-system/internal-audit-risk-management-system.page').then(
        (m) => m.InternalAuditRiskManagementSystemPageComponent
      )
  },
  {
    path: 'is-audit-cybersecurity-toolkit',
    loadComponent: () =>
      import('./pages/is-audit-cybersecurity-toolkit/is-audit-cybersecurity-toolkit.page').then(
        (m) => m.IsAuditCybersecurityToolkitPageComponent
      )
  },
  {
    path: 'esg-sustainability-platform',
    loadComponent: () =>
      import('./pages/esg-sustainability-platform/esg-sustainability-platform.page').then(
        (m) => m.EsgSustainabilityPlatformPageComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
