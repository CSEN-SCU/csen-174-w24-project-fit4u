import React, { useState,useEffect } from 'react'
import Select from "react-select"
import '../Styles/logworkout.css'
import calls from '../hooks/calls';

export default function LogWorkout({ onAdd }) {
    const [title, setTitle] = useState('');


    const datetime = new Date (Date.now())

    const data = {
      "workout":{
        "datetime":`${datetime.toISOString()}`,
        "exercises": [
          
        ]
      }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(data){
          calls.createWorkout(data)
        }

    }
    

    return(
    <div className='log-workout-wrapper'>
      <form onSubmit={handleSubmit} >
        
      <div className="WorkoutTitle-Wrapper">
        <input
          className="WorkoutInputs"
          placeholder="Workout Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>

      <div className="SaveButton-Wrapper">
        <button type="submit" className="SaveButton"> Save Workout </button>
      </div>

      <div className="Select-Wrapper">
        <Select 
          options = {options}
          onChange ={handleChange}
          placeholder="Add Exercise"
          styles={{
              control: (provided, state) => ({
                ...provided,
                boxShadow: "none",
                border: "none",
                backgroundColor: "#853835",
                color: "black",
                width:"100%",
                fontSize: 30,
                height: "10vh",
              
              })
            }}
          value={ex}
          isMulti
          />
      </div>

      <input type="submit" />
      </form>
    </div>
    );
}

        */
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