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
  generateVaryAnimation,
  fadeAnimation,
  fadeScaleAnimation,
  decelerationEasingCurve,
  accelerationEasingCurve,
  standardEasingCurve,
  sharpEasingCurve
} from '../../../shared/utils/animations';

export const todoRegisterShotAnimation = (): AnimationMetadata[] => {
  // Parameters
  const slideInAnimationAnimateProperty = 'left';
  const slideInAnimation = generateSlideAnimation(slideInAnimationAnimateProperty);
  const slideInAnimationParams = {
    from: '800px',
    to: '56px',
    duration: '350ms',
    easing: decelerationEasingCurve
  };

  const slideOutAnimationAnimateProperty = 'left';
  const slideOutAnimation = generateSlideAnimation(slideOutAnimationAnimateProperty);
  const slideOutAnimationParams = {
    from: '56px',
    to: '-800px',
    duration: '350ms',
    easing: accelerationEasingCurve
  };

  const increaseAnimationAnimateProperty = 'width';
  const increaseAnimation = generateVaryAnimation(increaseAnimationAnimateProperty);
  const increaseAnimationParams = {
    from: '0%',
    to: '42%',
    duration: '200ms',
    easing: standardEasingCurve
  };

  const decreaseAnimationAnimateProperty = 'width';
  const decreaseAnimation = generateVaryAnimation(decreaseAnimationAnimateProperty);
  const decreaseAnimationParams = {
    from: '42%',
    to: '0%',
    duration: '200ms',
    easing: standardEasingCurve
  };

  const fadeOutAnimation = fadeAnimation;
  const fadeOutAnimationParams = {
    from: 1,
    to: 0,
    duration: '350ms',
    easing: decelerationEasingCurve
  };

  // Delays (in ms)
  const defaultViewFadeOutAnimationDelay = 1500;
  const hoverViewFadeOutAnimationDelay = 2000;
  const viewsContainerSlideOutAnimationDelay = 2000;

  // Queries
  const viewsQuery = `
    .views > img.default,
    .views > img.hover,
    .views > img.active
  `;

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
};

export const todoRegisterBtnAnimation = (opts: 'show' | 'hide'): AnimationMetadata => {
  // Parameters
  const fadeInScaleAnimation = fadeScaleAnimation;
  const fadeInScaleAnimationParams = {
    fadeFrom: 0,
    fadeTo: 1,
    scaleFrom: 0,
    scaleTo: 1,
    duration: '150ms',
    easing: sharpEasingCurve
  };

  const fadeOutScaleAnimation = fadeScaleAnimation;
  const fadeOutScaleAnimationParams = {
    fadeFrom: 1,
    fadeTo: 0,
    scaleFrom: 1,
    scaleTo: 0,
    duration: '150ms',
    easing: sharpEasingCurve
  };

  return (opts === 'show')
    ? useAnimation(fadeInScaleAnimation, { params: fadeInScaleAnimationParams })
    : useAnimation(fadeOutScaleAnimation, { params: fadeOutScaleAnimationParams });
};
