import { buttonVariants } from "@/components/ui/button";
import { dashboardNavLinks } from "@/constants";
import { useScrollHeader } from "@/hooks/use-scroll-header";
import { cn } from "@/lib/utils";
import React from "react";
import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { isVisible } = useScrollHeader();
  return (
    <aside
      className={cn(
        "bg-background hidden md:block sticky top-[120px] h-[calc(100vh_-_150px)] min-w-[230px] rounded-lg border py-5 shadow-md transition-all duration-300 ease-in",
        !isVisible && "top-[70px]",
      )}
    >
      <ul className="">
        {dashboardNavLinks.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={label}>
              <Link
                className={buttonVariants({
                  variant: "ghost",
                  className: cn(
                    "text-muted-foreground hover:bg-primary/5 w-full justify-start rounded-none px-5!",
                    isActive && "bg-primary/5 text-foreground",
                  ),
                })}
                to={href}
              >
                <Icon className="size-4" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
