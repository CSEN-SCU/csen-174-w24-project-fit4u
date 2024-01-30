import React from 'react';
import '../Styles/listworkout.css'
const ListWorkout = () => {
    const options = [
        { label: 'TempWO1', value: 'WO1' },
        { label: 'TempWO2', value: 'WO2' }, 
      ];
      const [value, setValue] = React.useState('');
      const handleChange = (event) => {
        setValue(event.target.value);
      };
     

      return (     
    <div className = "Dropdown-wrapper">
    <label className ="WorkoutLabel">
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
      )
}


   export default ListWorkout

/*export default function ListWorkout({ workouts }) {
    return (
      <div className="mt-4">
        {workouts.map((workout, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-lg font-semibold">{workout.title}</h3>
            <p>Reps: {workout.reps}</p>
          </div>
        ))}
      </div>
    );
  }

  */