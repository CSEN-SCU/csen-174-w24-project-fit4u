import React, {useState, useEffect} from 'react'
import '../Styles/exerciseitem.css'
import SetItem from './SetItem';
import filters from '../Hooks/sanitizeData';
import Difficulty from './Difficulty';

const ExerciseItem = ({exercise, getDataStatus, dataExercises, setDataExercises}) => {

  const [sets, setSets] = useState(0)
  const [dataSets, setDataSets] = useState([])
  const [unit, setUnit] = useState(exercise.equipment === "body_only" ? 'bw' : 'lb')

  const getUnits = () => {
    return unit
  }


  useEffect(() => {
    const genExercise = async() => {
      const newExercise = filters.convertExercise(exercise.id, exercise.name, getUnits(), dataSets)
      if(newExercise !== null){
        const result = await setDataExercises(dataExercises => [...dataExercises, newExercise])
      }

    }

    if(getDataStatus()){
      genExercise()
    }
    
  }, [dataSets])

  const volume = () => {
    if(unit === 'lb' || unit === 'kg'){
      return (<h3>VOL</h3>)
    }else if(unit === 'tm'){
      return (<h3>TIME</h3>)
    }else{
      return <></>
    }
  }

  

  

  const generatesetItems = () => {
    let items = Array.from(Array(sets)).map((set, i) => 
      <SetItem setNum={i + 1} dataSets={dataSets} setDataSets={setDataSets} getDataStatus={getDataStatus} key={i} getUnits={getUnits} /> 
    )
    return items;
  }

  return (
    <div className="exercise-item-wrapper">
      <div className='exercise-name'>
        <h2>{exercise.name}</h2>
      </div>
      <div className='info-container'>
        <div className='exercise-info'>
          <p>Muscle: {exercise.muscle}</p>
          <p className='difficulty-wrapper'>Difficulty: <Difficulty rating={exercise.difficulty} /></p>
          <p>Equipment: {exercise.equipment}</p>
          <select onChange={(e) => setUnit(e.target.value)}>
            <option value="lbs">LB</option>
            <option value="kg">KG</option>
            <option value="bw" selected={unit === 'bw' ? "selected" : ""} >Body Weight</option>
            <option value="tm">Timed</option>
          </select>
        </div>
        <div className='set-info'>
          <div className='header'>
            <h3>REPS</h3>
            {volume()}
          </div>
          <div className={unit !== "tm" ? 'sets-items' : 'sets-items-timed'}>
            {generatesetItems()}
            <button onClick={() => setSets(sets+1)}>+  ADD SET</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseItem