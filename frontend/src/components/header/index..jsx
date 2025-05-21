import useAuthStore from "@/hooks/use-auth-store";
import { PlusCircle } from "lucide-react";
import { Link, useLocation } from "react-router";
import Container from "../container";
import { buttonVariants } from "../ui/button";
import Logo from "./logo";
import NavLinks from "./nav-links";
import { UserButton } from "./user-button";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const { currentUser } = useAuthStore();
  const { pathname } = useLocation();
  return (
    <header className="bg-background sticky top-0 z-50 h-[75px] border-b">
      <Container className="flex h-full items-center justify-between gap-10">
        <div className="flex items-center gap-3">
          <MobileMenu />
          <div className="flex items-center gap-10">
            <Logo />
            <NavLinks />
          </div>
        </div>
        {currentUser && (
          <div className="flex items-center gap-3">
            {pathname !== "/plants/new" && (
              <Link to="/plants/new" className={buttonVariants()}>
                <PlusCircle className="size-4" />
                Add Plant
              </Link>
            )}
            <UserButton />
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
