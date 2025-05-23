import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'animate-slide-in-up',
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay]);

  return { ref, isVisible, animationClass };
};

// Alternative hook for multiple elements
export const useScrollAnimations = (count: number, baseDelay: number = 0) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleElements, setVisibleElements] = useState<boolean[]>(new Array(count).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleElements(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, baseDelay + (index * 100));
              observer.unobserve(entry.target);
            }
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
          }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [count, baseDelay]);

  const setRef = (index: number) => (element: HTMLDivElement | null) => {
    refs.current[index] = element;
  };

  return { setRef, visibleElements };
};
