import { useState, useEffect, useRef } from "react";

export function useCounterAnimation(
  targetNumber: number,
  duration: number = 2000,
) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    const startTime = Date.now();

    const animateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentNumber = Math.floor(targetNumber * progress);
      setDisplayNumber(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        setDisplayNumber(targetNumber);
      }
    };

    requestAnimationFrame(animateCounter);
  }, [targetNumber, duration]);

  return displayNumber;
}
