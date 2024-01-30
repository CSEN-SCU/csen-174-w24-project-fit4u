import React, { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import useGoogleAuthToken from "../hooks/useGoogleAuthToken";
import useGoogleAuthLink from "../hooks/useGoogleAuthLink";
import useProfile from "../hooks/useProfile";
import { getUserData } from "../api/user";

const LoginForm = () => {
  const { data: profile, refetch: fetchProfile } = useProfile();
  const { data: googleAuth, refetch: fetchGoogleAuth } = useGoogleAuthLink();
  const { mutate, isSuccess } = useGoogleAuthToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (googleAuth) {
      window.location.replace(googleAuth.authorizationUrl);
    }
  }, [googleAuth]);

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);

    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state) {
      mutate({ code, state });
    }
  }, [mutate]);

  useEffect(() => {
    if (isSuccess) {
      fetchProfile();
    }
  }, [isSuccess, fetchProfile]);

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
