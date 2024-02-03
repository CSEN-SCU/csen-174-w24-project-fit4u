import React, {useEffect, useState} from 'react'
import { useOutlet, useParams } from 'react-router'
import Header from '../Components/Header'
import calls from '../hooks/calls';

const ProtectedPage = () => {
  const outlet = useOutlet()
  const params = useParams()
  let display;

  const [userInfo, setUserInfo] = useState()

  if(params.pathname = '/app'){
    display = outlet;
  }

  useEffect(() => {
    const getUserInfo = async() => {
      calls.getMe(setUserInfo)
    }

    getUserInfo()
  }, [])

  return (
    <div className='app-wrapper'>
        <Header></Header>
        <div className="content-wrapper">
        {display}
      </div>
    </div>
  );
};

export default ProtectedPage;
