import "@/assets/css/index.css";
import { Toaster } from "@/components/ui/sonner";
import routes from "@/routes";
import { ThemeProvider } from "next-themes";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <RouterProvider router={routes} />
    <Toaster />
  </ThemeProvider>,
);
