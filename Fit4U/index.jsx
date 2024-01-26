import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./main.jsx";
import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId="155154544257-ieimep868tope5r3kbamv194q33d22uh.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
