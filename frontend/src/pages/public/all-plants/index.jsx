import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import PageLoader from "@/components/page-loader";
import PageTitle from "@/components/page-title";
import { useNavigate, useSearchParams } from "react-router";
import { CareLevels } from "@/constants/enums";
import { DropdownMenu } from "@/components/dropdown-menu";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const AllPlants = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const careLevel = searchParams.get("care_level");
  const { data: plants, isPending } = useQuery({
    queryKey: ["plants", "all", careLevel],
    queryFn: () => request({ url: "/api/plants", params: { careLevel } }),
  });

  if (isPending) {
    return <PageLoader />;
  }

  const careLevelDropdropdownMenuItems = CareLevels.map((item) => ({
    label: item,
    onClick: () => navigate(`/plants?care_level=${item.toLowerCase()}`),
    active: careLevel === item.toLowerCase(),
  }));

  if (careLevel) {
    careLevelDropdropdownMenuItems.push({
      label: "Reset",
      onClick: () => navigate("/plants"),
      icon: X,
    });
  }

  return (
    <>
      <PageTitle>All Plants</PageTitle>
      <div className="mb-4 flex justify-end gap-3">
        <DropdownMenu
          triggerClassName={cn("bg-background border shadow-sm")}
          items={careLevelDropdropdownMenuItems}
        >
          Care Level
          {careLevel && <Badge className="capitalize">{careLevel}</Badge>}
        </DropdownMenu>
      </div>
      <DataTable columns={columns} data={plants.data} />
    </>
  );
};

export default AllPlants;
