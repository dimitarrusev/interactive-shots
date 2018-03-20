import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { routes } from './todo.routes';
import {
  TodoComponent,
  TodoRegisterComponent,
  TodoLoginComponent,
  TodoResetPasswordComponent,
  TodoTermsOfServiceComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule, MatIconModule, MatTooltipModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TodoComponent,
    TodoRegisterComponent,
    TodoLoginComponent,
    TodoResetPasswordComponent,
    TodoTermsOfServiceComponent
  ]
})
export class TodoModule {}
