import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const WorkoutDashItem = ({ workout }) => {
  const options = {
    timeZone: 'America/Los_Angeles',
    timeStyle: 'short',
    dateStyle: 'short',
  };

  const datetime = new Date(workout.datetime);
  const dateDisplay = datetime.toLocaleString('en-US', options);

  const exercises = () => {
    return workout.exercises.map((exercise, index) => (
      <Text key={index}>{exercise.name}</Text>
    ));
  };

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemHeader}>
        <TouchableOpacity
          onPress={() => console.log('Navigate to workout details')}
          style={styles.titleBtn}>
          <Text>{workout.name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemBody}>
        <View style={styles.dateWrapper}>
          <Text>{dateDisplay}</Text>
        </View>
        <View style={styles.exercises}>
          <View style={styles.exerciseList}>{exercises()}</View>
        </View>
      </View>
    </View>
  );
};

export default WorkoutDashItem;

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  itemHeader: {
    marginBottom: 10,
  },
  titleBtn: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
  },
  itemBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateWrapper: {
    marginRight: 10,
  },
  exercises: {
    flex: 1,
  },
  exerciseList: {
    marginTop: 5,
  },
});
