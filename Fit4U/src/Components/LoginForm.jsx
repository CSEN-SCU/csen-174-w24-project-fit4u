import React, { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import useGoogleAuthToken from "../hooks/useGoogleAuthToken";
import useGoogleAuthLink from "../hooks/useGoogleAuthLink";
import useProfile from "../hooks/useProfile";
import { getUserData } from "../api/user";

const LoginForm = () => {
  const { data: googleAuth, refetch: fetchGoogleAuth } = useGoogleAuthLink();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleGoogleLogin = () => {
    fetchGoogleAuth();
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
        <GoogleButton onClick={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default LoginForm;
