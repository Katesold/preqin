import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Investor } from "./domains/Investor/Investor";
import { Investors } from "./domains/Investors/Investors";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "investors/:Id",
        element: <Investor />,
      },
      {
        path: "investors",
        element: <Investors />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
