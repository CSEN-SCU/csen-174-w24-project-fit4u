import React from "react";
import "../Styles/header.css";
import MenuIcon from "/MenuIcon.png?url";
import UserIcon from "/UserIcon.png?url";

const Header = () => {
  return (
    <div className="wrapper">
      <button>
        <img src={MenuIcon} />
      </button>
      <h1>
        <strong>FIT4U</strong>
      </h1>
      <button>
        <img src={UserIcon} />
      </button>
    </div>
  );
};

export default Header;
