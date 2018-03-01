import { animation, animate, style } from "@angular/animations";

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
