import {useState, useEffect, useRef} from 'react'
import calls from '../Hooks/calls'
import '../Styles/exercisepopup.css'
import filters from '../Hooks/sanitizeData'
import ReactSearchBox from 'react-search-box'
import { StarIcon } from '@heroicons/react/24/solid'
import FilterExercisePopup from './FilterExercisePopup'

const AddExercisePopup = ({setExercisePopup, setWorkoutExercises, workoutExercises, getMode, workout, setWorkout, setFilterPopup}) => {
  const [exercises, setExercises] = useState(null)
  const searchData = useRef()




  useEffect(() => {
    const getExercises = () => {
      calls.getExercises(setExercises)

    }

    getExercises()
    

  }, [])





  const handleSelect = (record) => {
    if(getMode() === 'new'){
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

  useEffect(() => {
    if(exercises){
      searchData.current = filters.generateExerciseSearch(exercises)
    }

    
  }, [exercises])


  return (
    <div className='add-exercise-wrapper'>
      <div className='popup-header'>
        <h2>Add Exercise</h2>
        <button onClick={()=>setFilterPopup(true)}>Filter</button>
        <button onClick={() => setExercisePopup(false)}>X</button>
      </div>
      {searchData.current ? <ReactSearchBox 
        placeholder="Search Exercises"
        value="Doe"
        autoFocus={true}
        data={searchData.current} 
        onSelect={(record) => {
          handleSelect(record)
        }}
      /> : <></>}
      
        
    </div>
  )
}

export default AddExercisePopup
