import React, {useState, useEffect, useRef} from 'react'
import '../Styles/exerciseitem.css'
import SetItem from './SetItem';
import filters from '../Hooks/sanitizeData';
import Difficulty from './Difficulty';
import ExerciseOptions from './ExerciseOptions';
import { EllipsisHorizontalCircleIcon, HeartIcon } from '@heroicons/react/24/solid';

const ExerciseItem = ({exercise, getDataStatus, dataExercises, setDataExercises, deleteExercise}) => {

  const [sets, setSets] = useState(0)
  const [setNum, setSetNum] = useState(0)
  const [dataSets, setDataSets] = useState([])
  const [unit, setUnit] = useState(exercise.equipment === "body_only" ? 'bw' : 'lbs')
  const [displaySets, setDisplaySets] = useState([])
  const [optionsOpen, setOptionsOpen] = useState(false)
  const [favorite, setFavorite] = useState(exercise.favorite)

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
    if(unit === 'lbs' || unit === 'kg'){
      return (<h3>VOL</h3>)
    }else if(unit === 'tm'){
      return (<h3>TIME</h3>)
    }else{
      return <></>
    }
  }

 

  const deleteSet = (setNum) => {
    const index = Number(setNum - 1)
    console.log(index)
    console.log('-------Delete------')
    setDisplaySets(displaySets => [...displaySets].filter(s => s.key !== index))

    setDisplay()
    
    
  }


  const addSet = () => {
    setSets(sets + 1)
    setDisplaySets(sets => [...sets, 
      {
        'key': sets.length,
        'reps': 0,
        'vol': 0,
        'rating': 0
      }
    ])
  }

  const generateOptions = () => {

    if(exercise.type === 'strength'){
      if(exercise.equipment === 'body_only'){
        return(
          <select onChange={(e) => setUnit(e.target.value)}>
            <option value="bw" defaultValue={unit === 'bw' ? "selected" : ""} >Body Weight</option>
          </select>
        )
      }else{
        return(
          <select onChange={(e) => setUnit(e.target.value)}>
            <option value="lbs">LB</option>
            <option value="kg">KG</option>
            <option value="bw" defaultValue={unit === 'bw' ? "selected" : ""} >Body Weight</option>
          </select>
        )
      }
    }else if(exercise.type === 'cardio'){
      return(
        <select onChange={(e) => setUnit(e.target.value)}>
          <option value="timed">Timed</option>
        </select>
      )
    }
  }

 

  const setDisplay = () => {
  
     return( displaySets.map((set, i) => 
        <SetItem set={set} setNum={i + 1} dataSets={dataSets} setDataSets={setDataSets} getDataStatus={getDataStatus} key={i} getUnits={getUnits} deleteSet={deleteSet} /> 
      )
     )

  }

  useEffect(() => {
    setDisplay()
  }, [ sets])



  
 

  return (
    <div className="exercise-item-wrapper">
      <div className={favorite ? 'exercise-name-heart' : 'exercise-name'}>
        {favorite ? <div className='heart-icon'><HeartIcon EllipsisHorizontalCircleIcon height={28} width={28} color='#853835'/></div> : <></>}
        <h2>{exercise.name}</h2>
        <button className='btn-clear' onClick={() => setOptionsOpen(!optionsOpen)}><EllipsisHorizontalCircleIcon height={28} width={28} margin={4} color='#853835'/></button>
        {optionsOpen ? <ExerciseOptions deleteExercise={deleteExercise} exercise={exercise} setFavoriteItem={setFavorite} favorite={favorite}/> : <></>}
      </div>
      <div className='info-container'>
        <div className='exercise-info'>
          <p>Muscle: {exercise.muscle}</p>
          <p className='difficulty-wrapper'>Difficulty: <Difficulty rating={exercise.difficulty} /></p>
          <p>Equipment: {exercise.equipment}</p>
          {generateOptions()}
           
        </div>
        <div className='set-info'>
          <div className='header'>
            <h3>REPS</h3>
            {volume()}
          </div>
          <div className={unit !== "tm" ? 'sets-items' : 'sets-items-timed'}>
            {setDisplay()}
            <button onClick={() => addSet()} > +  ADD SET</button>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default ExerciseItem