import React, {useEffect, useRef, useState} from 'react'
import WorkoutDashItem from './WorkoutDashItem'
import calls from '../Hooks/calls'
import { useNavigate } from 'react-router'
import '../Styles/workout-dash.css'

const WorkoutDash = ({}) => {

  const [workouts, setWorkouts] = useState(null)

  const display = useRef()
  const items = useRef()

  const navigate = useNavigate()


  useEffect(() => {
    const getWorkouts = async() => {
      calls.getWorkouts(setWorkouts);
    }

    getWorkouts()
  }, [])

  const generateDisplay = () => {
    return(
      <div className='workouts-wrapper'>
        <div className='header'>
          <h2>WORKOUTS</h2>
          <button onClick={() => navigate("/app/workout")}>CREATE WORKOUT</button>
        </div>
        <div className='table-labels'>
          <h3>DATE</h3>
          <h3>EXERCISES</h3>
        </div>
        <div className='items-wrapper'>
          {items.current}
        </div>
        
      </div>
    )
  }

  const createItems = () => {
    if(workouts){
      return(
        workouts.map((workout) => 
          <>
            <WorkoutDashItem workout={workout} />
          </>
        )
      )
    }
  }

  useEffect(() => {


    items.current = createItems()
    display.current = generateDisplay()

  }, [workouts])





  return (
    <div>
      {display.current}
    </div>
  ) 
}

export default WorkoutDash
