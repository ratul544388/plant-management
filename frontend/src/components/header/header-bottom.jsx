import React from "react";
import Logo from "./logo";
import Container from "../container";
import NavLinks from "./nav-links";
import { Link, useLocation } from "react-router";
import { buttonVariants } from "../ui/button";
import useAuthStore from "@/hooks/use-auth-store";
import { cn } from "@/lib/utils";
import { UserButton } from "./user-button";
import { ThemeToggler } from "../theme-toggler";
import MobileMenu from "./mobile-menu";

const HeaderBottom = () => {
  const { currentUser, loading } = useAuthStore();
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("dashboard");
  return (
    <div className="bg-background h-[50px] w-full border-b shadow-sm">
      <Container className="flex h-full items-center gap-4">
        <MobileMenu />
        <Logo />
        <NavLinks />
        <div
          className={cn(
            "ml-auto hidden gap-3",
            !currentUser && !loading && "flex",
          )}
        >
          <Link to="/auth/login" className={buttonVariants()}>
            Login
          </Link>
          <Link
            to="/auth/register"
            className={buttonVariants({
              variant: "outline",
              className: "border-primary border-2",
            })}
          >
            Register
          </Link>
        </div>
        {currentUser && (
          <div className="ml-auto flex items-center gap-3">
            <Link
              to="/dashboard"
              className={buttonVariants({
                variant: "outline",
                className: cn(
                  "border-primary hidden! border-2 sm:flex!",
                  isDashboard && "hidden! sm:hidden!",
                ),
              })}
            >
              Dashboard
            </Link>
            <UserButton />
          </div>
        )}
      </Container>
    </div>
  );
};

export default HeaderBottom;
