import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="2do/register">Register</a></li>
      <li><a routerLink="2do/login">Login</a></li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
