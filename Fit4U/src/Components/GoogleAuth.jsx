import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      ></GoogleLogin>
    </div>
  );
};

export default GoogleAuth;
