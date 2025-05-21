import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import PageLoader from "@/components/loaders/page-loader";

const AllPlants = () => {
  const { data: plants, isPending } = useQuery({
    queryKey: ["plants", "all"],
    queryFn: () => request({ url: "/api/plants" }),
  });

  if (isPending) {
    return <PageLoader />;
  }

  return <DataTable columns={columns} data={plants.data} />;
};

export default AllPlants;
