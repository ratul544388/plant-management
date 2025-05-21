import PageLoader from "@/components/loaders/page-loader";
import PlantForm from "@/components/plant-form";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const EditPlant = () => {
  const { id: plantId } = useParams();
  const { data: plant, isPending } = useQuery({
    queryKey: ["editPlant", plantId],
    queryFn: () => request({ url: `/api/plants/${plantId}` }),
  });

  if (isPending) {
    return <PageLoader/>
  }

  return <PlantForm plant={plant.data} />;
};

export default EditPlant;
