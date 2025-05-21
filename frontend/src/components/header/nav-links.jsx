import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
import { buttonVariants } from "../ui/button";
import useAuthStore from "@/hooks/use-auth-store";
import { motion } from "framer-motion";

const NavLinks = ({ className }) => {
  const { currentUser } = useAuthStore();
  const { pathname } = useLocation();

  return (
    <nav className={cn('hidden md:block', className)}>
      <ul className="flex">
        {navLinks(currentUser).map(({ label, href }) => {
          const isActive = pathname === href;
          const ActiveElem = motion.create("span");
          return (
            <li key={label}>
              <Link
                to={href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-foreground/70 hover:text-primary",
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
