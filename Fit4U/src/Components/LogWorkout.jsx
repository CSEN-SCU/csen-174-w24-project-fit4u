import React, { useState,useEffect } from 'react'
import Select from "react-select"
import '../Styles/logworkout.css'
import calls from '../hooks/calls';

export default function LogWorkout({ onAdd, setExercisePopup }) {
    const [title, setTitle] = useState('');
    const [ex, setEx] = useState([]);

    const datetime = new Date (Date.now())

    const data = {
      "workout":{
        "datetime":`${datetime.toISOString()}`,
        "title": `${title}`,
        "exercises": [
          
        ]
      }
    }

    function handleSubmit() {
        if(data){
          calls.createWorkout(data)
        }
    }


    const handleChange = (ex) => {
        setEx(ex || []);
      };

    
   
    

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
        <button className="SaveButton"> Save Workout </button>
        <button onClick={() => setExercisePopup(true)}>Add Exercise</button>
        <button onClick={() => handleSubmit()}>Submit</button>
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