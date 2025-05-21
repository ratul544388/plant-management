import Container from "@/components/container";
import Header from "@/components/header/index.";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Container elem="main" className="mt-5">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
