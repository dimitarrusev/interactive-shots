import { animation, animate, style } from "@angular/animations";

export const generateSlideAnimation = (animateProperty: 'top' | 'bottom' | 'left' | 'right') => {
  var slideAnimation;

  switch (animateProperty) {
    default:
    case 'top':
        slideAnimation = animation([
          style({ top: '{{ from }}' }),
          animate('{{ duration }} {{ easing }}', style({ top: '{{ to }}' }))
        ]);
      break;
    case 'bottom':
        slideAnimation = animation([
          style({ bottom: '{{ from }}' }),
          animate('{{ duration }} {{ easing }}', style({ bottom: '{{ to }}' }))
        ]);
      break;
    case 'left':
        slideAnimation = animation([
          style({ left: '{{ from }}' }),
          animate('{{ duration }} {{ easing }}', style({ left: '{{ to }}' }))
        ]);
      break;
    case 'right':
        slideAnimation = animation([
          style({ right: '{{ from }}' }),
          animate('{{ duration }} {{ easing }}', style({ right: '{{ to }}' }))
        ]);
      break;
  }

  return slideAnimation;
};

export const generateVaryAnimation = (animateProperty: 'width' | 'height') => {
  var increaseAnimation;

  switch(animateProperty) {
    default:
    case 'width':
        increaseAnimation = animation([
          style({ width: '{{ from }}' }),
          animate('{{ duration }} {{ easing }}', style({ width: '{{ to }}' }))
        ]);
      break;
    case 'height':
        increaseAnimation = animation([
          style({ height: '{{ from }}' }),
          animate('{{ duration }} {{ easing }}', style({ height: '{{ to }}' }))
        ]);
      break;
  }

  return increaseAnimation;
};
