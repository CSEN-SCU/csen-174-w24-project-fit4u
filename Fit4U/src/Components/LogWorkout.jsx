import React, { useState,useEffect } from 'react'
import Select from "react-select"
import '../Styles/logworkout.css'

export default function LogWorkout({ onAdd }) {
    const [title, setTitle] = useState('');

    function handleSubmit(e) { 
        e.preventDefault();
        if (!title || setTable([])) { 
            return; 
        } 
        setTitle(''); //Clear Title
       
    }
    

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
        <button>Add Exercises </button>
      
     </div>
    </form>
    );
}



/* Table Attempt
    const [table, setTable] = useState([]); 
 const [exercises, setExercises] = useState([]);


    const displayExercises = table.map((table, i) =>
      <table>
        <h1>{table.exercisename}</h1>
      <thead>
       <tr>
           <th>Set</th>
           <th>Reps</th>
            <th>Vol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           <th>1</th>
           <th>Rep Input</th>
            <th>Vol Input</th>       
        </tr>    
      </tbody>
      <tfoot>
        <tr>
          <th>Add Row</th>
        </tr>
      </tfoot>

      </table>
    
      
    );
 setTable([]);
  const createTable = () =>{
      setTable([...table,<table>
      <thead>
       <tr>
           <th>Set</th>
           <th>Reps</th>
            <th>Vol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           <th>1</th>
           <th>Rep Input</th>
            <th>Vol Input</th>       
        </tr>    
      </tbody>
      <tfoot>
        <tr>
          <th>Add Row</th>
        </tr>
      </tfoot>

      </table>])
    }


  {displayExercises}
  
*/

/* Multi-add Menu 
 setEx([]);      //Clear Exercise
const [ex, setEx] = useState([]); 

const options = [
        { label: 'E1', value: 'Bicep' },

        { label: 'E2', value: 'Tricep' },
     
        { label: 'E3', value: 'Quads' },
      ];

      const handleChange = (ex) => {
        setEx(ex || []);
      }; //makes blank every reload
  

    
   
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