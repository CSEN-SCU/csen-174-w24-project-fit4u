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
      <div className='date-wrapper'>
        <p>{dateDisplay}</p>
      </div>
      <div className='exercises'>
        <Link to={`/app/viewworkout/${workout.id}`}><h4>{workout.name}</h4></Link>
        <ul className='exercise-list'>{exercises()}</ul>
        
      </div>
    </div>
  )
}

export default WorkoutDashItem
