import { Routes } from '@angular/router';
import { TodoComponent, TodoRegisterComponent, TodoLoginComponent } from './components';

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
      }
    ]
  }
];
