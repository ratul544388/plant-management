import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";
import { buttonVariants } from "../ui/button";

const NavLinks = ({ className }) => {
  const { pathname } = useLocation();

  return (
    <nav className={cn('hidden md:block', className)}>
      <ul className="flex">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;
          const ActiveElem = motion.create("span");
          return (
            <li key={label}>
              <Link
                to={href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-foreground/70 hover:text-primary hover:bg-primary/10",
                  isActive && "text-primary hover:text-primary",
                )}
              >
                <span className="relative">
                  {label}
                  {pathname === href && (
                    <ActiveElem
                      layoutId="activeNavLink"
                      className="bg-primary absolute inset-x-0 -bottom-2 h-1 rounded-full"
                    />
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
