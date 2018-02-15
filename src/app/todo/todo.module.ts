import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoRegisterComponent } from './todo-register/todo-register.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule, MatIconModule, MatTooltipModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoRegisterComponent
  ]
})
export class TodoModule { }
