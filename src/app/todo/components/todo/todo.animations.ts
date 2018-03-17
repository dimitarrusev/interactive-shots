import { animate, group, query, style, transition, trigger, useAnimation } from '@angular/animations';
import { routeAnimation } from '../../../shared/utils/animations';

// Easing curves
const standardEasingCurve = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
const decelerationEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
const accelerationEasingCurve = 'cubic-bezier(0.4, 0.0, 1, 1)';
const sharpEasingCurve = 'cubic-bezier(0.4, 0.0, 0.6, 1)';

// Animation parameters
const routeAnimationsDuration = '450ms';

// enter route animation
const enterRouteAnimation = routeAnimation;
const enterRouteAnimationParams = {
  fadeFrom: '0.5',
  fadeTo: 1,
  slideFrom: '-100%',
  slideTo: 0,
  scaleFrom: '0.9',
  scaleTo: 1,
  duration: routeAnimationsDuration,
  easing: accelerationEasingCurve
};

// leave route animation
const leaveRouteAnimation = routeAnimation;
const leaveRouteAnimationParams = {
  fadeFrom: 1,
  fadeTo: '0.5',
  slideFrom: 0,
  slideTo: '100%',
  scaleFrom: 1,
  scaleTo: '0.9',
  duration: routeAnimationsDuration,
  easing: decelerationEasingCurve
};

export function routeAnimations() {
  return trigger('routeAnimation', [
    transition('* => *', [
      group([
        query(':enter', useAnimation(enterRouteAnimation, { params: enterRouteAnimationParams })),
        query(':leave', useAnimation(leaveRouteAnimation, { params: leaveRouteAnimationParams }), { optional: true })
      ])
    ])
  ]);
};
