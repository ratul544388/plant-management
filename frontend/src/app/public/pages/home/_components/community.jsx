import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WhileInView from "@/components/while-in-view";
import { communityData } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const Community = () => {
  return (
    <section className="bg-background mt-10 py-10">
      <Container elem="section" noPadding>
        <SectionHeading>Join Our Community</SectionHeading>
        <WhileInView
          elem="p"
          className="text-muted-foreground mt-4 text-center text-sm"
        >
          Use @plantcare to tag your plantcare and get a chance to be featured
        </WhileInView>
        <CommunityCarousel />
      </Container>
    </section>
  );
};

const CommunityCarousel = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      opts={{ align: "start", loop: true }}
      className="mt-7 cursor-grab select-none pl-2"
    >
      <CarouselContent className="">
        {communityData.map(({ username, image }) => (
          <CarouselItem
            key={username}
            className="basis-1/2 px-2 py-5 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <div className="overflow-hidden rounded-md border pb-3 shadow-md transition-shadow hover:shadow-lg">
              <img
                src={image}
                alt="Image"
                className="aspect-square bg-accent w-full object-cover"
              />
              <p className="text-muted-foreground mt-3 ml-3">@testUsername</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-3 -translate-y-1/2 text-white backdrop-blur-sm" />
      <CarouselNext className="absolute top-1/2 right-3 -translate-y-1/2 text-white backdrop-blur-sm" />
    </Carousel>
  );
};

export default Community;
