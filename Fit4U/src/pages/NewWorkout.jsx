import React, {useState, useEffect, useRef} from 'react'
import LogWorkout from '../Components/LogWorkout'
import AddExercisePopup from '../Components/AddExercisePopup'
import '../Styles/newworkout.css'
import { useParams, useLocation } from 'react-router'
import calls from '../Hooks/calls'
import WorkoutItem from '../Components/WorkoutItem'
import EditWorkout from '../Components/EditWorkout/EditWorkout'
import filters from '../Hooks/sanitizeData'

const NewWorkout = () => {

  const {id} = useParams()
  const location = useLocation()
  const path = String(location.pathname)

  const decideMode = () => {
    if(id){
      if(path.includes('plan')){
        return 'plan'
      }else if(path.includes('saved')){
        return 'view'
      }
    }else{
      return 'new'
    }
  }
  
  const [exercisePopup, setExercisePopup] = useState(false)
  const [workoutExercises, setWorkoutExercises] = useState([])
  const [mode, setMode] = useState(decideMode())
  const [workout, setWorkout] = useState()
  const [externalExercises, setExternalExercises] = useState()
  const [plan, setPlan] = useState()


  const getMode = () => {return mode;}

  const getExercises = async() => {
    const result = await calls.getExercises(setExternalExercises)
  }

  useEffect(() => {

    getExercises()
    const getItems = async() => {
      if(mode === 'plan'){
        getPlanItems()
      }else if(mode === 'view' || mode === 'edit'){
        getWorkout()
      }
    }
    
    getItems()
  }, [mode])

  const getWorkout = async() => {
    if(id){
      const result = await calls.getWorkout(id, setWorkout)
    }
  }

  const getPlanItems = async() => {
    if(id && mode === 'plan'){
      calls.getWorkoutPlan(id, setPlan)
      loadExercises()
    }
  }

  const loadExercises = () => {
    if(plan){
      plan.exercises.forEach(exercise => {
        setWorkoutExercises(workoutExercises => [...workoutExercises, exercise])
      });
    }
  } 

  const deleteExercise = (id) => {
    setWorkoutExercises(workoutExercises.filter((exercise) => exercise.id !== id))
  }



  useEffect(() => {
    console.log(workoutExercises)
  }, [workoutExercises])

  const genDisplay = () => {
    if(mode === 'new'){
      return <LogWorkout setExercisePopup={setExercisePopup} workoutExercises={workoutExercises} getMode={getMode} setMode={setMode} title={null} deleteExercise={deleteExercise} />
    }else if(mode === 'view' && workout){
      return <WorkoutItem  workout={workout} setMode={setMode} />
    }else if(mode === 'edit' && workout){
      return <EditWorkout workout={workout} setExercisePopup={setExercisePopup} externalExercises={externalExercises} setMode={setMode} deleteExercise={deleteExercise} />
    }else if(mode === 'plan'){
      if(workoutExercises.length > 0){
        return <LogWorkout setExercisePopup={setExercisePopup} workoutExercises={workoutExercises} getMode={getMode} setMode={setMode} passedTitle={plan.name} deleteExercise={deleteExercise} />
      }else{
        getPlanItems()
        return <h1>Loading...</h1>
      }
    }
  }






  return (
    <div className='workout-wrapper'>

        <div className='popup'>
          {exercisePopup && externalExercises ? <AddExercisePopup exercises={externalExercises} setExercisePopup={setExercisePopup} setWorkoutExercises={setWorkoutExercises} getMode={getMode}  workout={workout} setWorkout={setWorkout}/> : <></> }
        </div>
      
       {plan && workoutExercises || (mode === 'edit' || mode === 'view') && workout || mode === "new" ? genDisplay() : <h1>Loading...</h1>}

    </div>
  )
}
  
  export default NewWorkout