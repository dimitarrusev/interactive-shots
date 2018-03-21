import { Routes } from '@angular/router';
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
        data: {
          animation: 'todoRegisterAnimation'
        }
      },
      {
        path: 'login',
        component: TodoLoginComponent,
        data: {
          animation: 'todoLoginAnimation'
        }
      },
      {
        path: 'reset-password',
        component: TodoResetPasswordComponent,
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
