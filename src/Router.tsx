import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Test } from "./pages/Test";
import { DataSets } from "./pages/DataSets";
import { Hospital } from "./pages/DataSets/[id]";
import { Patient } from "./pages/DataSets/[subId]";

export const browserRouter = createBrowserRouter([
  {
    element: <App />,    
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/data-sets",
        element: <DataSets />,
      },
      {
        path: "/data-sets/:id",
        element: <Hospital />,
      },
      {
        path: "/data-sets/:id/:subId",
        element: <Patient />,
      },
      {
        path: "/test",
        element: <Test />,  
        
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
