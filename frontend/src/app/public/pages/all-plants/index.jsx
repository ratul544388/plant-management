import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import PlantCard from "@/components/plant-card";
import PlantsSkeleton from "@/components/skeletons/plants-skeleton";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "./_components/search-input";
import { useSearchParams } from "react-router";

const AllPlants = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const { data: plants, isPending } = useQuery({
    queryKey: ["plants", "all", q],
    queryFn: () => request({ url: "/api/plants", params: { q } }),
  });

  return (
    <Container className="pt-6">
      <PageTitle>All Plants</PageTitle>
      <SearchInput />
      {isPending && <PlantsSkeleton className="mt-8" />}
      <ul className="xs:grid-cols-2 mt-8 grid gap-5 md:grid-cols-3 xl:grid-cols-4">
        {plants?.data.map((plant) => (
          <PlantCard key={plant._id} {...plant} />
        ))}
      </ul>
    </Container>
  );
};

export default AllPlants;
