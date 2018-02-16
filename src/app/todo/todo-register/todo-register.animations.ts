import { trigger, state, style, animate, transition } from '@angular/animations';

const easingCurves = {
  standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)'
};

const viewsContainerflyInOutAnimation = () => {
  return trigger('viewsContainerflyInOutAnimation', [
    state('void', style({ left: '800px' })),
    state('fly-in', style({ left: '56px' })),
    state('fly-out', style({ left: '-800px' })),
    transition('void => fly-in', [ animate(`250ms ${ easingCurves.deceleration }`) ]),
    transition('fly-in => fly-out', [ animate(`350ms ${ easingCurves.acceleration }`) ])
  ]);
};

const defaultViewFadeOutAnimation = () => {
  return trigger('defaultViewFadeOutAnimation', [
    state('fade-out', style({ opacity: '0' })),
    transition('void => fade-out', [ animate(`350ms ${ easingCurves.deceleration }`) ]),
  ]);
};

const hoverViewFadeOutAnimation = () => {
  return trigger('hoverViewFadeOutAnimation', [
    state('fade-out', style({ opacity: '0' })),
    transition('void => fade-out', [ animate(`350ms ${ easingCurves.deceleration }`) ]),
  ]);
};

export {
  viewsContainerflyInOutAnimation,
  defaultViewFadeOutAnimation,
  hoverViewFadeOutAnimation
};
