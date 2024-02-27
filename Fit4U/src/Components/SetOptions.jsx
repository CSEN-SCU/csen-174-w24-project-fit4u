import React from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import '../Styles/set-options.css'

const SetOptions = ({setOptionsOpen, deleteSet, setNum}) => {
  return (
    <div className='set-options'>
      <div><button onClick={() => console.log("delete")/*deleteSet(setNum) */}><TrashIcon height={18} color={'#000000'} /> Delete Set</button></div>
      <div>Rate Workout</div>
    </div>
  )
}

export default SetOptions
