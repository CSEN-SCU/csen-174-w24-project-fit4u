import React, {useState, useEffect} from 'react'
import calls from '../Hooks/calls'

const Analyze = () => {

  const [analyze, setAnalyze] = useState([])
  const [currentMuscle, setCurrentMuscle] = useState('')

  const getData = () => {calls.getAnalyze(setAnalyze)}

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <h1>Analyzing</h1>
    </div>
  )
}

export default Analyze
