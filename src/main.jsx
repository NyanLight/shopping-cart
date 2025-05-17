import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Goods } from "./pages/Goods/Goods";
import { Cart } from "./pages/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Goods />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
