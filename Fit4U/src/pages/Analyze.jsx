import React, {useState, useEffect} from 'react'
import calls from '../Hooks/calls'
import LineChart from '../Components/Analyze/LineChart'
import '../Styles/chart.css'
import Chart from "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analyze = () => {

  const [analyze, setAnalyze] = useState([])
  const [currentMuscle, setCurrentMuscle] = useState('')
  const [selectedExercise, setSelectedExercise] = useState(null)

  const getData = () => {calls.getAnalyze(setAnalyze)}

  useEffect(() => {
    getData()
  }, [])

  const genMuscleSelect = () => {
    if(analyze){
      let obj = Object.keys(analyze)
      return (
        <select onChange={(e) => {
          setCurrentMuscle(e.target.value)
          setSelectedExercise(null)
          genExerciseSelect()
        }} defaultChecked="Select Muscle" className='muscle-select'>
          <option value="" selected disabled hidden>Select Muscle</option>
          {obj.map((muscle) => 
            <option value={muscle}>{muscle}</option>
          ) }
        </select>
      )
    }
  }

  const genExerciseSelect = () => {
    if(analyze && currentMuscle !== ""){
      let obj = analyze[currentMuscle]
      return (
        <select onChange={(e) => setSelectedExercise(e.target.value)} defaultChecked="Select Exercise" value={selectedExercise} className='exercise-select'>
          <option value={null} selected={selectedExercise === null ? true : false} hidden={selectedExercise !== null ? true : false} disabled>Select Exercise</option>
          {obj.exercises.map((exercise, i) => 
            <option value={i}>{exercise.name}</option>
          ) }
        </select>
      )
    }
  }

  const genCharts = () => {

    if(analyze && currentMuscle && selectedExercise){
      const obj = analyze[currentMuscle]
      return(
        <LineChart exercise={obj.exercises[selectedExercise]} />
      )
    }else{
      return <h2>Select Muscle and Exercise to see chart</h2>
    }
  }

  return (
    <div>
      <h1>Analyze</h1>
      {genMuscleSelect()}
      {currentMuscle ? <h4>Avg. Rating for {currentMuscle}: {analyze[currentMuscle].avgRating} </h4> : <></>}
      {currentMuscle ? genExerciseSelect() : <></>}
      <div className='chart-wrapper'>{genCharts()}</div>
      
    </div>
  )
}

export default Analyze
