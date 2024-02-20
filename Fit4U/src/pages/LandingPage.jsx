import React, {useEffect, useState, useRef} from 'react'
import CreateWorkout from '../Components/CreateWorkout'
import ViewExercises from '../Components/ViewExercises'
import calls from '../Hooks/calls'
import '../Styles/landingpage.css'

const LandingPage = () => {

  const [userInfo, setUserInfo] = useState()
  const info = useRef()

  const getUserInfo = async() => {
    calls.getMe(setUserInfo)
  }

  useEffect(() => {


    getUserInfo()
  }, [])

  useEffect(() => {
    if(userInfo){    
      info.current = userInfo.firstName
    }else{
      getUserInfo()
    }
  }, [userInfo])


  return (
    <div className='landing-wrapper'> 
      <h1 className='hello-title'>Hello, {info.current}</h1>
      <CreateWorkout />
      <ViewExercises />
   </div>
  )
}

export default LandingPage;
