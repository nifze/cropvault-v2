import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateTextReveal = (element: HTMLElement | null) => {
  if (!element) return;

  const text = element.textContent || '';
  element.innerHTML = text
    .split('')
    .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  gsap.from(element.querySelectorAll('span'), {
    duration: 0.6,
    opacity: 0,
    y: 20,
    stagger: 0.02,
    ease: 'power2.out',
  });
};

export const animateElementOnScroll = (
  element: HTMLElement | null,
  options?: gsap.TweenVars & { trigger?: HTMLElement | null }
) => {
  if (!element) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: options?.trigger || element,
      start: 'top 80%',
      markers: false,
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    ...options,
  });
};

export const createStaggerAnimation = (
  elements: HTMLElement[] | NodeListOf<Element>,
  options?: gsap.TweenVars
) => {
  gsap.from(elements, {
    duration: 0.8,
    opacity: 0,
    y: 30,
    stagger: 0.1,
    ease: 'power2.out',
    ...options,
  });
};

export const createParallaxEffect = (element: HTMLElement | null, speed: number = 0.5) => {
  if (!element) return;

  gsap.to(element, {
    y: (i, target) => {
      const distance = ScrollTrigger.getVelocity();
      return distance * speed;
    },
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1.2,
      markers: false,
    },
  });
};

export const createScrollTimeline = (timeline: gsap.core.Timeline) => {
  timeline.scrollTrigger = {
    trigger: '.scroll-timeline',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
    markers: false,
  } as ScrollTrigger.Vars;

  return timeline;
};

export const createMagneticButton = (button: HTMLElement | null) => {
  if (!button) return;

  const magneticStrength = 20;

  button.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
    const maxDistance = 100;

    if (distance < maxDistance) {
      const moveX = (mouseX / distance) * (magneticStrength * (1 - distance / maxDistance));
      const moveY = (mouseY / distance) * (magneticStrength * (1 - distance / maxDistance));

      gsap.to(button, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  });
};

export const createCursorEffect = (container: HTMLElement | null) => {
  if (!container) return;

  const cursor = document.createElement('div');
  cursor.className = 'cursor-effect';
  cursor.style.cssText = `
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid rgba(0, 217, 255, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(cursor);

  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  follower.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: rgba(0, 217, 255, 0.2);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(follower);

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, {
      left: mouseX,
      top: mouseY,
      duration: 0.1,
    });

    gsap.to(follower, {
      left: mouseX,
      top: mouseY,
      duration: 0.3,
    });
  });

  return { cursor, follower };
};

export const scrollToElement = (element: HTMLElement | null, offset: number = 80) => {
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};
