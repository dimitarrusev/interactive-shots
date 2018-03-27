import { Routes } from '@angular/router';
import { DeactivateGuardService } from './services';
import {
  TodoComponent,
  TodoRegisterComponent,
  TodoLoginComponent,
  TodoResetPasswordComponent,
  TodoTermsOfServiceComponent,
  TodoDashboardComponent,
  TodoDashboardV2Component
} from './components';

export const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'register' },
      {
        path: 'register',
        component: TodoRegisterComponent,
        canDeactivate: [DeactivateGuardService],
        data: {
          animation: 'todoRegisterAnimation'
        }
      },
      {
        path: 'login',
        component: TodoLoginComponent,
        canDeactivate: [DeactivateGuardService],
        data: {
          animation: 'todoLoginAnimation'
        }
      },
      {
        path: 'reset-password',
        component: TodoResetPasswordComponent,
        canDeactivate: [DeactivateGuardService],
        data: {
          animation: 'todoResetPasswordAnimation'
        }
      },
      {
        path: 'terms-of-service',
        component: TodoTermsOfServiceComponent,
        data: {
          animation: 'todoTermsOfServiceAnimation'
        }
      },
      {
        path: 'dashboard',
        component: TodoDashboardComponent,
        data: {
          animation: 'todoDashboardAnimation'
        }
      },
      {
        path: 'dashboard-v2',
        component: TodoDashboardV2Component,
        data: {
          animation: 'todoDashboardV2Animation'
        }
      }
    ]
  }
];
