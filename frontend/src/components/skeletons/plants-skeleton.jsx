import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const PlantsSkeleton = ({ className }) => {
  return (
    <div
      className={cn(
        "xs:grid-cols-2 grid gap-5 md:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-lg border shadow-md">
          <Skeleton className="aspect-[6/4] w-full" />
          <div className="p-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="mt-2 h-3 w-10" />
            <div className="mt-3 flex gap-3">
              <Skeleton className="h-4 w-14 rounded-full" />
              <Skeleton className="h-4 w-14 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantsSkeleton;
