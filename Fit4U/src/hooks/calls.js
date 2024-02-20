import userServices from "../services/userServices";


const getMe = (setMe) => {
  const fetchPromise = userServices.getAll("api/me/");
  fetchPromise.then(response => {
    console.log(response)
    setMe(response.data)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const logout = () => {
  const fetchPromise = userServices.create({}, 'api/logout/');
  fetchPromise.then(response => {
    console.log(response)
    return response.data
  }).catch((e) => {
    console.log(e);
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
  }); 
}

const getWorkout = async(id, setWorkout, setStatus) => {
  const fetchPromise = userServices.get(id, "api/workout");
  fetchPromise.then(response => {
    console.log(response)
    setWorkout(response.data.workout)
    setStatus(response.status)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const createWorkout = (data, setResponse) => {
  const fetchPromise = userServices.create(data, 'api/workout/');
  fetchPromise.then(response => {
    console.log(response)
    setResponse(response.status)
    return response.data
  }).catch((e) => {
    console.log(e);
  }); 
}

const getExercises = (setExercises) => {
  const fetchPromise = userServices.getAll("api/external-exercises/");
  fetchPromise.then(response => {
    console.log(response)
    setExercises(response.data.exercises)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const createFavorite = (data) => {
  const fetchPromise = userServices.create("api/external-exercises/favorite/");
  fetchPromise.then(response => {
    console.log(response)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const createUser = (data) => {
  const fetchPromise = userServices.create(data, 'api/sign-up/');
  fetchPromise.then(response => {
    console.log(response)
    return response.data
  }).catch((e) => {
    console.log(e);
  }); 
}


const calls = {
  getMe,
  logout,
  getWorkouts,
  getWorkout,
  createWorkout,
  getExercises,
  createUser,
  createFavorite
}

export default calls;