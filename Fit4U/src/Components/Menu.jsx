import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/menu.css'

const Menu = ({getMenu}) => {
  return (
    <div className='menu-wrapper'>
      <Link to="/app/workouts">
        <div className='menu-item'>
          <h1>WORKOUTS</h1>
        </div>
      </Link>
      <Link to="/app/workout-plans">
        <div className='menu-item'>
          <h1>WORKOUT PLANS</h1>
        </div>
      </Link>
      <Link to="/app/analyze">
        <div className='menu-item'>
          <h1>ANALYZE</h1>
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
