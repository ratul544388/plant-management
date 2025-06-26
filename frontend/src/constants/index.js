import {
  Home,
  Leaf,
  LayoutDashboard,
  PlusCircle,
  ShoppingBag,
  Bell,
} from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "All Plants",
    href: "/plants",
    icon: Leaf,
  },
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
  "Every Month",
];

export const sliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnRzfGVufDB8fDB8fHww",
    title: "Smart Plant Care Scheduling",
    description:
      "Automatically track watering, fertilizing, and care schedules with personalized reminders based on your plant’s unique needs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnRzfGVufDB8fDB8fHww",
    title: "Your Green Companion Dashboard",
    description:
      "Access a sleek, user-friendly dashboard to manage all your indoor and outdoor plants with full detail and health status insights.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1446292532430-3e76f6ab6444?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Secure & Personalized Experience",
    description:
      "Register securely, manage your personal plant list, and enjoy a private, responsive platform optimized for mobile and desktop.",
  },
];

export const topHeaderAnimatedTexts = [
  "Free Shipping On All Orders",
  "Free Personalized Gift Notes",
  "90-Days Plants Guarantee",
];

export const communityData = [
  {
    username: "@luna_dev",
    image: "/images/community/1.webp",
  },
  {
    username: "@pixel_john",
    image: "/images/community/2.webp",
  },
  {
    username: "@codey_kim",
    image: "/images/community/3.webp",
  },
  {
    username: "@design_ash",
    image: "/images/community/4.webp",
  },
  {
    username: "@react_rio",
    image: "/images/community/5.webp",
  },
  {
    username: "@vue_vita",
    image: "/images/community/6.webp",
  },
  {
    username: "@next_niko",
    image: "/images/community/7.webp",
  },
];

export const dashboardNavLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Plants",
    href: "/dashboard/my-plants",
    icon: Leaf,
  },
  {
    label: "Add Plant",
    href: "/dashboard/plants/new",
    icon: PlusCircle,
  },
  {
    label: "My Orders",
    href: "/dashboard/my-orders",
    icon: ShoppingBag,
  },
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
];
