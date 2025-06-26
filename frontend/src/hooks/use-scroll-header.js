import { useEffect, useRef, useState } from "react";

export function useScrollHeader() {
  const THRESHOLD = 150;
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const accumulatedDelta = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      accumulatedDelta.current += delta;

      if (accumulatedDelta.current > THRESHOLD) {
        setIsVisible(false);
        accumulatedDelta.current = 0;
      } else if (accumulatedDelta.current < -THRESHOLD) {
        setIsVisible(true);
        accumulatedDelta.current = 0;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [THRESHOLD]);

  return { isVisible };
}
