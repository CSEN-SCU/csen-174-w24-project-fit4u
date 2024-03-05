
import React, {useState, useEffect} from 'react'
import filters from '../Hooks/sanitizeData'
import SetOptions from './SetOptions'
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'

const SetItem = ({ set, setNum, getDataStatus, setDataSets, dataSets, getUnits, deleteSet, updateSet}) => {

  const [reps, setReps] = useState(set.reps)
  const [vol, setVol] = useState(set.vol)
  const [rating, setRating] = useState(set.rating)
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [optionsOpen, setOptionsOpen] = useState(false)

  let data = {
    "setNumber": `${setNum}`,
    "reps": `${reps}`,
    "volume": `${vol}`,
    "rating": ''
  }

  /*
  useEffect(() => {

    const update = () => {

      updateSet(
        {
          'reps': `${reps}`,
          'vol': `${vol}`,
          'rating': `${rating}`
        }, set.key
      )
    }

    update()
  }, [reps, vol, rating])
  */

  useEffect(() => {

    const genSet = async() => {
      let newSet
      if(getUnits !== 'tm'){
        newSet = await filters.convertSet(reps, vol, setNum, rating)
      }else{
        newSet = await filters.convertSet(reps, convertTime(), setNum, rating)
      }
      if(newSet !== null ){
        console.log(`First Try`)
        setDataSets(dataSets => [...dataSets, newSet])
      }
    }

    if(getDataStatus()){
      genSet()
    }
    
  }, [getDataStatus()])

  const convertTime = () =>{
    return `${minutes}:${seconds}`
  }

  const volume = () => {
    if(getUnits() === 'bw'){
      return <></>
    }else if(getUnits() === 'tm'){
      return (
        <div className='timed-input'>
          <input type="number" placeholder={'min'} min="0" value={minutes} onChange={(e)=> setMinutes(e.target.value)} /> 
          <p>:</p>
          <input type="number" placeholder={'sec'} min="0" max="60" value={seconds} onChange={(e)=> setSeconds(e.target.value)} /> 
        </div>
         )
    }else{
      return ( <input type="number" placeholder={0} value={vol} onChange={(e)=> setVol(e.target.value)} />)
    }
  }


  return (
    <div className={getUnits() !== 'bw' ? 'set-wrapper' : 'set-wrapper-rep-only'} >
      {optionsOpen ? <div><SetOptions setOptionsOpen={setOptionsOpen} deleteSet={deleteSet} setNum={setNum} setRating={setRating} rating={rating}/> </div> : <></>}
      <button onClick={() => setOptionsOpen(!optionsOpen)}><EllipsisHorizontalCircleIcon height={24} color={'#000000'}/></button>
      <h4>SET {setNum}</h4>
      <div className={getUnits() === 'bw' ? 'rep-only-inputs' : 'inputs'}>
        <input type="number" placeholder={0} value={reps} onChange={(e)=> setReps(e.target.value)} />
        {volume()}
      </div>
    </div>
  )
}

export default SetItem