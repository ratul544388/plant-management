import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TableSkeleton = () => {
  return (
    <div className="bg-background border w-full overflow-hidden rounded-lg">
      <div className="flex h-10 gap-5 items-center justify-between border-b px-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <Skeleton key={i} className="h-4 min-w-20" />
        ))}
      </div>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex gap-5 px-4 items-center justify-between py-3 border-b">
            <Skeleton className="size-40 min-w-40"/>
            {Array.from({length: 8}).map((_, i) => (
              <Skeleton key={i} className="min-w-20 h-4"/>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;
