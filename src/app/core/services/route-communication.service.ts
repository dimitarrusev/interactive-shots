import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

type RouteAnimationState = null | 'start' | 'done';

@Injectable()
export class RouteCommunicationService {
  private initialRouteIsInitialized: Subject<boolean> = new Subject();
  public readonly initialRouteIsInitialized$: Observable<boolean> = this.initialRouteIsInitialized.asObservable();

  private routeAnimationState: Subject<RouteAnimationState> = new Subject();
  public readonly routeAnimationState$: Observable<RouteAnimationState> = this.routeAnimationState.asObservable();

  setInitialRouteIsInitialized(initialRouteIsInitialized: boolean) {
    this.initialRouteIsInitialized.next(initialRouteIsInitialized);
  }

  setRouteAnimationState(routeAnimationState: RouteAnimationState) {
    this.routeAnimationState.next(routeAnimationState);
  }
}
