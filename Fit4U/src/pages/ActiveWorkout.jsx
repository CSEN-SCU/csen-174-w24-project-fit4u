import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Header from '../Components/Header'

const ActiveWorkout = () => {
 
  const {id} = useParams()

  const [mode, setMode] = useState('')

  

  return (
    <div>
      <Header />
      
    </div>
  )
}

export default ActiveWorkout
