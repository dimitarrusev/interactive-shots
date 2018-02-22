import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { TodoRegisterComponent } from './todo-register/todo-register.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';

const routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'register' },
      { path: 'register', component: TodoRegisterComponent },
      { path: 'login', component: TodoLoginComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule {}
