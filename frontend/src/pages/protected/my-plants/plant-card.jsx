import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router";

const PlantCard = ({ _id, image, name, category, careLevel, healthStatus }) => {
  return (
    <li className="overflow-hidden rounded-xl border shadow-md hover:shadow-lg">
      <img
        src={image}
        className="bg-accent aspect-[6/4] w-full"
        alt="Plant Image"
      />
      <div className="flex flex-col p-5">
        <p className="font-medium">{name}</p>
        <p className="text-muted-foreground text-sm">{category}</p>
        <div className="text-muted-foreground flex items-center gap-1.5 text-sm my-3">
          <Badge variant="secondary">{careLevel}</Badge>
          <span>-</span>
          <Badge variant="secondary">{healthStatus}</Badge>
        </div>
        <div className="mt-3 flex gap-3">
          <Button variant="destructive" className="flex-1">
            <Trash className="size-4" />
            Delete
          </Button>
          <Link
            to={`/plants/${_id}/edit`}
            variant="outline"
            className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
          >
            <Edit className="size-4" />
            Edit
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PlantCard;
