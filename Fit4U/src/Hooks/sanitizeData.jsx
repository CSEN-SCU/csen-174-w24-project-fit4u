import Difficulty from "../Components/Difficulty"

const generateExerciseSearch = (exercises) => {
  
  const searchArray = []
  if(exercises !== null){
    exercises.forEach(exercise => {
      searchArray.push({
        key: `${exercise.id}`,
        value: `${exercise.name} - ${exercise.difficulty}`
      })
    })
  }

  if(searchArray.length !== 0){
    return searchArray;
  }else{
    return false;
  }
}


const convertSearchResult = (targetId, exercises) => {
  for(let i = 0; i < exercises.length; i++){
    if(Number(exercises[i].id) === Number(targetId)){
      
      console.log(exercises[i])
      return exercises[i]
    }
  }
}

const convertSet = async(reps, vol, setNumber, rating) => {
  if(reps && vol && setNumber){
    const data = {
    "setNumber": `${setNumber}`,
    "reps": `${reps}`,
    "volume": `${vol}`,
    "rating": ''
    }


    return data
  }else if(reps && vol && setNumber && rating){
    const data = {
      "setNumber": `${setNumber}`,
      "reps": `${reps}`,
      "volume": `${vol}`,
      "rating": `${rating}`
    }
    return data
  }else{
    console.log('Empty Set')
    return false;
  }
}

const convertExercise = (id, exerciseName, unit, sets) => {

  const setArray = sets

  const data = {
    "external_exercise": `${id}`,
    "name": `${exerciseName}`,
    "unit": `${unit}`,
    "sets": setArray
  } 
  
  return data
}

const convertWorkout = (data) => {
  console.log(`Name: ${data.workout.name}`)
  console.log(`Exercise 1: ${data.workout.exercises}`)

}

const filters = {
  generateExerciseSearch,
  convertSearchResult,
  convertSet,
  convertExercise,
  convertWorkout
}

export default filters