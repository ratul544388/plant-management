import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
  elem = "div",
  noPadding,
  ...props
}) => {
  const Elem = elem || "div";
  return (
    <Elem
      className={cn(
        "mx-auto w-full max-w-[1280px] px-3 sm:px-4 lg:px-6",
        noPadding && "px-0 sm:px-0",
        className,
      )}
      {...props}
    >
      {children}
    </Elem>
  );
};

export default Container;
