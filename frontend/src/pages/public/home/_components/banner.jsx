import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sliderData } from "@/constants";

const Banner = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {sliderData.map(({ image, title, description }, i) => (
          <CarouselItem key={i} className="cursor-grab">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
              <img
                src={image}
                className="size-full object-cover"
                alt="Slider Image"
              />
              <span className="pointer-events-none absolute inset-0 bg-neutral-950/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-10 text-center text-white select-none">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="max-w-[500px] text-white/90">{description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
