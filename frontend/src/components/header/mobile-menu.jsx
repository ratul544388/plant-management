import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import useAuthStore from "@/hooks/use-auth-store";
import { navLinks } from "@/constants";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ThemeToggler } from "../theme-toggler";

const MobileMenu = () => {
  const { pathname } = useLocation();
  const { currentUser } = useAuthStore();
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="outline" size="icon">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="py-5">
        <SheetHeader className="hidden">
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        <Logo className="ml-4" />
        <ul className="mt-3">
          {navLinks(currentUser).map(({ href, icon, label }) => {
            const Icon = icon;
            return (
              <li key={label}>
                <Link
                  onClick={() => setOpen(false)}
                  to={href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full justify-start rounded-none !px-6",
                    href === pathname && "bg-accent",
                  )}
                >
                  <Icon className="size-5" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeToggler className="ml-6 mt-auto" showLabel/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
