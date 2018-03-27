import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export type ShotSize = null | 'oneX' | 'twoX';
export type InitialRouteState = null | 'rendered';
export type RouteAnimationState = null | 'start' | 'done';

@Injectable()
export class RouteService {
  private shotSize: BehaviorSubject<ShotSize> = new BehaviorSubject<ShotSize>(null);
  public readonly shotSize$: Observable<ShotSize> = this.shotSize.asObservable();

  private initialRouteState: BehaviorSubject<InitialRouteState> = new BehaviorSubject(null);
  public readonly initialRouteState$: Observable<InitialRouteState> = this.initialRouteState.asObservable();

  private routeAnimationState: Subject<RouteAnimationState> = new Subject();
  public readonly routeAnimationState$: Observable<RouteAnimationState> = this.routeAnimationState.asObservable();

  getShotSize(): ShotSize {
    return this.shotSize.getValue();
  }

  setShotSize(shotSize: ShotSize) {
    this.shotSize.next(shotSize);
  }

  toggleShotSize() {
    (this.getShotSize() === 'oneX')
      ? this.setShotSize('twoX')
      : this.setShotSize('oneX');
  }

  getInitialRouteState(): InitialRouteState {
    return this.initialRouteState.getValue();
  }

  setInitialRouteState(initialRouteState: InitialRouteState) {
    this.initialRouteState.next(initialRouteState);
  }

  setRouteAnimationState(routeAnimationState: RouteAnimationState) {
    this.routeAnimationState.next(routeAnimationState);
  }
}
