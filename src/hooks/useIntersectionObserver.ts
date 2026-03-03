import { useEffect, useState, useCallback, useRef } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.15,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) => {
  const [elements, setElements] = useState<Element[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((element: Element) => {
    setElements(prev => {
      if (prev.includes(element)) return prev;
      return [...prev, element];
    });
  }, []);

  const unobserve = useCallback((element: Element) => {
    setElements(prev => prev.filter(el => el !== element));
    if (observerRef.current) {
      observerRef.current.unobserve(element);
    }
  }, []);

  useEffect(() => {
    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
            if (triggerOnce) {
              observerRef.current?.unobserve(entry.target);
              setElements(prev => prev.filter(el => el !== entry.target));
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [elements, threshold, rootMargin, triggerOnce]);

  return { observe, unobserve };
};
