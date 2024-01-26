import "./style.css";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ProtectedPage from "./src/pages/protectedPage";
import LoginPage from "./src/pages/loginPage";
import AuthPage from "./src/pages/authPage";
import UnauthPage from "./src/pages/unauthPage";
import LandingPage from "./src/pages/landingPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<UnauthPage />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<ProtectedPage />}>
        <Route path="/app" element={<LandingPage />} />
      </Route>
    </Route>
  )
);
