import React, { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import useGoogleAuthToken from "../hooks/useGoogleAuthToken";
import useGoogleAuthLink from "../hooks/useGoogleAuthLink";
import useProfile from "../hooks/useProfile";
import { getUserData } from "../api/user";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onClickGoogleLogin = () => {
    const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
        const REDIRECT_URI = "http://localhost:8000/api/auth/login/google/";
    
        const scope = [
          "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/userinfo.profile",
        ].join(" ");
    
        const params = {
          client_id:
            '155154544257-ieimep868tope5r3kbamv194q33d22uh.apps.googleusercontent.com',
          redirect_uri: `${REDIRECT_URI}`,
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
          scope,
        };
    
        const urlParams = new URLSearchParams(params).toString();
        window.location = `${GOOGLE_AUTH_URL}?${urlParams}`;
      };

  return (
    <div>
      <div className="login-form">
        <label>
          Email:
          <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <br></br>
        <button>Login</button>
      </div>
      <p>OR</p>
      <div className="google">
        <GoogleButton onClick={onClickGoogleLogin} />
      </div>
    </div>
  );
};

export default LoginForm;
