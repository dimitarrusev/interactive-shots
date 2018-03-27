import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { first, skipWhile } from 'rxjs/operators';

import { RouteService } from './core';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  private spinner: Element = document.getElementById('spinner');

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    (window.innerWidth < 960)
      ? this.routeService.setShotSize('oneX')
      : this.routeService.setShotSize('twoX');

    this.routeService.initialRouteState$
      .pipe(
        skipWhile(initialRouteState => !initialRouteState),
        first()
      )
      .subscribe(initialRouteState => {
        if (initialRouteState) {
          this.spinner.remove();
        }
      });
  }
}
