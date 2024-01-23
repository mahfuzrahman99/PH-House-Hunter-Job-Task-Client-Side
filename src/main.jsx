import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router";
import AuthProvider from "./Provider/AuthProvider";
import { PhotoProvider } from "react-photo-view";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PhotoProvider>
          <RouterProvider router={router} />
        </PhotoProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
