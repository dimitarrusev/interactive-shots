import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  stagger,
  transition,
  trigger,
  useAnimation,
  AnimationMetadata
} from '@angular/animations';

import {
  generateSlideAnimation,
  fadeAnimation,
  decelerationEasingCurve,
  accelerationEasingCurve,
  standardEasingCurve
} from '../../shared/utils/animations';

export const todoDashboardShotAnimation = (): AnimationMetadata[] => {
  // Parameters
  const authenticationSlideInAnimationAnimateProperty = 'left';
  const authenticationSlideInAnimation = generateSlideAnimation(authenticationSlideInAnimationAnimateProperty);
  const authenticationSlideInAnimationParams = {
    from: '800px',
    to: '122px',
    duration: '350ms',
    easing: decelerationEasingCurve
  };

  const dashboardSlideInAnimationAnimateProperty = 'left';
  const dashboardSlideInAnimation = generateSlideAnimation(dashboardSlideInAnimationAnimateProperty);
  const dashboardSlideInAnimationParams = {
    from: '800px',
    to: '32px',
    duration: '350ms',
    easing: decelerationEasingCurve
  };

  const authenticationSlideOutAnimationAnimateProperty = 'left';
  const authenticationSlideOutAnimation = generateSlideAnimation(authenticationSlideOutAnimationAnimateProperty);
  const authenticationSlideOutAnimationParams = {
    from: '122px',
    to: '-800px',
    duration: '350ms',
    easing: accelerationEasingCurve
  };

  const dashboardSlideOutAnimationAnimateProperty = 'left';
  const dashboardSlideOutAnimation = generateSlideAnimation(dashboardSlideOutAnimationAnimateProperty);
  const dashboardSlideOutAnimationParams = {
    from: '32px',
    to: '-800px',
    duration: '350ms',
    easing: accelerationEasingCurve
  };

  const fadeOutAnimation = fadeAnimation;
  const fadeOutAnimationParams = {
    from: 1,
    to: 0,
    duration: '350ms',
    easing: decelerationEasingCurve
  };

  const defaultViewFadeOutAnimationDelay = 1500;
  const hoverViewFadeOutAnimationDelay = 2000;
  const slideOutAnimationDelay = 2000;
  const authenticationSlideOutAnimationDelay = 150;
  const dashboardSlideInAnimationDelay = 75;

  // Queries
  const dashboardQuery = `
    .views > .dashboard > img.default,
    .views > .dashboard > img.hover,
    .views > .dashboard > img.active
  `;

  return [
    group([
      query('.views > .authentication', [
        useAnimation(authenticationSlideInAnimation, { params: authenticationSlideInAnimationParams })
      ]),
      query('.views > .dashboard', [
        useAnimation(dashboardSlideInAnimation, { params: dashboardSlideInAnimationParams })
      ], { delay: dashboardSlideInAnimationDelay })
    ]),

    // `defaultViewFadeOutAnimationDelay` is passed as parameter to the `query()` function
    // because `hoverViewFadeOutAnimationDelay` does not apply to the first match of the query
    query(`${ dashboardQuery }`, stagger(hoverViewFadeOutAnimationDelay, [
      useAnimation(fadeOutAnimation, { params: fadeOutAnimationParams })
    ]), { delay: defaultViewFadeOutAnimationDelay }),

    group([
      query('.views > .authentication', [
        useAnimation(authenticationSlideOutAnimation, { params: authenticationSlideOutAnimationParams })
      ], { delay: authenticationSlideOutAnimationDelay }),
      query('.views > .dashboard', [
        useAnimation(dashboardSlideOutAnimation, { params: dashboardSlideOutAnimationParams })
      ])
    ], { delay: slideOutAnimationDelay }),
  ];
}
