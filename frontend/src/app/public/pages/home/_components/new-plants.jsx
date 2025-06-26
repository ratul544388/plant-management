import Container from "@/components/container";
import PlantCard from "@/components/plant-card";
import SectionHeading from "@/components/section-heading";
import PlantsSkeleton from "@/components/skeletons/plants-skeleton";
import { buttonVariants } from "@/components/ui/button";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const NewPlants = () => {
  const { data, isPending } = useQuery({
    queryKey: ["newPlants"],
    queryFn: () => request({ url: "/api/plants?limit=8" }),
  });

  const newPlants = data?.data || [];

  return (
    <Container elem="section" className="mt-12 flex flex-col">
      <SectionHeading className="mb-8">New Plants</SectionHeading>
      {isPending && <PlantsSkeleton className="xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4" />}
      <ul className="xs:grid-cols-2 grid gap-5 md:grid-cols-3 xl:grid-cols-4">
        {newPlants.map((plant) => (
          <PlantCard key={plant._id} {...plant} />
        ))}
      </ul>
      <Link
        to="/plants"
        className={buttonVariants({ className: "mx-auto mt-10" })}
      >
        View All
      </Link>
    </Container>
  );
};

const Loader = () => {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <span className="loader" />
    </div>
  );
};

export default NewPlants;
