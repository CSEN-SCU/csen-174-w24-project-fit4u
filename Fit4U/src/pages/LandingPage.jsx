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

  const setUserInfoDisplay = () => {
    if(userInfo){
      return (userInfo.firstName)
    }else{

    }
  }


  return (
    <div className='landing-wrapper'> 
      <h1 className='hello-title'>Hello, {userInfo ? userInfo.firstName : ""}</h1>
      <CreateWorkout />
      <ViewExercises />
   </div>
  )
}

export default LandingPage;
