import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { generateSlideAnimation, fadeAnimation } from '../../shared/utils/animations';

// Easing curves
const standardEasingCurve = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
const decelerationEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
const accelerationEasingCurve = 'cubic-bezier(0.4, 0.0, 1, 1)';
const sharpEasingCurve = 'cubic-bezier(0.4, 0.0, 0.6, 1)';

// Animation parameters
// slideInAnimation
const slideInAnimationAnimateProperty = 'left';
const slideInAnimationAnimatePropertyFrom = '800px';
const slideInAnimationAnimatePropertyTo = '56px';
const slideInAnimationDuration = '250ms';
const slideInAnimationEasing = decelerationEasingCurve;
const slideInAnimation = generateSlideAnimation(slideInAnimationAnimateProperty);

// slideOutAnimation
const slideOutAnimationAnimateProperty = 'left';
const slideOutAnimationAnimatePropertyFrom = '56px';
const slideOutAnimationAnimatePropertyTo = '-800px';
const slideOutAnimationDuration = '350ms';
const slideOutAnimationEasing = accelerationEasingCurve;
const slideOutAnimation = generateSlideAnimation(slideOutAnimationAnimateProperty);

// fadeOutAnimation
const fadeOutAnimationFrom = 1;
const fadeOutAnimationTo = 0;
const fadeOutAnimationDuration = '350ms';
const fadeOutAnimationEasing = decelerationEasingCurve;
const fadeOutAnimation = fadeAnimation;

// Animations
const viewsContainerSlideInOutAnimation = () => {
  return trigger('viewsContainerSlideInOutAnimation', [
    state('void', style({
      [slideInAnimationAnimateProperty]: slideInAnimationAnimatePropertyFrom
    })),
    transition('void => slide-in', [
      useAnimation(slideInAnimation, {
        params: {
          from: slideInAnimationAnimatePropertyFrom,
          to: slideInAnimationAnimatePropertyTo,
          duration: slideInAnimationDuration,
          easing: slideInAnimationEasing
        }
      }),
    ]),
    transition('slide-in => slide-out', [
      useAnimation(slideOutAnimation, {
        params: {
          from: slideOutAnimationAnimatePropertyFrom,
          to: slideOutAnimationAnimatePropertyTo,
          duration: slideOutAnimationDuration,
          easing: slideOutAnimationEasing
        }
      }),
    ]),
  ]);
};

const defaultViewFadeOutAnimation = () => {
  return trigger('defaultViewFadeOutAnimation', [
    state('fade-out', style({ opacity: fadeOutAnimationTo })),
    transition('void => fade-out', [
      useAnimation(fadeOutAnimation, {
        params: {
          from: fadeOutAnimationFrom,
          to: fadeOutAnimationTo,
          duration: fadeOutAnimationDuration,
          easing: fadeOutAnimationEasing
        }
      })
    ]),
  ]);
};

const hoverViewFadeOutAnimation = () => {
  return trigger('hoverViewFadeOutAnimation', [
    state('fade-out', style({ opacity: fadeOutAnimationTo })),
    transition('void => fade-out', [
      useAnimation(fadeOutAnimation, {
        params: {
          from: fadeOutAnimationFrom,
          to: fadeOutAnimationTo,
          duration: fadeOutAnimationDuration,
          easing: fadeOutAnimationEasing
        }
      })
    ]),
  ]);
};

export {
  viewsContainerSlideInOutAnimation,
  defaultViewFadeOutAnimation,
  hoverViewFadeOutAnimation
};
