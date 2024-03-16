import React, { useState,useEffect, useRef } from 'react'
import Select from "react-select"
import '../Styles/logworkout.css'
import calls from '../Hooks/calls';
import ExerciseItem from '../Components/ExerciseItem'
import filters from '../Hooks/sanitizeData';
import { useNavigate } from 'react-router';


export default function LogWorkout({ onAdd, setExercisePopup, workoutExercises, passedTitle, deleteExercise}) {
    const [title, setTitle] = useState(passedTitle ? passedTitle : '');
    const [getData, setGetData] = useState(false)
    const [dataExercises, setDataExercises] = useState([])
    const [submitReady, setSubmitReady] = useState(false)
    const [response, setResponse] = useState(0)
    

    const datetime = new Date (Date.now())

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
        if(dataExercises.length !== 0){
          setSubmitReady(true)
        }
      }

      genExercises()
    }, [dataExercises])
    
    useEffect(() => {
      const submitData = () => {
        try{
          if(submitReady){
            console.log(data)
            calls.createWorkout(data, setResponse)
            navigate('/app/workouts')
            window.location.reload()
            
          }
        }catch (error){
          console.log(error)
        }
      }

      submitData()
    }, [submitReady])



    
    const generateExerciseItems = () => {
 
      let items = workoutExercises.map((exercise) => <ExerciseItem exercise={exercise} getDataStatus={getDataStatus} dataExercises={dataExercises} setDataExercises={setDataExercises} key={exercise.id} deleteExercise={deleteExercise}/> )

      return items;
    }



    

    return(
    <div className='log-workout-wrapper'>
        
      <div className="WorkoutTitle-Wrapper">
        <input
          className="WorkoutInputs"
          placeholder="Workout Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='workout-buttons'>
        <button onClick={() => setExercisePopup(true)}>Add Exercise</button>
        <button onClick={() => handleSubmit()}>Submit</button>
        
      </div>
      <div className='exercise-items'>
        {generateExerciseItems()}
      </div>
    </div>
    );
}
