import { Routes } from '@angular/router';
import {
  TodoComponent,
  TodoRegisterComponent,
  TodoLoginComponent,
  TodoResetPasswordComponent
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
      }
    ]
  }
];
