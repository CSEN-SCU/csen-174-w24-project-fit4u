import React from "react";
import Logo from "/Logo.png?url";
import "../Styles/unauth.css";

const UnauthHeader = () => {
  return (
    <div className="logo-wrapper">
      <img src={Logo} />
    </div>
  );
};

export default UnauthHeader;
