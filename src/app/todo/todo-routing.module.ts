// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { TodoComponent, TodoRegisterComponent, TodoLoginComponent } from './components';

// const routes = [
//   {
//     path: '',
//     component: TodoComponent,
//     children: [
//       { path: '', pathMatch: 'full', redirectTo: 'register' },
//       {
//         path: 'register',
//         component: TodoRegisterComponent,
//         data: {
//           animation: 'todoRegisterAnimation'
//         }
//       },
//       {
//         path: 'login',
//         component: TodoLoginComponent,
//         data: {
//           animation: 'todoLoginAnimation'
//         }
//       }
//     ]
//   }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forChild(routes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class TodoRoutingModule {}

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
