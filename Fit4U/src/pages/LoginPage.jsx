import React from "react";
import LoginForm from "../components/loginForm";
import useProfile from "../hooks/useProfile";

const LoginPage = () => {
  const { data: profile, refetch: fetchProfile } = useProfile();
  return (
    <div>
      <div className="App">
        {profile ? <h1>Hello {profile.email}!</h1> : <LoginForm />}
      </div>
    </div>
  );
};

export default LoginPage;
