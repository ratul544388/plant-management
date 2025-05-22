import PageLoader from "@/components/page-loader";
import PageTitle from "@/components/page-title";
import PlantForm from "@/components/plant-form";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const EditPlant = () => {
  const { slug } = useParams();

  const { data: plant, isPending } = useQuery({
    queryKey: ["plant", slug],
    queryFn: () => request({ url: `/api/plants/${slug}` }),
  });

  if (isPending) {
    return <PageLoader/>
  }

  return <>
  <PageTitle>Edit Plant</PageTitle>
  <PlantForm plant={plant.data} />
  </>;
};

export default EditPlant;
