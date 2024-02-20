import {useState, useEffect, useRef} from 'react'
import calls from '../Hooks/calls'
import '../Styles/exercisepopup.css'
import filters from '../Hooks/sanitizeData'
import ReactSearchBox from 'react-search-box'
import { StarIcon } from '@heroicons/react/24/solid'

const AddExercisePopup = ({setExercisePopup, setWorkoutExercises, workoutExercises}) => {

  const [exercises, setExercises] = useState(null)
  const searchData = useRef()

  useEffect(() => {
    const getExercises = () => {
      calls.getExercises(setExercises)
    }

    getExercises()
    
    

  }, [])

  useEffect(() => {
    if(exercises){
      searchData.current = filters.generateExerciseSearch(exercises)
    }

    
  }, [exercises])


  return (
    <div className='add-exercise-wrapper'>
      <div className='popup-header'>
        <h2>Add Exercise</h2>
        <button onClick={() => setExercisePopup(false)}>X</button>
      </div>
      {searchData.current ? <ReactSearchBox 
        placeholder="Search Exercises"
        value="Doe"
        autoFocus={true}
        data={searchData.current} 
        onSelect={(record) => {
          setWorkoutExercises(workoutExercises => [...workoutExercises, filters.convertSearchResult(record.item.key, exercises)])
          setExercisePopup(false)
        }}
      /> : <></>}
      
        
    </div>
  )
}

export default AddExercisePopup
