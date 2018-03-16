import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { TodoRegisterComponent } from './todo-register/todo-register.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule, MatIconModule, MatTooltipModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoRegisterComponent,
    TodoLoginComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
