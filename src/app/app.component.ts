import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { first, skipWhile } from 'rxjs/operators';

import {
  WindowService,
  RouteService,
  ShotService,
  NavigationItem
} from './core';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation [navigationItems]="navigationItems"></app-navigation>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  private spinner: Element = document.getElementById('spinner');

  navigationItems: NavigationItem[] = [
    { selected: true, link: '2do/register', tooltipText: 'Register', tooltipPosition: 'above' },
    { selected: false, link: '2do/login', tooltipText: 'Login', tooltipPosition: 'above' },
    { selected: false, link: '2do/reset-password', tooltipText: 'Reset password', tooltipPosition: 'above' },
    { selected: false, link: '2do/terms-of-service', tooltipText: 'Terms of service', tooltipPosition: 'above' },
    { selected: false, link: '2do/dashboard', tooltipText: 'Dashboard', tooltipPosition: 'above' },
    { selected: false, link: '2do/features', tooltipText: 'Features', tooltipPosition: 'above' }
  ];

  constructor(
    private windowService: WindowService,
    private routeService: RouteService,
    private shotService: ShotService
  ) {}

  ngOnInit() {
    (this.windowService.nativeWindow.innerWidth < 960)
      ? this.shotService.setShotSize('oneX')
      : this.shotService.setShotSize('twoX');

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
