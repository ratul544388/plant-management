import { buttonVariants } from "@/components/ui/button";
import { placeholderUserImage } from "@/constants";
import { auth } from "@/firebase";
import useAuthStore from "@/hooks/use-auth-store";
import { cn } from "@/lib/utils";
import { signOut } from "firebase/auth";
import { LogOut, User2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

export const UserButton = ({ className }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { currentUser: user } = useAuthStore();

  const dropdownItems = [
    {
      label: "Profile",
      icon: User2,
      onClick: () => navigate("/profile"),
    },
    {
      label: "Logout",
      icon: LogOut,
      onClick: async () => {
        await signOut(auth);
        toast.success("Logged out")
        navigate("/");
      },
    },
  ];

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger
          className={cn(
            "group",
            buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "size-10 !rounded-full",
            }),
            className,
          )}
        >
          <div className="relative size-8 overflow-hidden rounded-full">
            <img
              src={user.photoURL || placeholderUserImage}
              alt="Avatar"
              className="size-full rounded-full object-cover"
            />
            <span className="absolute top-0 -left-2 block h-full w-1 -rotate-[25deg] bg-white blur-[1.7px] transition-all duration-300 group-hover:left-[105%]" />
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-background border px-0 py-2 shadow-md">
          <div className="flex items-center gap-3 p-3">
            <div className="size-14">
              <img
                src={user.photoURL || placeholderUserImage}
                alt="Avatar"
                className="size-full rounded-full object-cover"
              />
            </div>
            <div className="text-sm">
              <p className="text-foreground font-medium">
                {user.displayName || user.email.split("@")[0]}
              </p>
              <p className="text-foreground/80 line-clamp-1">{user.email}</p>
            </div>
          </div>
          <ul className="flex flex-col pt-3">
            {dropdownItems.map(({ label, icon, onClick }) => {
              const Icon = icon;
              return (
                <li
                  onClick={() => {
                    onClick();
                    setOpen(false);
                  }}
                  key={label}
                  role="button"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-foreground/70 hover:text-foreground/70 hover:bg-secondary/50 justify-start gap-4 rounded-none !px-6",
                  )}
                >
                  <Icon className="text-muted-foreground size-4" />
                  {label}
                </li>
              );
            })}
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
