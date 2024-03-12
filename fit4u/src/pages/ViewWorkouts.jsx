import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import calls from '../Hooks/calls';
import WorkoutItem from '../Components/WorkoutItem';

const ViewWorkout = () => {
  const [status, setStatus] = useState(null);
  const [workout, setWorkout] = useState(null);
  const route = useRoute();

  const display = useRef(null);

  const getWorkout = async () => {
    try {
      const result = await calls.getWorkout(route.params.id, setWorkout, setStatus);
    } catch (error) {
      console.error('Error getting workout:', error);
    }
  };

  useEffect(() => {
    getWorkout();
  }, []);

  useEffect(() => {
    if (status === 200) {
      display.current = <WorkoutItem workout={workout} />;
      console.log('Status Success');
    } else {
      display.current = <Text>Loading...</Text>;
      getWorkout();
    }
  }, [status]);

  return (
    <View style={styles.workoutWrapper}>
      {display.current}
    </View>
  );
};

const styles = {
  workoutWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ViewWorkout;
