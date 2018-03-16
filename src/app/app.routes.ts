// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes = [
//   { path: '', pathMatch: 'full', redirectTo: '2do' },
//   { path: '2do', loadChildren: 'app/todo/todo.module#TodoModule' }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule {}


import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '2do' },
  { path: '2do', loadChildren: 'app/todo/todo.module#TodoModule' }
];
