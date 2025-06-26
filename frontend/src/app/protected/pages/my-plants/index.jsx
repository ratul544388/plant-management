import { DataTable } from "@/components/data-table";
import EmptyState from "@/components/empty-state";
import PageTitle from "@/components/page-title";
import useAuthStore from "@/hooks/use-auth-store";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./_components/columns";
import TableSkeleton from "./_components/table-skeleton";

const MyPlants = () => {
  const { currentUser } = useAuthStore();
  const { data: plants, isPending } = useQuery({
    queryKey: ["plants", currentUser.id],
    queryFn: () => request({ url: `/api/plants/user/${currentUser.email}` }),
  });

  if (isPending) {
    return <TableSkeleton/>
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
      <DataTable columns={columns} data={plants.data} />
    </>
  );
};

export default MyPlants;
