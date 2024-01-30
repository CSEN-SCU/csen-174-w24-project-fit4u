import './style.css'
import React, {useEffect} from 'react'
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route, defer} from "react-router-dom";
import ReactDOM from "react-dom/client";
import ProtectedPage from './src/pages/ProtectedPage';
import LoginPage from './src/pages/loginPage';
import AuthPage from './src/pages/authPage';
import UnauthPage from './src/pages/unauthPage';
import LandingPage from './src/pages/landingPage';
import NewWorkout from './src/pages/NewWorkout'
import ViewWorkout from './src/pages/ViewWorkout'



/*
const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      //Insert OAuth here
      resolve(user);
    }, 3000)
  );

  */


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>


      <Route element={<UnauthPage />}> 
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectedPage />}>
        <Route path="/app" element={<LandingPage />} /> 
      </Route>

      <Route element={<ProtectedPage />}>
        <Route path="/newworkout" element={<NewWorkout />} /> 
      </Route>

      <Route element={<ProtectedPage />}>
        <Route path="/viewworkout" element={<ViewWorkout />} /> 
      </Route>


    </Route>
  

  )

  );


