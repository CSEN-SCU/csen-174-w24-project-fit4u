import userServices from "../services/userServices";
import { Alert } from 'react-native';

const getMe = (setMe) => {
    const fetchPromise = userServices.getAll("api/me/");
    fetchPromise.then(response => {
            console.log(response.status)
            console.log(response)
            setMe(response.data)
            return response.data
        })
        .catch((error) => {
            console.log(error);
            console.log('Error occurred while fetching "Me" data: ' + error.response.status);
            // Consider showing an error message to the user
            Alert.alert('Error', 'Failed to retrieve user data');
        });
}

const logout = () => {
    const fetchPromise = userServices.create({}, 'api/logout/');
    fetchPromise.then(response => {
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error);
        console.log('Error occurred while logging out: ' + error.response.status);
        // Consider showing an error message to the user
        Alert.alert('Error', 'Failed to logout');
    });
}

const getWorkouts = (setWorkouts) => {
    const fetchPromise = userServices.getAll("api/workout/");
    fetchPromise.then(response => {
            console.log(response)
            setWorkouts(response.data.workouts)
            return response.data
        })
        .catch((error) => {
            console.log(error);
            console.log('Error occurred while fetching workouts: ' + error.response.status);
            // Consider showing an error message to the user
            Alert.alert('Error', 'Failed to retrieve workouts');
        });
}

const getWorkout = async(id, setWorkout) => {
    const fetchPromise = userServices.get(id, "api/workout");
    fetchPromise.then(response => {
            console.log(response)
            setWorkout(response.data.workout)
            return response.data
        })
        .catch((error) => {
            console.log(error);
            console.log('Error occurred while fetching workout: ' + error.response.status);
            // Consider showing an error message to the user
            Alert.alert('Error', 'Failed to retrieve workout');
        });
}

const createWorkout = (data, setResponse) => {
    const fetchPromise = userServices.create(data, 'api/workout');
    fetchPromise.then(response => {
        console.log(response)
        setResponse(response.status)
        return response.data
    }).catch((error) => {
        console.log(error);
        // Consider showing an error message to the user
        Alert.alert('Error', 'Failed to create workout');
    });
}

const updateWorkout = (id, data) => {
    const fetchPromise = userServices.update(id, data, 'api/workout');
    fetchPromise.then(response => {
        console.log(response)
            // Consider how to handle the update success
    }).catch((error) => {
        console.log(error);
        console.log('Error occurred while updating workout: ' + error.response.status);
        // Consider showing an error message to the user
        Alert.alert('Error', 'Failed to update workout');
    });
}

const getExercises = async(setExercises) => {
    const fetchPromise = userServices.getAll("api/external-exercises/");
    fetchPromise.then(response => {
            console.log(response)
            setExercises(response.data.exercises)
            return response.data
        })
        .catch((error) => {
            console.log(error);
            console.log('Error occurred while fetching exercises: ' + error.response.status);
            // Consider showing an error message to the user
            Alert.alert('Error', 'Failed to retrieve exercises');
        });

}

const createFavorite = (data) => {
    const fetchPromise = userServices.create(data, "api/external-exercises/favorite");
    fetchPromise.then(response => {
            console.log(response)
            return response.data
        })
        .catch((error) => {
            console.log(error);
            console.log('Error occurred while creating favorite: ' + error.response.status);
            // Consider showing an error message to the user
            Alert.alert('Error', 'Failed to create favorite');
        });
}

const createUser = (data) => {
    const fetchPromise = userServices.create(data, 'api/sign-up/');
    fetchPromise.then(response => {
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error);
        console.log('Error occurred while creating user: ' + error.response.status);
        // Consider showing an error message to the user
        Alert.alert('Error', 'Failed to create user');
    });
}

const getWorkoutPlans = (setPlans) => {
    const fetchPromise = userServices.getAll("api/workout-plan/");
    fetchPromise.then(response => {
            console.log(response)
            setPlans(response.data.workoutPlans)
            return response.data
        })
        .catch((error) => {
            console.log(error);
            console.log('Error occurred while fetching workout plans: ' + error.response.status);
            // Consider showing an error message to the user
            Alert.alert('Error', 'Failed to retrieve workout plans');
        });
}

const getWorkoutPlan = async(id, setPlan) => {
    const fetchPromise = userServices.get(id, "api/workout-plan");
    fetchPromise.then(response => {
            console.log(response)
            setPlan(response.data.workoutPlan)
            return response.data
        })
        .catch((error) => {
            console.log(error);
            console.log('Error occurred while fetching workout plan: ' + error.response.status);
            // Consider showing an error message to the user
            Alert.alert('Error', 'Failed to retrieve workout plan');
        });
}

const createWorkoutPlan = (data) => {
    const fetchPromise = userServices.create(data, 'api/workout-plan');
    fetchPromise.then(response => {
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error);
        console.log('Error occurred while creating workout plan: ' + error.response.status);
        // Consider showing an error message to the user
        Alert.alert('Error', 'Failed to create workout plan');
    });
}

const updateWorkoutPlan = (id, data) => {
    const fetchPromise = userServices.update(id, data, 'api/workout-plan');
    fetchPromise.then(response => {
        console.log(response)
            // Consider how to handle the update success
    }).catch((error) => {
        console.log(error);
        console.log('Error occurred while updating workout plan: ' + error.response.status);
        // Consider showing an error message to the user
        Alert.alert('Error', 'Failed to update workout plan');
    });
}

const getAnalyze = (setAnalyze) => {
    const fetchPromise = userServices.getAll("api/analyze/");
    fetchPromise.then(response => {
            console.log(response)
            setAnalyze(response.data.analysis)
            return response.data
        })
        .catch((error) => {
            console.log(error);
            console.log('Error occurred while fetching analysis data: ' + error.response.status);
            // Consider showing an error message to the user
            Alert.alert('Error', 'Failed to retrieve analysis data');
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