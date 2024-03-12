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
      /*----------Difficulty----------*/
      if(checkBox[0][0]) {
        if(exercise.difficulty == "beginner")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[0][1]) {
        if(exercise.difficulty == "intermediate")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[0][2]) {
        if(exercise.difficulty == "expert")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }

      

       /*----------Equipment----------*/
       if(checkBox[1][0]) {
        if(exercise.equipment == "dumbell")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[1][1]) {
        if(exercise.equipment == "barbell")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[1][2]) {
        if(exercise.equipment == "machine")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[1][3]) {
        if(exercise.equipment == "e-z_curl_bar")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[1][4]) {
        if(exercise.equipment == "bands")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[1][5]) {
        if(exercise.equipment == "cable")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[1][6]) {
        if(exercise.equipment == "kettlebells")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[1][7]) {
        if(exercise.equipment == "body_only")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[1][8]) {
        if(exercise.equipment == "none")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }
      if(checkBox[1][9]) {
        if(exercise.equipment == "other")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }



      /*----------Muscles----------*/
      if(checkBox[2][0]) {
        if(exercise.muscle == "abdominals")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][1]) {
        if(exercise.muscle == "abductors")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][2]) {
        if(exercise.muscle == "biceps")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][3]) {
        if(exercise.muscle == "calves")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][4]) {
        if(exercise.muscle == "chest")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][5]) {
        if(exercise.muscle == "forearms")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][6]) {
        if(exercise.muscle == "glutes")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][7]) {
        if(exercise.muscle == "hamstrings")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][8]) {
        if(exercise.muscle == "lats")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][9]) {
        if(exercise.muscle == "lower_back")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][10]) {
        if(exercise.muscle == "middle_back")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][11]) {
        if(exercise.muscle == "neck")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][12]) {
        if(exercise.muscle == "quadriceps")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }

      if(checkBox[2][13]) {
        if(exercise.muscle == "traps")  {
     				searchArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
        }
      }


      if(checkBox[2][14]) {
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