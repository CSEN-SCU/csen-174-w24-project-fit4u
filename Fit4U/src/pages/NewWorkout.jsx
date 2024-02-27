import React, {useState, useEffect, useRef} from 'react'
import LogWorkout from '../Components/LogWorkout'
import AddExercisePopup from '../Components/AddExercisePopup'
import '../Styles/newworkout.css'
import { useParams } from 'react-router'
import calls from '../Hooks/calls'
import WorkoutItem from '../Components/WorkoutItem'
import EditWorkout from '../Components/EditWorkout/EditWorkout'



const NewWorkout = () => {

  const {id} = useParams()

  const [exercisePopup, setExercisePopup] = useState(false)
  const [workoutExercises, setWorkoutExercises] = useState([])
  const [mode, setMode] = useState('new')
  const [status, setStatus] = useState()
  const [workout, setWorkout] = useState()
  const [externalExercises, setExternalExercises] = useState()


  const getMode = () => {return mode;}

  const getExercises = async() => {
    const result = calls.getExercises(setExternalExercises)
  }


  useEffect(() => {
    getExercises()
    if(id){
      setMode('view')
      getWorkout() 
    }else{
      setMode('new')
    }
  }, [])

  const getWorkout = async() => {
    if(id){
      const result = await calls.getWorkout(id, setWorkout)
    }
  }

  useEffect(() => {
    if(id){
      if(mode !== 'edit'){
        setMode('view')
      }
      getWorkout()
    }else{
      setMode('new')
    }
  }, [id])



  useEffect(() => {
    console.log(workoutExercises)
  }, [workoutExercises])

  const genDisplay = () => {
    if(mode === 'new'){
      return <LogWorkout setExercisePopup={setExercisePopup} workoutExercises={workoutExercises} getMode={getMode} setMode={setMode} />
    }else if(mode === 'view' && workout){
      return <WorkoutItem  workout={workout} setMode={setMode} />
    }else if(mode === 'edit' && workout){
      return <EditWorkout workout={workout} setExercisePopup={setExercisePopup} externalExercises={externalExercises} setMode={setMode}/>
    }
  }






  return (
    <div className='workout-wrapper'>

        <div className='popup'>
          {exercisePopup && externalExercises ? <AddExercisePopup exercises={externalExercises} setExercisePopup={setExercisePopup} setWorkoutExercises={setWorkoutExercises} getMode={getMode}  workout={workout} setWorkout={setWorkout}/> : <></> }
        </div>
      
       {genDisplay()}

    </div>
  )
}
  
  export default NewWorkout