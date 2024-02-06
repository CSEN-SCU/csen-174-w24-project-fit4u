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

const getWorkouts = (setWorkouts) => {
  const fetchPromise = userServices.getAll("api/workout");
  fetchPromise.then(response => {
    console.log(response)
    setWorkouts(response.data.workouts)
    return response.data
  })
  .catch((e) => {
    console.log(e);
  }); 
}

const createWorkout = (data) => {
  const fetchPromise = userServices.create(data, 'api/workout/');
  fetchPromise.then(response => {
    console.log(response)
    return response.data
  }).catch((e) => {
    console.log(e);
  }); 
}

const calls = {
  getMe,
  getWorkouts,
  createWorkout
}

export default calls;