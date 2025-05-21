import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className, elem = "div", ...props }) => {
  const Elem = elem || "div";
  return (
    <Elem
      className={cn(
        "mx-auto w-full max-w-[1280px] px-3 sm:px-5 lg:px-6",
        className,
      )}
      {...props}
    >
      {children}
    </Elem>
  );
};

export default Container;
