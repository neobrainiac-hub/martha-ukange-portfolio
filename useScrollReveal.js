import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to every element with class `reveal`
 * inside the container ref. When an element enters the viewport it gains
 * the `visible` class, triggering the CSS transition defined in index.css.
 */
export function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
