const shakeLeft = `translateX(-5px)`;
const shakeRight = `translateX(5px)`;

export const shakeAnimation: Keyframe[] = [
  {transform: shakeLeft, offset: 0.1},
  {transform: shakeRight, offset: 0.2},
  {transform: shakeLeft, offset: 0.3},
  {transform: shakeRight, offset: 0.4},
  {transform: shakeLeft, offset: 0.5},
  {transform: shakeRight, offset: 0.6},
  {transform: shakeLeft, offset: 0.7},
  {transform: shakeRight, offset: 0.8},
  {transform: shakeLeft, offset: 0.9}
];
