import React from 'react'
import { HeartIcon, TrashIcon } from '@heroicons/react/24/solid'
import calls from '../Hooks/calls'

const ExerciseOptions = ({deleteExercise, exercise, setFavoriteItem, favorite}) => {

  const setFavorite = (id) => {
    calls.createFavorite({"id": id})
    setFavoriteItem(!favorite)
  }

  return (
    <div className='exercise-options'>
      <button onClick={() => setFavorite(exercise.id)}><HeartIcon height={24} width={24} color='#FFFFFF' /><p>Favorite Exercise</p></button>
      <button onClick={() => deleteExercise(exercise.id)}><TrashIcon height={24} width={24} color='#FFFFFF' /><p>Delete Exercise</p></button>
    </div>
  )
}

export default ExerciseOptions
