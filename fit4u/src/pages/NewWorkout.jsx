import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogWorkout from '../Components/LogWorkout';
import AddExercisePopup from '../Components/AddExercisePopup';
import { useRoute } from '@react-navigation/native';
import calls from '../Hooks/calls';
import WorkoutItem from '../Components/WorkoutItem';
import EditWorkout from '../Components/EditWorkout/EditWorkout';

const NewWorkout = () => {
  const route = useRoute();
  const id = route.params?.id || '';
  const mode = decideMode(id, route.name);

  const [exercisePopup, setExercisePopup] = useState(false);
  const [workoutExercises, setWorkoutExercises] = useState([]);
  const [workout, setWorkout] = useState();
  const [externalExercises, setExternalExercises] = useState();
  const [plan, setPlan] = useState();

  useEffect(() => {
    getExercises();
    const getItems = async () => {
      if (mode === 'plan') {
        getPlanItems();
      } else if (mode === 'view' || mode === 'edit') {
        getWorkout();
      }
    };
    getItems();
  }, [mode]);

  const getExercises = async () => {
    const result = await calls.getExercises(setExternalExercises);
  };

  const getWorkout = async () => {
    if (id) {
      const result = await calls.getWorkout(id, setWorkout);
    }
  };

  const getPlanItems = async () => {
    if (id && mode === 'plan') {
      calls.getWorkoutPlan(id, setPlan);
      loadExercises();
    }
  };

  const loadExercises = () => {
    if (plan) {
      plan.exercises.forEach((exercise) => {
        setWorkoutExercises((workoutExercises) => [...workoutExercises, exercise]);
      });
    }
  };

  const deleteExercise = (id) => {
    setWorkoutExercises(workoutExercises.filter((exercise) => exercise.id !== id));
  };

  const genDisplay = () => {
    if (mode === 'new') {
      return (
        <LogWorkout
          setExercisePopup={setExercisePopup}
          workoutExercises={workoutExercises}
          getMode={getMode}
          setMode={setMode}
          title={null}
          deleteExercise={deleteExercise}
        />
      );
    } else if (mode === 'view' && workout) {
      return <WorkoutItem workout={workout} setMode={setMode} />;
    } else if (mode === 'edit' && workout) {
      return <EditWorkout workout={workout} setExercisePopup={setExercisePopup} externalExercises={externalExercises} setMode={setMode} />;
    } else if (mode === 'plan') {
      if (workoutExercises.length > 0) {
        return (
          <LogWorkout
            setExercisePopup={setExercisePopup}
            workoutExercises={workoutExercises}
            getMode={getMode}
            setMode={setMode}
            passedTitle={plan.name}
            deleteExercise={deleteExercise}
          />
        );
      } else {
        getPlanItems();
        return <Text>Loading...</Text>;
      }
    }
  };

  return (
    <View style={styles.workoutWrapper}>
      <View style={styles.popup}>{exercisePopup && externalExercises ? <AddExercisePopup exercises={externalExercises} setExercisePopup={setExercisePopup} setWorkoutExercises={setWorkoutExercises} getMode={getMode} workout={workout} setWorkout={setWorkout} /> : null}</View>
      {plan && workoutExercises || (mode === 'edit' || mode === 'view') && workout || mode === 'new' ? genDisplay() : <Text>Loading...</Text>}
    </View>
  );
};

const decideMode = (id, path) => {
  if (id) {
    if (path.includes('plan')) {
      return 'plan';
    } else if (path.includes('saved')) {
      return 'view';
    }
  } else {
    return 'new';
  }
};

const styles = StyleSheet.create({
  workoutWrapper: {
    position: 'relative',
    zIndex: 1,
  },
  popup: {
    position: 'absolute',
    zIndex: 2,
    marginVertical: '4vw',
    bottom: '15rem',
  },
});

export default NewWorkout;
