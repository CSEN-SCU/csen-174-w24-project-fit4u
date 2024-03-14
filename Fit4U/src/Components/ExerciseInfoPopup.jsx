import React from 'react'
import '../Styles/exercise-info.css'

const ExerciseInfoPopup = ({exercise, setPopup}) => {
  return (
    <div className='exercise-info-popup-wrapper'>
      <div> 
        <h1>{exercise.name}</h1>
        <button onClick={() => setPopup(false)}>X</button>
      </div>
      <h3>{exercise.muscle}</h3>
      <div className='second-info'>
        <p>Latest One Rep Max: {exercise.mostRecent}</p>
        <p>Best One Rep Max: {exercise.maxLift}</p>
      </div>
      <div>
        <p>{exercise.type}</p>
        <p>{exercise.instructions}</p>
        <p>{exercise.equipment}</p>
      </div>
    </div>
  )
}

export default ExerciseInfoPopup
