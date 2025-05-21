import {
  Home,
  Leaf,
  ListTree,
  User,
  UserPlus
} from "lucide-react";

export const navLinks = (currentUser) => [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "All Plants",
    href: "/plants/all",
    icon: Leaf,
  },
  ...(currentUser
    ? [
        {
          label: "My Plants",
          href: "/plants/my-plants",
          icon: ListTree,
        },
      ]
    : [
        {
          label: "Login",
          href: "/auth/login",
          icon: User,
        },
        {
          label: "Register",
          href: "/auth/register",
          icon: UserPlus,
        },
      ]),
];

export const placeholderUserImage = "/images/placeholder-user.webp";

export const mockUser = {
  id: "12345",
  name: "Ratul Hossain",
  email: "ratulislam544388@gmail.com",
  imageUrl: "",
  username: "ratul544",
  role: "admin",
};

export const wateringFrequency = [
  "Every Day",
  "Every 2 Days",
  "Every 3 Days",
  "Every 4 Days",
  "Every 5 Days",
  "Every Week",
  "Every 10 Days",
  "Every 2 Weeks",
  "Every 3 Weeks",
  "Every Month"
];
