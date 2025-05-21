import React from "react";
import "./page-loading-spinner.css"
const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10">
      <span className="loader"/>
    </div>
  );
};

export default PageLoader;
