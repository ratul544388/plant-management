import { dashboardNavLinks, navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ThemeToggler } from "../theme-toggler";
import { Button, buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Logo from "./logo";

const MobileMenu = () => {
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("dashboard");
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
        <LinkItems items={navLinks} setOpen={setOpen} className="mt-3" />
        <Separator className="" />
        {isDashboard && (
          <LinkItems items={dashboardNavLinks} setOpen={setOpen} />
        )}
        <ThemeToggler className="mt-auto ml-6" showLabel />
      </SheetContent>
    </Sheet>
  );
};

const LinkItems = ({ items, setOpen, className }) => {
  const { pathname } = useLocation();
  return (
    <ul className={cn(className)}>
      {items.map(({ href, icon, label }) => {
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
  );
};

export default MobileMenu;
