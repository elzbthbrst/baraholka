import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/NotFound/NotFound.tsx";
import About from "./routes/About/About.tsx";
import HomePage from "./routes/HomePage/HomePage.tsx";
import Cart from "./routes/Cart/Cart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/", element: <HomePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
