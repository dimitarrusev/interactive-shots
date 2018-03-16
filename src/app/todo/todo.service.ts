import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

type RouteAnimationState = undefined | 'start' | 'done';

@Injectable()
export class TodoService {
  private routeAnimationState: BehaviorSubject<RouteAnimationState> = new BehaviorSubject(undefined);
  public readonly routeAnimationState$: Observable<RouteAnimationState> = this.routeAnimationState.asObservable();

  setRouteAnimationState(routeAnimationState: RouteAnimationState) {
    this.routeAnimationState.next(routeAnimationState);
  }
}
