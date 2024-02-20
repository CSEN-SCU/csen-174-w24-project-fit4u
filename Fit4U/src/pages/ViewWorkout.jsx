import {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router'
import calls from '../Hooks/calls'
import WorkoutItem from '../Components/WorkoutItem'



const ViewWorkout = () => {

  const [status, setStatus] = useState()
  const [workout, setWorkout] = useState()
  const {id} = useParams()

  const display = useRef()

  const getWorkout = async() => {
    const result = await calls.getWorkout(id, setWorkout, setStatus)
  }

  useEffect(() => {

  
    getWorkout()
    
  }, [])
  
  useEffect(() => {
    if(status === 200){
      display.current = <WorkoutItem workout={workout}/>
      console.log('Status Success')
    }else{
      display.current = <h1>Loading...</h1>
      getWorkout()
    }
  }, [status])




  return (
    <div className='workout-wrapper'> 
      {display.current}
    </div>
  )
}
  
  export default ViewWorkout