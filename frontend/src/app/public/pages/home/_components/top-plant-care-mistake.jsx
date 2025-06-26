import Container from "@/components/container";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TopPlantCareMistake = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("li");

    if (items) {
      const ctx = gsap.context(() => {
        gsap.from(items, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }, listRef);

      return () => ctx.revert(); // Cleanup
    }
  }, []);

  return (
    <section className="bg-background py-10">
      <Container elem="section">
        <h2 className="text-primary mb-6 text-2xl font-bold">
          Top Plant Care Mistakes
        </h2>
        <ul
          ref={listRef}
          className="text-muted-foreground list-disc space-y-2 pl-6"
        >
          <li>Overwatering your plants.</li>
          <li>Not providing enough light.</li>
          <li>Using the wrong type of soil.</li>
          <li>Ignoring signs of pests or diseases.</li>
          <li>Skipping regular checks on watering schedules.</li>
        </ul>
      </Container>
    </section>
  );
};

export default TopPlantCareMistake;
