import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollScaleFade = ({
  children,
  className,
  scale = 0.7,
  opacity = 0.6,
}) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const current = containerRef.current;
    gsap.fromTo(
      current,
      { scale, opacity },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: current,
          start: "top bottom",
          end: `+=${window.innerHeight - current.offsetHeight}`,
          scrub: true,
        },
      },
    );
  }, [scale, opacity]);
  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollScaleFade;
