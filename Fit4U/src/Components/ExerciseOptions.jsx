import React from 'react'
import { HeartIcon, TrashIcon, InformationCircleIcon  } from '@heroicons/react/24/solid'
import calls from '../Hooks/calls'

const ExerciseOptions = ({setOptions, deleteExercise, exercise, setFavoriteItem, favorite, setInfoPopup}) => {

  const setFavorite = (id) => {
    calls.createFavorite({"id": id})
    setFavoriteItem(!favorite)
  }

  return (
    <div className='exercise-options'>
      <button onClick={() => setFavorite(exercise.id)}><HeartIcon height={24} width={24} color='#FFFFFF' /><p>Favorite Exercise</p></button>
      <button onClick={() => deleteExercise(exercise.id)}><TrashIcon height={24} width={24} color='#FFFFFF' /><p>Delete Exercise</p></button>
      <button onClick={() => {
        setInfoPopup(true)
        setOptions(false)
      }}><InformationCircleIcon height={24} width={24} color='#FFFFFF' /><p>Exercise Info</p></button>
    </div>
  )
}

export default ExerciseOptions
