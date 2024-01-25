import React from 'react'
import '../Styles/header.css'
import MenuIcon from '../../public/MenuIcon.png'
import UserIcon from '../../public/UserIcon.png'

const Header = () => {



  return (
    <div className="wrapper">
      <button><img src={MenuIcon} /></button>
      <h1><strong>FIT4U</strong></h1>
      <button><img src={UserIcon} /></button>
    </div>
  )
}

export default Header
