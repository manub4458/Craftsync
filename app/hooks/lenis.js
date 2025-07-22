'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
export function useLenis() {
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) return; // Skip Lenis on Safari for smoother fallback

    const lenis = new Lenis({
      duration: 1.5, // Smoother scrolling duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1, // Smooth interpolation
      smooth: true,
      smoothTouch: true, // Enable for touch devices
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}