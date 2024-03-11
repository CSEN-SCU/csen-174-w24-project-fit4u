import React from "react";
import { useOutlet, useParams } from "react-router";
import UnauthHeader from "../components/unauthHeader";
import "../Styles/unauth.css";

const UnauthPage = () => {
  const outlet = useOutlet();
  const params = useParams();


  return (
    <div className="unauth-wrapper">
      <div className="header-wrapper">
        <UnauthHeader />
      </div>
      {outlet}
    </div>
  );
};

export default UnauthPage;
