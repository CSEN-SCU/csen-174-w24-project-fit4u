import React from 'react'
import { useOutlet, useParams } from 'react-router'
import UnauthHeader from '../Components/UnauthHeader'
import '../Styles/unauth.css'

const UnauthPage = () => {

  const outlet = useOutlet()
  const params = useParams()

  let display;

  if(params.pathname = '/login'){
    display = outlet
  }


  return (
    <div className='unauth-wrapper'>
      <div className='header-wrapper'>
        <UnauthHeader />
      </div>
      <div className="content-wrapper">
        {display}
      </div>
    </div>
  )
}

export default UnauthPage
