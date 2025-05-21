import { cn } from "@/lib/utils";
import { Link } from "react-router";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={cn("flex whitespace-nowrap items-center font-bold gap-2.5", className)}>
      <img src="/images/logo.png" alt="Logo" className="size-10" />
      <span className="font-semibold text-2xl text-primary hidden xs:block">MangoLeaf</span>
    </Link>
  );
};

export default Logo;
