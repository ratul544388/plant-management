import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import ReactQueryProvider from "./providers/react-query-provider";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./providers/theme-provider";

createRoot(document.getElementById("root")).render(
  <ReactQueryProvider>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
    <Toaster />
  </ReactQueryProvider>,
);
