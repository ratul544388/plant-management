import { format } from "date-fns";
import CellAction from "./cell-action";

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
    cell: ({ row }) =>
      format(row.original.lastWateredDate, "d MMMM yyyy 'at' h:mmaa"),
  },
  {
    accessorKey: "nextWateringDate",
    header: "Next Watering Date",
    cell: ({ row }) =>
      format(row.original.nextWateringDate, "d MMMM yyyy 'at' h:mmaa"),
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <CellAction plant={row.original} />,
  },
];
