import { animate, animateChild, group, query, state, style, stagger, transition, trigger, useAnimation } from '@angular/animations';
import {
  generateSlideAnimation,
  generateVaryAnimation,
  fadeAnimation,
  decelerationEasingCurve,
  accelerationEasingCurve,
  standardEasingCurve
} from '../../../shared/utils/animations';

// Animation parameters
// slideInAnimation
const slideInAnimationAnimateProperty = 'left';
const slideInAnimation = generateSlideAnimation(slideInAnimationAnimateProperty);
const slideInAnimationParams = {
  from: '800px',
  to: '56px',
  duration: '350ms',
  easing: decelerationEasingCurve
};

// slideOutAnimation
const slideOutAnimationAnimateProperty = 'left';
const slideOutAnimation = generateSlideAnimation(slideOutAnimationAnimateProperty);
const slideOutAnimationParams = {
  from: '56px',
  to: '-800px',
  duration: '350ms',
  easing: accelerationEasingCurve
};

// increaseAnimation
const increaseAnimationAnimateProperty = 'width';
const increaseAnimation = generateVaryAnimation(increaseAnimationAnimateProperty);
const increaseAnimationParams = {
  from: '0%',
  to: '461px',
  duration: '200ms',
  easing: standardEasingCurve
};

// decreaseAnimation
const decreaseAnimationAnimateProperty = 'width';
const decreaseAnimation = generateVaryAnimation(decreaseAnimationAnimateProperty);
const decreaseAnimationParams = {
  from: '461px',
  to: '0%',
  duration: '200ms',
  easing: standardEasingCurve
};

// fadeOutAnimation
const fadeOutAnimation = fadeAnimation;
const fadeOutAnimationParams = {
  from: 1,
  to: 0,
  duration: '350ms',
  easing: decelerationEasingCurve
};

// Animation delays (in ms)
const defaultViewFadeOutAnimationDelay = 1500;
const hoverViewFadeOutAnimationDelay = 2000;
const viewsContainerSlideOutAnimationDelay = 2000;

// Animations
const viewsQuery = `
  .views > img.default,
  .views > img.hover,
  .views > img.active,
  .views > img.confirmation-default,
  .views > img.confirmation-hover
`;

export const todoResetPasswordAnimation = () => {
  return [
    group([
      query('.background > .panel', [
        useAnimation(increaseAnimation, { params: increaseAnimationParams })
      ]),
      query('.views', [
        useAnimation(slideInAnimation, { params: slideInAnimationParams })
      ])
    ]),

    // `defaultViewFadeOutAnimationDelay` is passed as parameter to the `query()` function
    // because `hoverViewFadeOutAnimationDelay` does not apply to the first match of the query
    query(`${ viewsQuery }`, stagger(hoverViewFadeOutAnimationDelay, [
      useAnimation(fadeOutAnimation, { params: fadeOutAnimationParams })
    ]), { delay: defaultViewFadeOutAnimationDelay }),

    group([
      query('.background > .panel', [
        useAnimation(decreaseAnimation, { params: decreaseAnimationParams })
      ]),
      query('.views', [
        useAnimation(slideOutAnimation, { params: slideOutAnimationParams })
      ])
    ], { delay: viewsContainerSlideOutAnimationDelay })
  ];
}
