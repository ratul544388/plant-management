import { Button, buttonVariants } from "@/components/ui/button";
import WhileInView from "@/components/while-in-view";
import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <video
        className="h-full w-full object-cover"
        src="https://res.cloudinary.com/easyplant/video/upload/f_auto,q_auto,c_fill/homepage2/hero-video-desktop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <WhileInView
          elem="h1"
          y={20}
          className="text-center text-5xl font-bold text-white"
        >
          Our Plants Water Themselves
        </WhileInView>
        <WhileInView delay={0.5}>
          <Link
            to="/plants"
            className={buttonVariants({
              variant: "outline",
              size: "xl",
              className:
                "mt-5 border-2 bg-black/10 text-lg! text-white backdrop-blur-xs",
            })}
          >
            Let&apos;s Go
          </Link>
        </WhileInView>
      </div>
      <span className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
    </section>
  );
};

export default Banner;
