import { animation, animate, style } from "@angular/animations";

export const standardEasingCurve = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
export const decelerationEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
export const accelerationEasingCurve = 'cubic-bezier(0.4, 0.0, 1, 1)';
export const sharpEasingCurve = 'cubic-bezier(0.4, 0.0, 0.6, 1)';

export const fadeAnimation = animation([
  style({ opacity: '{{ from }}' }),
  animate('{{ duration }} {{ easing }}', style({ opacity: '{{ to }}' }))
]);

export const fadeScaleAnimation = animation([
  style({
    opacity: '{{ fadeFrom }}',
    transform: 'translateX(-25%) translateY(-25%) scale({{ scaleFrom }})' // TODO: Refactor
  }),
  animate('{{ duration }} {{ easing }}', style({
    opacity: '{{ fadeTo }}',
    transform: 'translateX(-25%) translateY(-25%) scale({{ scaleTo }})' // TODO: Refactor
  }))
]);

export const routeAnimation = animation([
  style({
    opacity: '{{ fadeFrom }}',
    transform: 'translateX({{ slideFrom }}) scale({{ scaleFrom }})'
  }),
  animate('{{ duration }} {{ easing }}', style({
    opacity: '{{ fadeTo }}',
    transform: 'translateX({{ slideTo }}) scale({{ scaleTo }})'
  }))
]);
