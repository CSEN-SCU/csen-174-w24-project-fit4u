import React, {useState, useEffect, useRef} from 'react'
import calls from '../Hooks/calls'
import AddPlanPopup from '../Components/Workout-Plans/AddPlanPopup'
import PlanItem from '../Components/Workout-Plans/PlanItem'
import '../Styles/workout-plans.css'


const WorkoutPlans = () => {

  const [plans, setPlans] = useState([])
  const [addPlanOpen, setAddPlanOpen] = useState(false)
  const [mode, setMode] = useState('view')
  const [preloadedExercises, setPreloadedExercises] = useState([])
  const [curPlan, setCurPlan] = useState()

  const items = useRef()

  useEffect(() => {
    const getPlans = async() => {
      calls.getWorkoutPlans(setPlans)
    }

    getPlans()
  }, [])


  const generateItems = () => {
      return plans.map((plan) => 
        <div className='plan-item'>
          <PlanItem plan={plan} setPreloadedExercises={setPreloadedExercises} setPopup={setAddPlanOpen} setCurPlan={setCurPlan}/>
        </div>
      )
  }

  useEffect(() => {
    const setItems = () => {
      if(plans){
        items.current = generateItems()
      }
    }

    setItems()
  }, [plans])

  if(mode === 'view'){
    return(
      <div className='workout-plans-wrapper'>
        <div className='header'>
          <h1>Workout Plans</h1>
          <button onClick={() => setAddPlanOpen(true)}>+ ADD PLAN</button>
        </div>
        <div className='popup-wrapper'>{addPlanOpen ? <AddPlanPopup setPopupOpen={setAddPlanOpen} preloadedExercises={preloadedExercises} plan={curPlan} /> : <></>}</div>
        <div className='plan-items'>
          {generateItems()}
        </div>
    </div>
    )
  }else if(mode === 'log'){
    return(
      <h1>Logging Workout</h1>
    )
  }

}

export default WorkoutPlans
