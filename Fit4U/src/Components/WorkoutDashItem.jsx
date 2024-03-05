import React from 'react'
import { Link } from 'react-router-dom'

const WorkoutDashItem = ({workout}) => {

  const options = {
    timeZone: 'America/Los_Angeles',
    timeStyle: "short",
    dateStyle: "short"
  }

  const datetime = new Date(workout.datetime)
  const dateDisplay = datetime.toLocaleString('en-US', options)

  const exercises = () => {
      return (workout.exercises.map((exercise) => 
        <li>{exercise.name}</li>

        )
      )
  }


  return (
    
    <div className='item-wrapper'>
      <div className='item-header'>
        <Link to={`/app/workout/saved/${workout.id}`}><button className='title-btn'>{workout.name}</button></Link>
      </div>
      <div className='item-body'>
        <div className='date-wrapper'>
          <p>{dateDisplay}</p>
        </div>
        <div className='exercises'>
          <ul className='exercise-list'>{exercises()}</ul>
          
        </div>
      </div>
    </div>
  )
}

export default WorkoutDashItem
