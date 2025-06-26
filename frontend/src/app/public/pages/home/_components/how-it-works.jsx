import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import WhileInView from "@/components/while-in-view";

const HowItWorks = () => {
  return (
    <section className="bg-accent/50 mt-10 py-10">
      <Container elem="section">
        <SectionHeading>Here&apos;s how it works</SectionHeading>
        <span className="mx-auto mt-10 block h-[2px] w-[250px] border border-dashed border-gray-300" />
        <div className="mt-10 flex flex-col gap-6 sm:flex-row">
          {Array.from({ length: 2 }).map((_, i) => (
            <WhileInView
              y={20}
              duration={1.5}
              key={i}
              className="flex w-full flex-col items-center"
            >
              <div className="bg-background flex size-10 items-center justify-center rounded-full text-2xl font-bold">
                {i + 1}
              </div>
              <p className="text-muted-foreground mt-4">
                Lorem ipsum dolor sit amet.
              </p>
              <img
                src={`/images/how-it-works/${i + 1}.webp`}
                alt="plant image"
                className="mt-4 w-full bg-accent rounded-xl"
              />
            </WhileInView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
