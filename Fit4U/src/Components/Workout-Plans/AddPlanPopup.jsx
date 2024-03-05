import React, {useState, useEffect} from 'react'
import calls from '../../Hooks/calls'
import filters from '../../Hooks/sanitizeData'
import ReactSearchBox from 'react-search-box'
import { TrashIcon } from '@heroicons/react/24/solid'

const AddPlanPopup = ({setPopupOpen, preloadedExercises, plan}) => {

  const [externalExercises, setExternalExercises] = useState()
  const [workoutExercises, setWorkoutExercises] = useState(preloadedExercises ? preloadedExercises : [])
  const [name, setName] = useState(plan ? plan.name : '')
  const [mode, setMode] = useState(plan ? 'edit' : 'new')
  const [unit, setUnit] = useState()

  const formulateData = () => {
    let exercises = []
    workoutExercises.forEach((exercise) => {
      exercises.push(exercise.id)
    })

    console.log(exercises)
    return {
      "workout_plan": {
        "name": name,
        "exercises": exercises
      }
    }
  }

  const handleSelect = (record) => {
    setWorkoutExercises(workoutExercises => [...workoutExercises, filters.convertSearchResult(record.item.key, externalExercises)])
  }

  const handleSubmit = () => {
    if(name && workoutExercises && mode === 'new'){
      const data = formulateData()
      calls.createWorkoutPlan(data)
      setPopupOpen(false)
    }else if(name && workoutExercises && mode === 'edit'){
      const data = formulateData()
      console.log('Editing')
      calls.updateWorkoutPlan(plan.id, data)
      setPopupOpen(false)
    }else{
      alert('Please enter name and exercises')
    }
  }

  useEffect(() => {
    const getExercises = () => {
      calls.getExercises(setExternalExercises)
    }

    getExercises()
  }, [])

  const setExercisesDisplay = () => {
    return workoutExercises.map((exercise) => 
      <div key={exercise.externalExercise} className='popup-ex-item'>
        <p>{exercise.name}</p>
        <button onClick={() => deleteExercise(exercise.id)}><TrashIcon height={24} width={24} color="#000000"/></button>
      </div>
    )
  }

  const deleteExercise = (id) => {
    setWorkoutExercises(workoutExercises.filter((exercise) => exercise.id !== id))
  }
  
  return (
    <div className='add-plan-popup'>
      <div className='popup-header'>
        <h1>Add Plan</h1>        
        <button onClick={() => setPopupOpen(false)}>X</button>
      </div>
      
      <div className="WorkoutTitle-Wrapper">
        <input
          className="WorkoutInputs"
          placeholder="Workout Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {externalExercises ? <ReactSearchBox 
        placeholder="Search Exercises"
        clearOnSelect={true}
        autoFocus={true}
        data={filters.generateExerciseSearch(externalExercises)} 
        onSelect={(record) => {
          handleSelect(record)
        }}
      /> : <></>}

      <div className='popup-exercises'>
        <h2>Exercises</h2>
        {setExercisesDisplay()}
        
      </div>
      <button onClick={() => handleSubmit()} className='submit-btn'>Save</button>
      
    </div>
  )
}

export default AddPlanPopup
