import React, {useState} from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import '../Styles/set-options.css'
import {ArrowLeftCircleIcon} from '@heroicons/react/24/solid'

const SetOptions = ({setOptionsOpen, deleteSet, setNum, setRating, rating}) => {

  const [ratingOpen, setRatingOpen] = useState(false)


  const ratingDisplay = (
    <div className='rating-wrapper'>
      <div className='rating-header'>
        <button onClick={() => setRatingOpen(false)}><ArrowLeftCircleIcon height={24} width={24} color="#000000" /></button>
        <p>Rate Set</p>
      </div>
      <div className='rating-buttons'>
        <button className={rating === 1 ? 'selected' : ''} onClick={() => setRating(1)}>1</button>
        <button className={rating === 2 ? 'selected' : ''} onClick={() => setRating(2)}>2</button>
        <button className={rating === 3 ? 'selected' : ''} onClick={() => setRating(3)}>3</button>
        <button className={rating === 4 ? 'selected' : ''} onClick={() => setRating(4)}>4</button>
        <button className={rating === 5 ? 'selected' : ''} onClick={() => setRating(5)}>5</button>
      </div>
      <div className='rating-guide'>
        <p>Easy Set</p>
        <p>Hard Set</p>
      </div>
    </div>

  )

  let display

  if(!ratingOpen){
    display = (
    <div className='set-options'>
      <div className='exit-btn'><button onClick={() => setOptionsOpen(false)}><ArrowLeftCircleIcon height={24} width={24} color="#000000"/></button></div>
      <div><button onClick={() => console.log("delete")/*deleteSet(setNum) */}><TrashIcon height={18} color={'#000000'} /> Delete Set</button></div>
      <div className='rate'><button onClick={() => setRatingOpen(true)}>Rate Workout</button></div>
    </div>)
  }else{
    display = ratingDisplay;
  }

  return (
    <>
      {display}
    </>
  )
}

export default SetOptions
