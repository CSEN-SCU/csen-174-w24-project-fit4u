import "./style.css";
import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import ProtectedPage from "./src/pages/protectedPage";
import LoginPage from "./src/pages/loginPage";
import AuthPage from "./src/pages/authPage";
import UnauthPage from "./src/pages/unauthPage";
import LandingPage from "./src/pages/landingPage";
import ReactDOM from "react-dom/client";
import NewWorkout from './src/pages/NewWorkout'
import ViewWorkout from './src/pages/ViewWorkout'
import Workouts from "./src/pages/Workouts";
import UserPage from "./src/pages/UserPage";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthPage />} >
      <Route element={<UnauthPage />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      
      <Route path="/app" element={<ProtectedPage />}>

          <Route path="/app" element={<LandingPage />} /> 

          <Route path="/app/newworkout" element={<NewWorkout />} />
          <Route path="/app/newworkout/:id" element={<NewWorkout />} />

          <Route path="/app/workouts" element={<Workouts />} /> 

          <Route path="/app/user" element={<UserPage />} />

      </Route>


    </Route>
  )
);
