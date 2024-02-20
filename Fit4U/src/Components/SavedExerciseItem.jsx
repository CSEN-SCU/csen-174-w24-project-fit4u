import {useState, useEffect, useRef} from 'react'
import SavedSetItem from './SavedSetItem'
import calls from '../Hooks/calls'
import filters from '../Hooks/sanitizeData'
import Difficulty from './Difficulty'

const SavedExerciseItem = ({exercise}) => {

  const display = useRef()

  const [workoutExercises, setWorkoutExercises] = useState()
  const [exerciseInfo, setExerciseInfo] = useState()

  useEffect(() => {
    const generateExerciseItems = async() => {
      calls.getExercises(setWorkoutExercises);

    }

    generateExerciseItems()
  }, [])

  useEffect(() => {
    const getInfo = async() => {
      setExerciseInfo(await filters.convertSearchResult(exercise.id, workoutExercises))
      display.current = (
        <div className="exercise-item-wrapper">
          <div className='exercise-name'>
            <h2>{exercise.name}</h2>
          </div>
        <div className='info-container'>
          <div className='exercise-info'>
            <p>Muscle: {exerciseInfo.muscle}</p>
            <p className='difficulty-wrapper'>Difficulty: <Difficulty rating={exerciseInfo.difficulty} /></p>
            <p>Equipment: {exerciseInfo.equipment}</p>
            <p>Unit: {exercise.unit}</p>
          </div>
          <div className='set-info'>
            <div className='header'>
              <h3>REPS</h3>
              <h3>VOL</h3>
            </div>
            <div className='sets-items'>
              {generatesetItems()}
            </div>
          </div>
        </div>
  </div>
      )
    }

    

    getInfo()
  }, [workoutExercises])


  const generatesetItems = () => {
    let items = exercise.sets.map((set, i) => 
      <SavedSetItem set={set} key={i} /> 
    )
    return items;
  }




  return (
    <>
    {display.current}
    </>
  )
}

export default SavedExerciseItem
