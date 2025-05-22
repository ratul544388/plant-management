import useAuthStore from "@/hooks/use-auth-store";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import PlantCard from "@/components/plant-card";
import PageLoader from "@/components/page-loader";
import EmptyState from "@/components/empty-state";
import PageTitle from "@/components/page-title";

const MyPlants = () => {
  const { currentUser } = useAuthStore();
  const { data: plants, isPending } = useQuery({
    queryKey: ["plants", currentUser.id],
    queryFn: () => request({ url: `/api/plants/user/${currentUser.email}` }),
  });

  if (isPending) {
    return <PageLoader />;
  }

  if (plants.data.length === 0) {
    return (
      <EmptyState
        title="No Plants Found"
        description="Add your own plants to see in my plant page"
      />
    );
  }

  return (
    <>
      <PageTitle>My Plants</PageTitle>
      <ul className="xs:grid-cols-2 grid gap-5 md:grid-cols-3 xl:grid-cols-4">
        {plants.data.map((p) => (
          <PlantCard key={p._id} {...p} showDropdown />
        ))}
      </ul>
    </>
  );
};

export default MyPlants;
