import React from 'react'
import '../Styles/logworkout.css'
import SavedExerciseItem from './SavedExerciseItem'

const WorkoutItem = ({workout}) => {

  const generateExerciseItems = () => {
    let items = workout.exercises.map((exercise) => <SavedExerciseItem exercise={exercise} key={exercise.id} /> )
    return items;
  }

  const options = {
    timeZone: 'America/Los_Angeles',
    timeStyle: "short",
    dateStyle: "short"
  }

  const datetime = new Date(workout.datetime)
  const dateDisplay = datetime.toLocaleString('en-US', options)

  
  return (
    <div>
      <div className='log-workout-wrapper'>
        
        <div className="WorkoutTitle-Wrapper">
          <h1>{workout.name}</h1>
          <h3>{dateDisplay}</h3>
        </div>
        <div className='workout-buttons'>
          <button className="SaveButton"> Edit Workout </button>
          
        </div>
        <div className='exercise-items'>
          {generateExerciseItems()}
        </div>
  
      </div>
    </div>
  )
}

export default WorkoutItem
