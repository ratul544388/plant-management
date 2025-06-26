import Container from "@/components/container";
import PageLoader from "@/components/page-loader";
import useAuthStore from "@/hooks/use-auth-store";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedLayout = () => {
  const { pathname } = useLocation();
  const { currentUser, loading } = useAuthStore();

  if (loading) {
    return <PageLoader />;
  }

  if (!currentUser && !loading) {
    const href = `/auth/login?redirect_url=${pathname}`;
    return <Navigate to={href} />;
  }

  return (
    <Container className="pt-6">
      <Outlet />
    </Container>
  );
};

export default ProtectedLayout;
