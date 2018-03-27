import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { first, skipWhile } from 'rxjs/operators';

import { RouteCommunicationService } from './core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="2do/register">Register</a></li>
      <li><a routerLink="2do/login">Login</a></li>
      <li><a routerLink="2do/reset-password">Reset password</a></li>
      <li><a routerLink="2do/terms-of-service">Terms of service</a></li>
      <li><a routerLink="2do/dashboard">Dashboard</a></li>
      <li><a routerLink="2do/dashboard-v2">Dashboard v2</a></li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  private spinner: Element = document.getElementById('spinner');

  constructor(private routeCommunicationService: RouteCommunicationService) {}

  ngOnInit() {
    (window.innerWidth < 960)
      ? this.routeCommunicationService.setShotSize('oneX')
      : this.routeCommunicationService.setShotSize('twoX');

    this.routeCommunicationService.initialRouteIsInitialized$
      .pipe(
        skipWhile(initialRouteIsInitialized => !initialRouteIsInitialized),
        first()
      )
      .subscribe(initialRouteIsInitialized => {
        if (initialRouteIsInitialized) {
          this.spinner.remove();
        }
      });
  }
}