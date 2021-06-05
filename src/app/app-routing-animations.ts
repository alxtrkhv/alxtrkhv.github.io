import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

const animationDuration = 300;

const mainAnimation = [
  style({ opacity: 0 }),
  animate(animationDuration, style({ opacity: 1 })),
];

export const pageChangeAnimation = trigger('routeAnimations', [
  transition('* <=> *', mainAnimation),
]);
