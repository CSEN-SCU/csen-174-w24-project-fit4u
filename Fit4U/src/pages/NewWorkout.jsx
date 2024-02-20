import React, {useState, useEffect, useRef} from 'react'
import LogWorkout from '../Components/LogWorkout'
import AddExercisePopup from '../Components/AddExercisePopup'
import '../Styles/newworkout.css'
import { useParams } from 'react-router'



const NewWorkout = () => {

  const {id} = useParams()

  const [exercisePopup, setExercisePopup] = useState(false)
  const [workoutExercises, setWorkoutExercises] = useState([])
  const [mode, setMode] = useState('new')
  const [existingWorkout, setExistingWorkout] = useState()
  const [status, setStatus] = useState()

  const display = useRef()

  const getMode = () => {return mode;}

  const getWorkout = async() => {
    const result = await calls.getWorkout(id, setExistingWorkout, setStatus)
  }

  useEffect(() => {
    if(id){
      setMode('view')
      getWorkout() 
    }else{
      setMode('new')
    }
  }, [])

  useEffect(() => {
    if(status < 400){
      display.current = (
        <>
        <div className='popup'>
          {exercisePopup ? <AddExercisePopup setExercisePopup={setExercisePopup} setWorkoutExercises={setWorkoutExercises} /> : <></> }
        </div>
      
        <LogWorkout setExercisePopup={setExercisePopup} workoutExercises={workoutExercises} getMode={getMode} setMode={setMode} />
      </>
      )
    }else{
      display.current = <h1>Loading...</h1>
      getWorkout()
    }
  }, [status])



  useEffect(() => {
    console.log(workoutExercises)
  }, [workoutExercises])




  return (
    <div className='workout-wrapper'>
      {display.current}
    </div>
  )
}
  
  export default NewWorkout