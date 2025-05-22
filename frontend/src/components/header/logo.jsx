import { cn } from "@/lib/utils";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router";

const Logo = ({ className, iconSize = 32 }) => {
  return (
    <Link
      to="/"
      className={cn(
        "text-primary flex items-center gap-2 text-2xl font-bold",
        className,
      )}
    >
      <FaLeaf size={iconSize} />
      PlantCare
    </Link>
  );
};

export default Logo;
