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
  if(reps && setNumber){
    const data = {
    "setNumber": `${setNumber}`,
    "reps": `${reps}`,
    "volume": `${vol}`,
    "rating": ''
    }


    return data
  }else if(reps && setNumber && rating){
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

const convertEditExercise = (exercise, exerciseName, unit, sets) => {

  const setArray = sets
  console.log('EXERCISE')
  console.log(exercise.externalExercise)
  let data;
  if(exercise.id){
    data = {
      "external_exercise": exercise.externalExercise,
      "name": `${exerciseName}`,
      "unit": `${unit}`,
      "sets": setArray,
      "id": exercise.id

    } 
  }else{
    data = {
      "id": `${undefined}`,
      "external_exercise": exercise.externalExercise,
      "name": `${exerciseName}`,
      "unit": `${unit}`,
      "sets": setArray,
    
    } 
  }
  
  return data
}

const convertEditSet = async(reps, vol, setNumber, rating) => {
  if(reps && setNumber){
    const data = {
    "setNumber": `${setNumber}`,
    "reps": `${reps}`,
    "volume": `${vol}`,
    "rating": ''
    }


    return data
  }else if(reps && setNumber && rating){
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

const generateFilterSearch = (exercises, checkBox) => {
  const searchArray = []
 if(exercises !== null){
		exercises.forEach(exercise => {
      
      
      if(checkBox[0][0]) {
        if(exercise.muscle == "abdominals")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][1]) {
        if(exercise.muscle == "abductors")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][2]) {
        if(exercise.muscle == "biceps")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][3]) {
        if(exercise.muscle == "calves")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][4]) {
        if(exercise.muscle == "chest")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][5]) {
        if(exercise.muscle == "forearms")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][6]) {
        if(exercise.muscle == "glutes")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][7]) {
        if(exercise.muscle == "hamstrings")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][8]) {
        if(exercise.muscle == "lats")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][9]) {
        if(exercise.muscle == "lower_back")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][10]) {
        if(exercise.muscle == "middle_back")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][11]) {
        if(exercise.muscle == "neck")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][12]) {
        if(exercise.muscle == "quadriceps")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }

      if(checkBox[0][13]) {
        if(exercise.muscle == "traps")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[0][14]) {
        if(exercise.muscle == "triceps")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }

    })
 }


  if(searchArray.length !== 0){
    return searchArray;
  }else{
    return false;
  }
}


const filters = {
  generateExerciseSearch,
  convertSearchResult,
  convertSet,
  convertExercise,
  convertEditExercise,
  convertEditSet,
  generateFilterSearch
}

export default filters