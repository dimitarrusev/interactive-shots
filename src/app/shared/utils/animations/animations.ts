import { animation, animate, style } from "@angular/animations";

export const standardEasingCurve = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
export const decelerationEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
export const accelerationEasingCurve = 'cubic-bezier(0.4, 0.0, 1, 1)';
export const sharpEasingCurve = 'cubic-bezier(0.4, 0.0, 0.6, 1)';

export const fadeAnimation = animation([
  style({ opacity: '{{ from }}' }),
  animate('{{ duration }} {{ easing }}', style({ opacity: '{{ to }}' }))
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
