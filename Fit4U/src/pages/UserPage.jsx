import React, {useState, useEffect, useRef} from 'react'
import WorkoutDash from '../Components/WorkoutDash'
import calls from '../hooks/calls'
import UserIcon from "/UserIcon.png?url";
import '../Styles/userpage.css'
import { useNavigate } from 'react-router';

const UserPage = () => {

  const [userInfo, setUserInfo] = useState()

  const display = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    const getUserInfo = () => {
      calls.getMe(setUserInfo)
    }

    getUserInfo()

  }, [])

  const handleLogout = () => {
    calls.logout()
    localStorage.clear()
    navigate('/login')
    
  }

  if(userInfo){
    display.current = (
      <div className='user-info-wrapper'>
        <div className="user-info-header">
          <div className='profile-photo'>
            <img src={UserIcon} />
          </div>
          <div className='user-info'>
            <h2 className='user-name'>{userInfo.firstName} {userInfo.lastName}</h2>
            <p>Username: {userInfo.username}</p>
          </div>
        </div>
        <div className='logout'>
          <button onClick={() => handleLogout()}>Logout</button>
        </div>

      </div>
    )
  }else{
    display.current = (<h1>Loading...</h1>)
  }




  return (
    <div>
      {display.current}
    </div>
  )
}

export default UserPage
