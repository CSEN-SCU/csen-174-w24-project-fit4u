import userServices from "../services/userServices";


const getMe = (setMe) => {
  const fetchPromise = userServices.getAll("api/me/");
  fetchPromise.then(response => {
    console.log(response.status)
    console.log(response)
    setMe(response.data)
    return response.data
  })
  .catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    window.location.reload();
  }); 
}

const logout = () => {
  const fetchPromise = userServices.create({}, 'api/logout/');
  fetchPromise.then(response => {
    console.log(response)
    return response.data
  }).catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    window.location.reload();
  }); 
}

const getWorkouts = (setWorkouts) => {
  const fetchPromise = userServices.getAll("api/workout/");
  fetchPromise.then(response => {
    console.log(response)
    setWorkouts(response.data.workouts)
    return response.data
  })
  .catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    window.location.reload();
  }); 
}

const getWorkout = async(id, setWorkout) => {
  const fetchPromise = userServices.get(id, "api/workout");
  fetchPromise.then(response => {
    console.log(response)
    setWorkout(response.data.workout)
    return response.data
  })
  .catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    window.location.reload();
  }); 
}

const createWorkout = (data, setResponse) => {
  const fetchPromise = userServices.create(data, 'api/workout');
  fetchPromise.then(response => {
    console.log(response)
    setResponse(response.status)
    return response.data
  }).catch((e) => {
    console.log(e);
  }); 
}

const updateWorkout = (id, data) => {
  const fetchPromise = userServices.update(id, data, 'api/workout');
  fetchPromise.then(response => {
    console.log(response)
    window.location.reload();
    return response.data
  }).catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
  }); 
}

const getExercises = async(setExercises) => {
  const fetchPromise = userServices.getAll("api/external-exercises/");
  fetchPromise.then(response => {
    console.log(response)
    setExercises(response.data.exercises)
    return response.data
  })
  .catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    window.location.reload();
  }); 
  
}

const createFavorite = (data) => {
  const fetchPromise = userServices.create(data, "api/external-exercises/favorite");
  fetchPromise.then(response => {
    console.log(response)
    return response.data
  })
  .catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    //window.location.reload();
  }); 
}

const createUser = (data) => {
  const fetchPromise = userServices.create(data, 'api/sign-up/');
  fetchPromise.then(response => {
    console.log(response)
    return response.data
  }).catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    window.location.reload();
  }); 
}

const getWorkoutPlans  = (setPlans) => {
  const fetchPromise = userServices.getAll("api/workout-plan/");
  fetchPromise.then(response => {
    console.log(response)
    setPlans(response.data.workoutPlans)
    return response.data
  })
  .catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    window.location.reload();
  }); 
}

const getWorkoutPlan = async(id, setPlan) => {
  const fetchPromise = userServices.get(id, "api/workout-plan");
  fetchPromise.then(response => {
    console.log(response)
    setPlan(response.data.workoutPlan)
    return response.data
  })
  .catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    //window.location.reload();
  }); 
}

const createWorkoutPlan = (data) =>{
  const fetchPromise = userServices.create(data, 'api/workout-plan');
  fetchPromise.then(response => {
    console.log(response)
    return response.data
  }).catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    //window.location.reload();
  }); 
}

const updateWorkoutPlan = (id, data) => {
  const fetchPromise = userServices.update(id, data, 'api/workout-plan');
  fetchPromise.then(response => {
    console.log(response)
    window.location.reload();
    return response.data
  }).catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
  }); 
}

const getAnalyze = (setAnalyze, days) => {
  let request = `api/analyze/?days=${days}`
  if(!days){
    request = `api/analyze/?days=7`
  }
  const fetchPromise = userServices.getAll(request);
  fetchPromise.then(response => {
    console.log(response)
    setAnalyze(response.data.analysis)
    return response.data
  })
  .catch((e) => {
    console.log(e);
    console.log('Reloading: ' + e.response.status);
    //window.location.reload();
  }); 
}


const calls = {
  getMe,
  logout,
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  getExercises,
  createUser,
  createFavorite,
  getWorkoutPlans,
  createWorkoutPlan,
  getWorkoutPlan,
  updateWorkoutPlan,
  getAnalyze
}

export default calls;