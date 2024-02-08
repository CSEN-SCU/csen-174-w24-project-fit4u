import React, {useEffect, useState, useRef} from 'react'
import CreateWorkout from '../Components/CreateWorkout'
import ViewExercises from '../Components/ViewExercises'
import calls from '../hooks/calls'
import '../Styles/landingpage.css'

const LandingPage = () => {

  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    const getUserInfo = async() => {
      calls.getMe(setUserInfo)
    }

    getUserInfo()
  }, [])


  return (
    <div className='landing-wrapper'> 
      {userInfo ? <h1 className='hello-title'>Hello, {userInfo.firstName}</h1> : <h1>Hello</h1>}
      <CreateWorkout />
      <ViewExercises />
   </div>
  )
}

export default LandingPage;
