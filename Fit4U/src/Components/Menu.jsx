import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/menu.css'

const Menu = ({getMenu}) => {
  return (
    <div className='menu-wrapper'>
      <Link to="/workouts">
        <div className='menu-item'>
          <h1>WORKOUTS</h1>
        </div>
      </Link>
      <Link to="/exercises">
        <div className='menu-item'>
          <h1>EXERCISES</h1>
        </div>
      </Link>
      <Link to="/goals">
        <div className='menu-item'>
          <h1>GOALS</h1>
        </div>
      </Link>
      <Link to="/settings">
        <div className='menu-item'>
          <h1>SETTINGS</h1>
        </div>
      </Link>
    </div>
  )
}

export default Menu
