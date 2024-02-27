import React, {useState, useEffect, useRef} from 'react'
import '../Styles/exerciseitem.css'
import SetItem from './SetItem';
import filters from '../Hooks/sanitizeData';
import Difficulty from './Difficulty';

const ExerciseItem = ({exercise, getDataStatus, dataExercises, setDataExercises}) => {

  const [sets, setSets] = useState(0)
  const [dataSets, setDataSets] = useState([])
  const [unit, setUnit] = useState(exercise.equipment === "body_only" ? 'bw' : 'lbs')
  const [displaySets, setDisplaySets] = useState([])

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

  const updateSet = (data, index) => {
    const nextSets = displaySets.map((set, i) => {
      if(i === index){
        return({
        "reps": data.reps,
        "vol": data.vol,
        "rating": data.rating
        })
      }
    })

    setDisplaySets(nextSets)
  }

  const addSet = () => {
    console.log('Adding')
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

 

  const setDisplay = () => {
  
    

     return( displaySets.map((set, i) => 
        <SetItem set={set} setNum={i + 1} dataSets={dataSets} setDataSets={setDataSets} getDataStatus={getDataStatus} key={i} getUnits={getUnits} deleteSet={deleteSet} updateSet={updateSet} /> 
      )
     )

  }

  useEffect(() => {
    setDisplay()
  }, [ sets])



  
 

  return (
    <div className="exercise-item-wrapper">
      <div className='exercise-name'>
        <button onClick={() => console.log(displaySets)}>I</button>
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
            <option value="bw" defaultValue={unit === 'bw' ? "selected" : ""} >Body Weight</option>
            <option value="tm">Timed</option>
          </select>
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