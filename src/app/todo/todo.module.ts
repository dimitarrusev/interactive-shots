import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent
  ]
})
export class TodoModule { }
