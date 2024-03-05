import React from 'react'
import { Link } from 'react-router-dom'
import { PencilIcon } from '@heroicons/react/24/solid'

const PlanItem = ({plan, setPreloadedExercises, setPopup, setCurPlan}) => {

  const generateEx = () => {
    return plan.exercises.map((exercise) => 
      <p>{exercise.name}</p>
    )
  } 

  const editPlan = () => {
    setPreloadedExercises(plan.exercises)
    setCurPlan(plan)
    setPopup(true)
  }

  return (
    <div className='plan-item-wrapper'>
      <div className='plan-item-header'>
        <h4>{plan.name}</h4>
        <button onClick={() => editPlan()}><PencilIcon height={12} width={12} color="#000000" /></button>
      </div>
      <div className='plan-exercises'>{generateEx()}</div>
      <Link to={`/app/workout/plan/${plan.id}`}><button className='use-btn'>USE PLAN</button></Link>
    </div>
  )
}

export default PlanItem
