import { useEffect, useRef, useState } from "react";

type UseSectionRevealOptions = {
  disabled?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export default function useSectionReveal({
  disabled = false,
  threshold = 0.1,
  rootMargin = "0px 0px -6% 0px",
}: UseSectionRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(disabled);

  useEffect(() => {
    if (disabled) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [disabled, threshold, rootMargin]);

  return { ref, isVisible };
}
