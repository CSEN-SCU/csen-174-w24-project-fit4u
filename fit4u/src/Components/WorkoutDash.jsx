import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import WorkoutDashItem from './WorkoutDashItem';
import calls from '../Hooks/calls';
import { useNavigation } from '@react-navigation/native';

const WorkoutDash = () => {
  const [workouts, setWorkouts] = useState(null);
  const navigation = useNavigation();

  const items = useRef();

  useEffect(() => {
    const getWorkouts = async () => {
      calls.getWorkouts(setWorkouts);
    };

    getWorkouts();
  }, []);

  const createItems = () => {
    if (workouts) {
      return workouts.map((workout, index) => (
        <WorkoutDashItem key={index} workout={workout} />
      ));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>WORKOUTS</Text>
        <Button
          title="CREATE WORKOUT"
          onPress={() => navigation.navigate('Workout')}
        />
      </View>
      <View style={styles.tableLabels}>
        <Text>DATE</Text>
        <Text>EXERCISES</Text>
      </View>
      <ScrollView style={styles.itemsWrapper}>
        <View style={styles.itemWrapper}>{createItems()}</View>
      </ScrollView>
    </View>
  );
};

export default WorkoutDash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#B82A25',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  tableLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#853835',
    color: 'white',
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  itemsWrapper: {
    maxHeight: '55%',
    width: '100%',
  },
  itemWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
});
