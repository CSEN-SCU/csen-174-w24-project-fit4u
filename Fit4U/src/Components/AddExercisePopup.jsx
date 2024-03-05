import {useState, useEffect, useRef} from 'react'
import calls from '../Hooks/calls'
import '../Styles/exercisepopup.css'
import filters from '../Hooks/sanitizeData'
import ReactSearchBox from 'react-search-box'
import { StarIcon } from '@heroicons/react/24/solid'

const AddExercisePopup = ({exercises, setExercisePopup, setWorkoutExercises, workoutExercises, getMode, workout, setWorkout}) => {

  const searchData = useRef()

  const handleSelect = (record) => {
    if(getMode() === 'new' || getMode() === 'plan'){
      setWorkoutExercises(workoutExercises => [...workoutExercises, filters.convertSearchResult(record.item.key, exercises)])
      setExercisePopup(false)
    }else if(getMode() === 'edit'){
      const temp = workout
      const converted =  filters.convertSearchResult(record.item.key, exercises)
      console.log('------Coneverted---------')
      console.log(converted)
      temp.exercises.push({
        'name': converted.name,
        'sets': [],
        'unit': 'lbs',
        'externalExercise': record.item.key
      })
      setWorkout(temp)
      console.log('---------ADD EX---------')
      console.log(workout)
      setExercisePopup(false)
    }
  }

  const searchDataFilter = () => {
    return(filters.generateExerciseSearch(exercises))
  }


  return (
    <div className='add-exercise-wrapper'>
      <div className='popup-header'>
        <h2>Add Exercise</h2>
        <button onClick={() => setExercisePopup(false)}>X</button>
      </div>
      {exercises ? <ReactSearchBox 
        placeholder="Search Exercises"
        value="Doe"
        autoFocus={true}
        data={searchDataFilter()} 
        onSelect={(record) => {
          handleSelect(record)
        }}
      /> : <ReactSearchBox 
            placeholder="Loading..."
            autoFocus={true}
          />
      }
      
        
    </div>
  )
}

export default AddExercisePopup
