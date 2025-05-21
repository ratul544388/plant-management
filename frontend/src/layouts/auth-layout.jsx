import PageLoader from "@/components/loaders/page-loader";
import useAuthStore from "@/hooks/use-auth-store";
import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  const { currentUser, loading } = useAuthStore();

  if (loading) {
    return <PageLoader />;
  }

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mx-auto mt-20 max-w-[500px]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
