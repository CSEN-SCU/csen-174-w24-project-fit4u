import React, {useState, useEffect} from 'react'
import EditExerciseItem from './EditExerciseItem';
import calls from '../../Hooks/calls';
import { useParams, useNavigate } from 'react-router';

const EditWorkout = ({ setExercisePopup, workout, externalExercises, setMode, deleteExercise}) => {
  
  const [title, setTitle] = useState(workout.name);
  const [getData, setGetData] = useState(false)
  const [dataExercises, setDataExercises] = useState([])
  const [submitReady, setSubmitReady] = useState(false)
  const [response, setResponse] = useState(0)

  const datetime = new Date (Date.now())

  const {id} = useParams()

  const getDataStatus = () => { return getData }

  const navigate = useNavigate()

  const data = {
    "workout":{
      "name": `${title}`,
      "datetime":`${datetime.toISOString()}`,
      "exercises": dataExercises
    }
  }

  function handleSubmit() {
            
    setGetData(true)

    setTimeout(() => {
      setGetData(false)
    }, 5000)
  }   

useEffect(() => {
  const genExercises = () => {
    console.log(dataExercises)
    if(dataExercises.length !== 0){
      setSubmitReady(true)
    }
  }

  genExercises()
}, [dataExercises])

useEffect(() => {
  const submitData = () => {
    try{
      console.log(submitReady)
      if(submitReady){
        console.log(data)

        //CHANGE TO UPDATE WORKOUT CALL
        console.log(workout.id)
        calls.updateWorkout(workout.id, data, setResponse)
      }
    }catch (error){
      console.log(error)
    }

   
  }

  submitData()
}, [submitReady])

let items

const generateExerciseItems = () => {
 
  return( workout.exercises.map((exercise) => <EditExerciseItem exercise={exercise} getDataStatus={getDataStatus} dataExercises={dataExercises} setDataExercises={setDataExercises} key={exercise.id} exercises={externalExercises} deleteExercise={deleteExercise}/>  ))

}

  return (
    <div>
        <div className='log-workout-wrapper'>
        
        <div className="WorkoutTitle-Wrapper">
          <input
            className="WorkoutInputs"
            placeholder={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='workout-buttons'>
          <button onClick={() => setExercisePopup(true)}>Add Exercise</button>
          <button onClick={() => handleSubmit()}>Save</button>
          
        </div>
        <div className='exercise-items'>
          {generateExerciseItems()}
        </div>
      </div>
    </div>
  )
}

export default EditWorkout
