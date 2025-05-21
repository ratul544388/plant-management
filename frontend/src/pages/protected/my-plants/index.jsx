import useAuthStore from "@/hooks/use-auth-store";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import PlantCard from "./plant-card";
import PageLoader from "@/components/loaders/page-loader";

const MyPlants = () => {
  const { currentUser } = useAuthStore();
  const { data: plants, isPending } = useQuery({
    queryKey: ["plants", currentUser.id],
    queryFn: () => request({ url: `/api/plants/user/${currentUser.email}` }),
  });

  if(isPending) {
    return <PageLoader/>
  }

  return <div>
    <ul className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {plants.data.map((p) => (
        <PlantCard key={p._id} {...p}/>
      ))}
    </ul>
  </div>;
};

export default MyPlants;
