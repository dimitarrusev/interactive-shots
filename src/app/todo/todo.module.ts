import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { TodoComponent, TodoRegisterComponent, TodoLoginComponent } from './components';
import { TodoService } from './services';
import { routes } from './todo.routes';

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
    TodoLoginComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
