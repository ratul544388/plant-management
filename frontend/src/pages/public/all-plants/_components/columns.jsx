import { buttonVariants } from "@/components/ui/button";
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
    accessorKey: "wateringFrequency",
    header: "Watering Frequency",
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
