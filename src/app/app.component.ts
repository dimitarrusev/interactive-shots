import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { first } from 'rxjs/operators/first';

import { RouteCommunicationService } from './core';

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
export class AppComponent implements OnInit {
  private spinner: Element = document.getElementById('spinner');

  constructor(private routeCommunicationService: RouteCommunicationService) {}

  ngOnInit() {
    (window.innerWidth < 960)
      ? this.routeCommunicationService.setShotSize('oneX')
      : this.routeCommunicationService.setShotSize('twoX');

    this.routeCommunicationService.initialRouteIsInitialized$
      .pipe(first())
      .subscribe(initialRouteIsInitialized => {
        if (initialRouteIsInitialized) {
          this.spinner.remove();
        }
      });
  }
}
