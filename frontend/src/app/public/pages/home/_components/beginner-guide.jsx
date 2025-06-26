import Container from "@/components/container";
import WhileInView from "@/components/while-in-view";
import React from "react";

const BeginnerGuide = () => {
  return (
    <section className="bg-background mt-12 rounded-xl py-10">
      <Container>
        <WhileInView className="text-primary mb-6 text-2xl font-bold">
          Beginner-Friendly Plants
        </WhileInView>
        <WhileInView
          delay={0.5}
          className="text-muted-foreground grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-xl border bg-white p-4 shadow-sm dark:bg-black">
            <h4 className="text-primary text-lg font-semibold">Snake Plant</h4>
            <p className="mt-1 text-sm">
              Extremely low-maintenance and great for indoor air quality.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-4 shadow-sm dark:bg-black">
            <h4 className="text-primary text-lg font-semibold">Pothos</h4>
            <p className="mt-1 text-sm">
              Thrives in various light conditions and easy to propagate.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-4 shadow-sm dark:bg-black">
            <h4 className="text-primary text-lg font-semibold">Aloe Vera</h4>
            <p className="mt-1 text-sm">
              Great for beginners and doubles as a soothing plant for cuts.
            </p>
          </div>
        </WhileInView>
      </Container>
    </section>
  );
};

export default BeginnerGuide;
