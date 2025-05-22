import PlantCard from "@/components/plant-card";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";

const NewPlants = () => {
  const { data, isPending } = useQuery({
    queryKey: ["newPlants"],
    queryFn: () => request({ url: "/api/plants?limit=8" }),
  });

  const newPlants = data?.data || [];

  return (
    <section className="mt-12">
      <h2 className="text-primary mb-6 text-2xl font-bold">New Plants</h2>
      {isPending && <Loader/>}
      <ul className="xs:grid-cols-2 grid gap-5 md:grid-cols-3 xl:grid-cols-4">
        {newPlants.map((plant) => (
          <PlantCard key={plant._id} {...plant} />
        ))}
      </ul>
    </section>
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
