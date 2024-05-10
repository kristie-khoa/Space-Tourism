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
        path: "/Space-Tourism/",
        element: <Home />,
      },
      {
        path: "/Space-Tourism/destination",
        element: <Destination />,
      },
      {
        path: "/Space-Tourism/crew",
        element: <Crew />,
      },
      {
        path: "/Space-Tourism/technology",
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
