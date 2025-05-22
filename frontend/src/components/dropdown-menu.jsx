import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const DropdownMenu = ({
  items,
  children,
  align = "end",
  showArrow,
  triggerClassName,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(buttonVariants({ variant: "ghost" }), triggerClassName)}
      >
        {children}
        {showArrow && (
          <ChevronDown
            className={cn("size-4 transition-all", open && "rotate-180")}
          />
        )}
      </PopoverTrigger>
      <PopoverContent align={align} className="flex w-full flex-col px-0 py-2">
        {items.map(
          ({
            label,
            destructive,
            icon: Icon,
            active,
            disabled,
            onClick,
            badge,
          }) => (
            <Button
              onClick={() => {
                onClick();
                setOpen(false);
              }}
              disabled={disabled}
              key={label}
              className={cn(
                "justify-start rounded-none pr-8!",
                destructive && "text-red-500 hover:text-red-600",
              )}
              variant="ghost"
            >
              {badge && (
                <span
                  className={cn(
                    "bg-accent flex size-5 items-center justify-center rounded-full text-xs font-medium",
                    badge.isPending && "animate-pulse",
                  )}
                >
                  {badge.label}
                </span>
              )}
              {Icon && <Icon className="size-4" />}
              {label}
              <Check
                className={cn(
                  "text-muted-foreground ml-auto size-4 opacity-0",
                  active && "opacity-100",
                )}
              />
            </Button>
          ),
        )}
      </PopoverContent>
    </Popover>
  );
};
