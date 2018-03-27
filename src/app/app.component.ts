import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { first, skipWhile } from 'rxjs/operators';

import { RouteCommunicationService } from './core';

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
