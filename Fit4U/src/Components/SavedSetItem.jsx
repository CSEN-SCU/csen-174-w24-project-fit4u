import React from 'react'

const SavedSetItem = ({set}) => {
  return (
    <div className='set-wrapper'>
      <h4>SET {set.setNumber}</h4>
      <div className='inputs'>
        <p>{set.reps}</p>
        <p>{set.volume}</p>
      </div>
    </div>
  )
}

export default SavedSetItem
