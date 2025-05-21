import PageTitle from "@/components/page-title";
import { buttonVariants } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex h-[calc(100vh_-_120px)] flex-col items-center justify-center px-4 text-center md:h-[calc(100vh_-_60px)]">
      <PageTitle>404 Not Found</PageTitle>
      <h1 className="text-primary mb-4 text-5xl font-bold">404</h1>
      <p className="mb-6 text-xl text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className={buttonVariants()}>
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;
