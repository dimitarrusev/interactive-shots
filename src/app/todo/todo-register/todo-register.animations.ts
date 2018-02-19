import { trigger, state, style, stagger, animate, animateChild, query, transition, useAnimation } from '@angular/animations';
import { generateSlideAnimation, fadeAnimation } from '../../shared/utils/animations';

// Easing curves
const standardEasingCurve = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
const decelerationEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
const accelerationEasingCurve = 'cubic-bezier(0.4, 0.0, 1, 1)';
const sharpEasingCurve = 'cubic-bezier(0.4, 0.0, 0.6, 1)';

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
export const animation = () => {
  return trigger('animation', [
    transition('void => play', [
      useAnimation(slideInAnimation, { params: slideInAnimationParams }),
      query('img.default, img.hover', stagger(hoverViewFadeOutAnimationDelay, [ useAnimation(fadeOutAnimation, { params: fadeOutAnimationParams }) ]), { delay: defaultViewFadeOutAnimationDelay }),
      query(':self', [ useAnimation(slideOutAnimation, { params: slideOutAnimationParams }) ], { delay: viewsContainerSlideOutAnimationDelay })
    ])
  ]);
};
