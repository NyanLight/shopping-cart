import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Goods } from "./pages/Goods/Goods";
import { Cart } from "./pages/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Error } from "./component/Error/Error";
import { Wrapper } from "./component/Wrapper/Wrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Goods />,
        errorElement: <Error />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
