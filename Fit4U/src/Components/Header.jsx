import React, {useState, useRef, useEffect} from "react";
import "../Styles/header.css";
import { useNavigate } from "react-router";
import MenuIcon from "/MenuIcon.png?url";
import UserIcon from "/UserIcon.png?url";
import Menu from './Menu'

const Header = () => {

  const [menu, setMenu] = useState(false);
  const menuDisplay = useRef();
  const navigate = useNavigate()

  const getMenu = () => {
    return menu
  }

  
  useEffect(() => {
    if(menu){
      menuDisplay.current = <Menu getMenu={getMenu} />
    }else{
      menuDisplay.current = <></>
    }
  }, [menu])


  return (
    <div className="wrapper">
      {menuDisplay.current}
      <button onClick={() => setMenu(!menu)}><img id={menu === false? "menu-icon" : "menu-icon-rotated"} src={MenuIcon} /></button>
      <button onClick={() => navigate("/app")}><h1><strong>FIT4U</strong></h1></button>
      <button onClick={() => navigate('/app/user')}><img src={UserIcon} /></button>
    </div>
  );
};

export default Header;
