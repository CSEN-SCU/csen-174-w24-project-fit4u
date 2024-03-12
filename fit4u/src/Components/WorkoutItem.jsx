import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import SavedExerciseItem from './SavedExerciseItem';

const WorkoutItem = ({ workout, setMode }) => {
  const generateExerciseItems = () => {
    return workout.exercises.map((exercise) => (
      <SavedExerciseItem exercise={exercise} key={exercise.id} />
    ));
  };

  const options = {
    timeZone: 'America/Los_Angeles',
    timeStyle: 'short',
    dateStyle: 'short',
  };

  const datetime = new Date(workout.datetime);
  const dateDisplay = datetime.toLocaleString('en-US', options);

  return (
    <View style={styles.container}>
      <View style={styles.WorkoutTitleWrapper}>
        <Text style={styles.title}>{workout.name}</Text>
        <Text style={styles.date}>{dateDisplay}</Text>
      </View>
      <View style={styles.workoutButtons}>
        <TouchableOpacity style={styles.saveButton} onPress={() => setMode('edit')}>
          <Text>Edit Workout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.exerciseItems}>{generateExerciseItems()}</View>
    </View>
  );
};

export default WorkoutItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '90%',
    justifyContent: 'flex-start',
    position: 'fixed',
    top: '14%',
  },
  WorkoutTitleWrapper: {
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 20,
    opacity: 0.5,
  },
  workoutButtons: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#853835',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  exerciseItems: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 5,
    maxHeight: '70%',
  },
});
