import { cn } from "@/lib/utils";
import React from "react";
import WhileInView from "./while-in-view";

const SectionHeading = ({ children, className }) => {
  return (
    <WhileInView
      y={20}
      elem="h2"
      className={cn(
        "text-primary text-center text-4xl font-bold capitalize",
        className,
      )}
    >
      {children}
    </WhileInView>
  );
};

export default SectionHeading;
