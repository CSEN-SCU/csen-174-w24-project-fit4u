import React, {useState, useEffect} from 'react'
import '../../Styles/exerciseitem.css'
import EditSetItem from './EditSetItem';
import filters from '../../Hooks/sanitizeData';
import Difficulty from '../Difficulty';
import calls from '../../Hooks/calls';

const EditExerciseItem = ({exercise, getDataStatus, dataExercises, setDataExercises, exercises }) => {

  const [sets, setSets] = useState(exercise ? exercise.sets.length : 0)
  const [dataSets, setDataSets] = useState([])
  const [unit, setUnit] = useState(exercise.unit)
  const [convertedExercise, setConvertedExercise] = useState(filters.convertSearchResult(exercise.externalExercise, exercises))


  const getUnits = () => {
    return unit
  }




  useEffect(() => {
    const genExercise = async() => {
      const newExercise = filters.convertEditExercise(exercise, exercise.name, getUnits(), dataSets)
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
    let items = exercise.sets.map((set, i) => 
      <EditSetItem set={set} setNum={i + 1} dataSets={dataSets} setDataSets={setDataSets} getDataStatus={getDataStatus} key={i} getUnits={getUnits} /> 
    )
    return items;
  }

  const generateDisplay = () => {
    if(exercise && convertedExercise){
      return ( 
      <>
        <div className='exercise-name'>
          <h2>{exercise.name}</h2>
        </div>
        <div className='info-container'>
          <div className='exercise-info'>
            <p>Muscle: {convertedExercise.muscle}</p>
            <p className='difficulty-wrapper'>Difficulty: <Difficulty rating={convertedExercise.difficulty} /></p>
            <p>Equipment: {convertedExercise.equipment}</p>
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
              <button onClick={() => {
                setSets(sets + 1);
                exercise.sets.push({
                  'rating': '',
                  'reps': '0',
                  'volume': '0',
                  'setNum': {sets}
                  })
                }
              }
              >+  ADD SET</button>
            </div>
          </div>
        </div>
      </>
      )
    }else{
      return <h3>Loading...</h3>
    }
  }

  



  return (
    <div className="exercise-item-wrapper">
      {generateDisplay()}
    </div>
  )
}

export default EditExerciseItem
