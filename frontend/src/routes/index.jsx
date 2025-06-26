import AuthLayout from "@/app/auth/layout";
import Login from "@/app/auth/pages/login";
import Register from "@/app/auth/pages/register";
import Layout from "@/app/layout";
import NotFound from "@/app/not-found";
import ProtectedLayout from "@/app/protected/layout";
import AddPlant from "@/app/protected/pages/add-plant";
import Dashboard from "@/app/protected/pages/dashboard";
import DashboardLayout from "@/app/protected/pages/dashboard/layout";
import EditPlant from "@/app/protected/pages/edit-plant";
import MyPlants from "@/app/protected/pages/my-plants";
import PlantDetails from "@/app/protected/pages/plant-details";
import Profile from "@/app/protected/pages/profile";
import AllPlants from "@/app/public/pages/all-plants";
import Home from "@/app/public/pages/home";
import FeatureAddedSoon from "@/components/feature-added-soon";
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
            Component: DashboardLayout,
            children: [
              {
                path: "/dashboard",
                Component: Dashboard,
              },
              {
                path: "/dashboard/my-plants",
                Component: MyPlants,
              },
              {
                path: "/dashboard/plants/new",
                Component: AddPlant,
              },
              {
                path: "/dashboard/plants/:slug/edit",
                Component: EditPlant,
              },
              {
                path: "/dashboard/my-orders",
                element: (
                  <FeatureAddedSoon title="This Page will be added soon" />
                ),
              },
              {
                path: "/dashboard/notifications",
                element: (
                  <FeatureAddedSoon title="This Page will be added soon" />
                ),
              },
            ],
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
