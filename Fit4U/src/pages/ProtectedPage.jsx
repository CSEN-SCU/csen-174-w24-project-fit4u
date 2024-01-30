import React from 'react'
import { useOutlet, useParams } from 'react-router'
import Header from '../Components/Header'

const ProtectedPage = () => {
  const outlet = useOutlet()
  const params = useParams()
  let display;

  if(params.pathname = '/app'){
    display = outlet;
  }

  return (
    <div className='app-wrapper'>
        <Header></Header>
        <div className="content-wrapper">
        {display}
      </div>
    </div>
  )
}

export default ProtectedPage
