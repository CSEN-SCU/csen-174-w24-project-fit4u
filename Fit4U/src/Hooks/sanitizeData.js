const generateExerciseSearch = (exercises) => {
  
  const searchArray = []
  if(exercises !== null){
    exercises.forEach(exercise => {
      searchArray.push({
        key: `${exercise.id}`,
        value: `${exercise.name}`
      })
    })
  }

  return searchArray;
}


const convertSearchResult = (targetId, exercises) => {
  for(let i = 0; i < exercises.length; i++){
    if(Number(exercises[i].id) === Number(targetId)){
      
      console.log(exercises[i])
      return exercises[i]
    }
  }
}

const filters = {
  generateExerciseSearch,
  convertSearchResult
}

export default filters