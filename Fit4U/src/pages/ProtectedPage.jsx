import React from "react";
import { useOutlet } from "react-router";
import Header from "../components/header";

const ProtectedPage = () => {
  return (
    <div className="app-wrapper">
      <Header></Header>
    </div>
  );
};

export default ProtectedPage;
