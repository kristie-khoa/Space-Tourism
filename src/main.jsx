import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Root from "./Routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Destination from "./Routes/Destination";
import Crew from "./Routes/Crew";
import Technology from "./Routes/Technology";
import Home from "./Routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
