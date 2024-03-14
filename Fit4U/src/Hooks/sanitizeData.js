

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
  if(reps && setNumber && rating){
    const data = {
    "setNumber": `${setNumber}`,
    "reps": `${reps}`,
    "volume": `${vol}`,
    "rating": `${rating}`
    }


    return data
  }else if(reps && setNumber && !rating){
    const data = {
      "setNumber": `${setNumber}`,
      "reps": `${reps}`,
      "volume": `${vol}`,
      "rating": ``
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

  if(reps && setNumber && rating){
    const data = {
    "setNumber": `${setNumber}`,
    "reps": `${reps}`,
    "volume": `${vol}`,
    "rating": `${rating}`
    }

    return data
  }else if(reps && setNumber && !rating){

    console.log('contains rating')
    const data = {
      "setNumber": `${setNumber}`,
      "reps": `${reps}`,
      "volume": `${vol}`,
      "rating": ``
    }
    return data
  }else{
    console.log('Empty Set')
    return false;
  }
}

const generateChartData = (exercise) => {
  const weights = []
  const dates = []

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  if(exercise && exercise.weights){
    exercise.weights.forEach((point, i) => {
      let date = new Date(point.datetime)
      weights.push(point.weight)
      dates.push(date.toLocaleDateString())
    })
  }

  const data = {
    labels: dates,
    datasets: [
      {
        label: "One Rep Max",
        data: weights
      }
    ]
  }


  return data
}

const generateFilterSearch = (exercises, diffObject, equipObject, muscleObject) => {
  let diffArray = []; 
  let equipArray = [];
  let muscleArray = [];
  let searchArray =[];
  let searchArray2 = [];
  let array1 = [];
  let array2 = [];
  let ar1 =[];
  let ar2 = [];

 if(exercises !== null){
  console.log(diffObject); 
  console.log(equipObject);

		  exercises.forEach(exercise => {
        if( diffObject.some(obj => obj.name === exercise.difficulty) ) {
     		  		diffArray.push({
       			  key: `${exercise.id}`,
       			  value: `${exercise.name} - ${exercise.difficulty}`
            })
          }
      }) 
    
      exercises.forEach(index => {
        if(equipObject.some(obj => obj.name === index.equipment) ) {
     		  		equipArray.push({
       			  key: `${index.id}`,
       			  value: `${index.name} - ${index.equipment}`
            })
          }
      })  

      exercises.forEach(index => {
        if(muscleObject.some(obj => obj.name === index.muscle) ) {
     		  		muscleArray.push({
       			  key: `${index.id}`,
       			  value: `${index.name} - ${index.muscle}`
            })
          }
      })

      
    if(diffArray.length && equipArray.length)
    {
      if(diffArray.length > equipArray.length)
      {
          array1 = diffArray;
          array2 = equipArray;
      }
      else 
      {
          array2 = diffArray;
          array1 = equipArray;
      }
      array1.forEach((index1) => {
        array2.forEach((index2) => {
          if(index1.key === index2.key)
          {
            searchArray.push({
              key: `${index1.key}`,
              value: `${index1.value}`
            })
          }
        })
      })
      
    }
    else if(diffArray.length && !equipArray.length)
    {
      searchArray = [...diffArray];
    }
    else if(equipArray.length && !diffArray.length)
    {
      searchArray = [...equipArray];
    }

    if(searchArray.length && muscleArray.length)
    {
      if(searchArray.length > muscleArray.length)
      {
        ar1 = searchArray;
        ar2 = muscleArray;
      }
      else
      {
        ar2 = searchArray;
        ar1 = muscleArray;
      }
      ar1.forEach((index1) =>{
        ar2.forEach((index2) => {
          if(index1.key === index2.key)
          {
          searchArray2.push({
            key: `${index1.key}`,
            value: `${index1.value}`
          })
          }
        })
      })
    }
    else if(searchArray.length && !muscleArray.length)
    {
      searchArray2 = [...searchArray];
    }
    else if(!searchArray.length && muscleArray.length)
    {
      searchArray2 = [...muscleArray];
    }




      
 }
console.log("diffArray", diffArray); //pulls 
console.log("equipArray", equipArray);
console.log("muscle array", muscleArray);
console.log("search array", searchArray);
console.log("search array2", searchArray2);
  if(searchArray2.length !== 0){
    return searchArray2;
  }else{
    return [];
  }
}


const filters = {
  generateExerciseSearch,
  convertSearchResult,
  convertSet,
  convertExercise,
  convertEditExercise,
  convertEditSet,
  generateChartData,
  generateFilterSearch
}

export default filters