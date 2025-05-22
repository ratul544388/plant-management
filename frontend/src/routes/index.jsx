import Layout from "@/layouts";
import AuthLayout from "@/layouts/auth-layout";
import ProtectedLayout from "@/layouts/protected-layout";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import AddPlant from "@/pages/protected/add-plant";
import EditPlant from "@/pages/protected/edit-plant";
import MyPlants from "@/pages/protected/my-plants";
import PlantDetails from "@/pages/protected/plant-details";
import Profile from "@/pages/protected/profile";
import AllPlants from "@/pages/public/all-plants";
import Home from "@/pages/public/home";
import NotFound from "@/pages/public/not-found";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/plants",
        Component: AllPlants,
      },
      {
        Component: ProtectedLayout,
        children: [
          {
            path: "/plants/my-plants",
            Component: MyPlants,
          },
          {
            path: "/plants/new",
            Component: AddPlant,
          },
          {
            path: "/plants/:slug/edit",
            Component: EditPlant,
          },
          {
            path: "/plants/:slug",
            Component: PlantDetails,
          },
          {
            path: "/profile",
            Component: Profile,
          },
        ],
      },
      {
        Component: AuthLayout,
        children: [
          {
            path: "/auth/login",
            Component: Login,
          },
          {
            path: "/auth/register",
            Component: Register,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);
