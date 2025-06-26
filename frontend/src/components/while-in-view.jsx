import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WhileInView = ({
  children,
  x = 0,
  y = 20,
  opacity = 0,
  duration = 1,
  delay = 0,
  scale = 1,
  elem: Elem = "div",
  className,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const current = containerRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        current,
        {
          x,
          y,
          opacity,
          scale,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [x, y, opacity, scale, duration, delay]);

  return (
    <Elem ref={containerRef} className={cn(className)}>
      {children}
    </Elem>
  );
};

export default WhileInView;
