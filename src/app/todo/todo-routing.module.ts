import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuard } from '../core';
import {
  TodoComponent,
  TodoRegisterComponent,
  TodoLoginComponent,
  TodoResetPasswordComponent,
  TodoTermsOfServiceComponent,
  TodoDashboardComponent,
  TodoFeaturesComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'register' },
      {
        path: 'register',
        component: TodoRegisterComponent,
        canDeactivate: [DeactivateGuard],
        data: {
          animation: 'todoRegisterAnimation'
        }
      },
      {
        path: 'login',
        component: TodoLoginComponent,
        canDeactivate: [DeactivateGuard],
        data: {
          animation: 'todoLoginAnimation'
        }
      },
      {
        path: 'reset-password',
        component: TodoResetPasswordComponent,
        canDeactivate: [DeactivateGuard],
        data: {
          animation: 'todoResetPasswordAnimation'
        }
      },
      {
        path: 'terms-of-service',
        component: TodoTermsOfServiceComponent,
        canDeactivate: [DeactivateGuard],
        data: {
          animation: 'todoTermsOfServiceAnimation'
        }
      },
      {
        path: 'dashboard',
        component: TodoDashboardComponent,
        canDeactivate: [DeactivateGuard],
        data: {
          animation: 'todoDashboardAnimation'
        }
      },
      {
        path: 'features',
        component: TodoFeaturesComponent,
        canDeactivate: [DeactivateGuard],
        data: {
          animation: 'todoFeaturesAnimation'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
