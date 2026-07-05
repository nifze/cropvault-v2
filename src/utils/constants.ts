// Animation easing functions for consistent use throughout the app
export const easings = {
  // Power easing
  powerIn: 'power1.in',
  powerOut: 'power2.out',
  powerInOut: 'power2.inOut',

  // Quad easing
  quadIn: 'quad.in',
  quadOut: 'quad.out',
  quadInOut: 'quad.inOut',

  // Cubic easing
  cubicIn: 'cubic.in',
  cubicOut: 'cubic.out',
  cubicInOut: 'cubic.inOut',

  // Elastic easing
  elasticOut: 'elastic.out(1, 0.5)',
  elasticInOut: 'elastic.inOut(1, 0.5)',

  // Back easing
  backOut: 'back.out(1.7)',
  backInOut: 'back.inOut(1.7)',

  // Bounce easing
  bounceOut: 'bounce.out',

  // Sine easing
  sineIn: 'sine.in',
  sineOut: 'sine.out',
  sineInOut: 'sine.inOut',
};

export const animationDurations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
};

export const staggerDelays = {
  minimal: 0.05,
  small: 0.1,
  medium: 0.15,
  large: 0.2,
};
