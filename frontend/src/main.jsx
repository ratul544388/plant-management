import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import ReactQueryProvider from "./providers/react-query-provider";

createRoot(document.getElementById("root")).render(
  <ReactQueryProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </ReactQueryProvider>,
);
