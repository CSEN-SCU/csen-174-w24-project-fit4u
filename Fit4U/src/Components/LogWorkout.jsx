import React, { useState,useEffect, useRef } from 'react'
import Select from "react-select"
import '../Styles/logworkout.css'
import calls from '../Hooks/calls';
import ExerciseItem from '../Components/ExerciseItem'
import filters from '../Hooks/sanitizeData';


export default function LogWorkout({ onAdd, setExercisePopup, workoutExercises}) {
    const [title, setTitle] = useState('');
    const [ex, setEx] = useState([]);
    const [getData, setGetData] = useState(false)
    const [dataExercises, setDataExercises] = useState([])
    const [submitReady, setSubmitReady] = useState(false)
    const [response, setResponse] = useState(0)
    const [clear, setClear] = useState(false)
    

    const datetime = new Date (Date.now())

    const getDataStatus = () => { return getData }


    

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
          }
        }catch (error){
          console.log(error)
        }
      }

      submitData()
    }, [submitReady])

    useEffect(() => {
      const clearData = () => {
        setClear(true)
      }

      if(response === 200){
        clearData();
      }
    }, [response])

    



    const handleChange = (ex) => {
        setEx(ex || []);
      };

    const generateExerciseItems = () => {
      let items = workoutExercises.map((exercise) => <ExerciseItem exercise={exercise} getDataStatus={getDataStatus} dataExercises={dataExercises} setDataExercises={setDataExercises} key={exercise.id} /> )
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

/*  <p>We do {value}!</p>  

 <Dropdown label ="What do we eat?" options={options} value={value} onChange={handleChange} />

const Dropdown = ({ label, value, options, onChange }) => {

    return (
   
      <label>
   
        {label}
   
        <select value={value} onChange={onChange}>
   
          {options.map((option) => (
   
            <option value={option.value}>{option.label}</option>
   
          ))}
   
        </select>
   
      </label>
   
    );
   
   };


*/