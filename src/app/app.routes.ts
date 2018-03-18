import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '2do' },
  { path: '2do', loadChildren: 'app/todo/todo.module#TodoModule' }
];
