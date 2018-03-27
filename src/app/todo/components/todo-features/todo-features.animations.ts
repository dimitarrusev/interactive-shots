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
} from '../../../shared/utils/animations';

export const todoFeaturesShotAnimation = (): AnimationMetadata[] => {
  // Parameters
  const slideInAnimationAnimateProperty = 'left';
  const slideInAnimation = generateSlideAnimation(slideInAnimationAnimateProperty);
  const slideInAnimationParams = {
    from: '800px',
    to: '41px',
    duration: '350ms',
    easing: decelerationEasingCurve
  };

  const slideOutAnimationAnimateProperty = 'left';
  const slideOutAnimation = generateSlideAnimation(slideOutAnimationAnimateProperty);
  const slideOutAnimationParams = {
    from: '41px',
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

  // Delays (in ms)
  const defaultViewFadeOutAnimationDelay = 1500;
  const hoverViewFadeOutAnimationDelay = 2000;
  const viewsContainerSlideOutAnimationDelay = 2000;

  // Queries
  const viewsQuery = `
    .views > img.default,
    .views > img.hover,
    .views > img.active,
    .views > img.active-to-default,
    .views > img.search-settings,
    .views > img.search-results-default,
    .views > img.search-results-hover,
    .views > img.search-results-hover-to-default,
    .views > img.tags-default,
    .views > img.tags-hover
  `;

  return [
    group([
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
      query('.views', [
        useAnimation(slideOutAnimation, { params: slideOutAnimationParams })
      ])
    ], { delay: viewsContainerSlideOutAnimationDelay })
  ];
}
