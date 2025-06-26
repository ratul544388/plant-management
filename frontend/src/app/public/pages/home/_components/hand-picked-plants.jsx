import Container from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import WhileInView from "@/components/while-in-view";
import React from "react";
import { Link } from "react-router";

const HandPickPlants = () => {
  return (
    <section className="bg-accent/50 py-10">
      <Container className="grid gap-10 md:grid-cols-2">
        <video
          className="object-cover mx-auto rounded-lg"
          src="https://res.cloudinary.com/easyplant/video/upload/f_auto,q_auto,c_fill,w_558/homepage2/desktop-homepage-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <WhileInView className="flex flex-col max-w-[330px] mx-auto items-center justify-center">
          <h3 className="text-center text-4xl font-semibold">
            Hand-Picked Premium Plants
          </h3>
          <p className="text-muted-foreground mt-3 text-center">
            We carefully select only the hearlhiest, most vibrant plants to ship
            for our greenhouse
          </p>
          <Link
            to="/plants"
            className={buttonVariants({ size: "lg", className: "mt-5" })}
          >
            Let&apos;s Go
          </Link>
        </WhileInView>
      </Container>
    </section>
  );
};

export default HandPickPlants;
