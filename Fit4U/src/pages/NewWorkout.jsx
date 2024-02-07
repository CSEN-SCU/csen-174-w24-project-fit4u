import React, {useState, useEffect} from 'react'
import LogWorkout from '../Components/LogWorkout'
import AddExercisePopup from '../Components/AddExercisePopup'
import '../Styles/newworkout.css'


const NewWorkout = () => {

  const [exercisePopup, setExercisePopup] = useState(false)
  const [workoutExercises, setWorkoutExercises] = useState([])

  useEffect(() => {
    console.log(workoutExercises)
  }, [workoutExercises])

  return (
    <div className='workout-wrapper'> 
      <div className='popup'>
        {exercisePopup ? <AddExercisePopup setExercisePopup={setExercisePopup} setWorkoutExercises={setWorkoutExercises} workoutExercises={workoutExercises}/> : <></> }
      </div>
      
      <LogWorkout setExercisePopup={setExercisePopup} />
    </div>
  )
}
  
  export default NewWorkout