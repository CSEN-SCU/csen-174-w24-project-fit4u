import React from "react";
import { useOutlet, useNavigate } from "react-router";

const AuthPage = () => {
  //const {user} = useAuth();
  const outlet = useOutlet();

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  } else {
    navigate("/app");
  }

  console.log("Hello World");

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default AuthPage;
