import { useScrollHeader } from "@/hooks/use-scroll-header";
import HeaderBottom from "./header-bottom";
import HeaderTop from "./header-top";
import { cn } from "@/lib/utils";

const Header = () => {
  const { isVisible } = useScrollHeader();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition duration-300 ease-in",
        !isVisible && "-translate-y-1/2",
      )}
    >
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
