import { animation, animate, style } from "@angular/animations";

export const fadeAnimation = animation([
  style({ opacity: '{{ from }}' }),
  animate('{{ duration }} {{ easing }}', style({ opacity: '{{ to }}' }))
]);
