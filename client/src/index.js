import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import ShrekList from './Pages/ShrekList';
import ShrekUpdater from './Pages/ShrekUpdater';
import ShrekCreator from './Pages/ShrekCreator';
import Layout from './Pages/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShrekList />,
      },
      {
        path: "/create",
        element: <ShrekCreator />,
      },
      {
        path: "/update/:id",
        element: <ShrekUpdater />,
      },

    ],
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
