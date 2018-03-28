import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { filter, first, skipWhile } from 'rxjs/operators';

import {
  WindowService,
  RouteService,
  ShotService,
  NavigationItem
} from './core';

declare var gtag: Function;

@Component({
  selector: 'app-root',
  template: `
    <app-navigation [navigationItems]="navigationItems"></app-navigation>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  routerEventsSubscription: Subscription;
  spinner: Element = document.getElementById('spinner');
  navigationItems: NavigationItem[] = [
    { selected: true, link: '2do/register', tooltipText: 'Register', tooltipPosition: 'above' },
    { selected: false, link: '2do/login', tooltipText: 'Login', tooltipPosition: 'above' },
    { selected: false, link: '2do/reset-password', tooltipText: 'Reset password', tooltipPosition: 'above' },
    { selected: false, link: '2do/terms-of-service', tooltipText: 'Terms of service', tooltipPosition: 'above' },
    { selected: false, link: '2do/dashboard', tooltipText: 'Dashboard', tooltipPosition: 'above' },
    { selected: false, link: '2do/features', tooltipText: 'Features', tooltipPosition: 'above' }
  ];

  constructor(
    private router: Router,
    private windowService: WindowService,
    private routeService: RouteService,
    private shotService: ShotService
  ) {}

  ngOnInit() {
    this.routerEventsSubscription = this.router.events.pipe(
        filter((event: Event) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        gtag('config', 'UA-116563970-1', { page_path: event.urlAfterRedirects });
      });

    this.routeService.initialRouteState$
      .pipe(
        // skip while initial route is not rendered,
        // then get the first value and unsubscribe
        skipWhile(initialRouteState => !initialRouteState),
        first()
      )
      .subscribe(initialRouteState => {
        // remove the spinner element if
        // the initial route is rendered
        if (initialRouteState) this.spinner.remove();
      });

    // set initial shot size depending on browser width
    (this.windowService.nativeWindow.innerWidth < 960)
      ? this.shotService.setShotSize('oneX')
      : this.shotService.setShotSize('twoX');
  }

  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
  }
}
