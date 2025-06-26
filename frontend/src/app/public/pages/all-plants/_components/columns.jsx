import { buttonVariants } from "@/components/ui/button";
import { format } from "date-fns";
import { Link } from "react-router";

export const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.original.image}
        alt="Plant Image"
        className="bg-accent size-40 min-w-40 rounded-lg border"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "careLevel",
    header: "Care Level",
  },
  {
    accessorKey: "wateringFrequency",
    header: "Watering Frequency",
  },
  {
    accessorKey: "healthStatus",
    header: "Health Status",
  },
  {
    accessorKey: "lastWateredDate",
    header: "Last Watered Date",
    cell: ({row}) => format(row.original.lastWateredDate, "d MMMM yyyy 'at' h:mmaa")
  },
  {
    accessorKey: "nextWateringDate",
    header: "Next Watering Date",
    cell: ({row}) => format(row.original.nextWateringDate, "d MMMM yyyy 'at' h:mmaa")
  },
  {
    accessorKey: "action",
    header: "View Details",
    cell: ({ row }) => (
      <Link
        to={`/plants/${row.original.slug}`}
        className={buttonVariants({ variant: "outline" })}
      >
        View Details
      </Link>
    ),
  },
];
