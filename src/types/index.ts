export interface AnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  repeat?: number;
  yoyo?: boolean;
}

export interface ScrollTriggerConfig {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

export interface ParallaxConfig {
  speed?: number;
  direction?: 'up' | 'down';
  triggerElement?: HTMLElement;
}

export interface CursorConfig {
  size?: number;
  borderColor?: string;
  backgroundColor?: string;
  speed?: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
