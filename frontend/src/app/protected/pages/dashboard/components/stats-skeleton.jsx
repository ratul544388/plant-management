import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const StatsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border p-6 rounded-lg shadow-md flex flex-col items-center">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="mt-3 size-8" />
        </div>
      ))}
    </div>
  );
};

export default StatsSkeleton;
