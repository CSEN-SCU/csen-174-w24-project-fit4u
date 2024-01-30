import React, { useState,useEffect } from 'react'
import Select from "react-select"
import '../Styles/logworkout.css'

export default function LogWorkout({ onAdd }) {
    const [title, setTitle] = useState('');
    const [ex, setEx] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!title || !ex) { //!ex doens't work rn
            alert("Need to give a name");
            return; 
        }
        setTitle(''); //Clear Title
        setEx([]);      //Clear Exercise
    }


    const handleChange = (ex) => {
        setEx(ex || []);
      };
    const options = [
        { label: 'E1', value: 'Bicep' },

        { label: 'E2', value: 'Tricep' },
     
        { label: 'E3', value: 'Quads' },
      ];

    
   
    

    return(
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
    </form>
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