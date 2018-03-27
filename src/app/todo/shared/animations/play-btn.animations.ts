import { useAnimation, AnimationMetadata } from '@angular/animations';
import { fadeScaleAnimation, sharpEasingCurve } from '../../../shared/utils/animations';

export const playBtnShowAnimation = (): AnimationMetadata => {
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

  return useAnimation(fadeInScaleAnimation, { params: fadeInScaleAnimationParams });
};

export const playBtnHideAnimation = (): AnimationMetadata => {
  // Parameters
  const fadeOutScaleAnimation = fadeScaleAnimation;
  const fadeOutScaleAnimationParams = {
    fadeFrom: 1,
    fadeTo: 0,
    scaleFrom: 1,
    scaleTo: 0,
    duration: '150ms',
    easing: sharpEasingCurve
  };

  return useAnimation(fadeOutScaleAnimation, { params: fadeOutScaleAnimationParams });
};
