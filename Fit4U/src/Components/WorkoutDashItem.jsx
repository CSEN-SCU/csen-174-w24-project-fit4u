import React from 'react'

const WorkoutDashItem = ({workout}) => {

  const options = {
    timeZone: 'America/Los_Angeles',
    timeStyle: "short",
    dateStyle: "short"
  }

  const datetime = new Date(workout.datetime)
  const dateDisplay = datetime.toLocaleString('en-US', options)


  return (
    <div className='item-wrapper'>
      <div className='date-wrapper'>
        <p>{dateDisplay}</p>
      </div>
      <div className='exercises'></div>
    </div>
  )
}

export default WorkoutDashItem
