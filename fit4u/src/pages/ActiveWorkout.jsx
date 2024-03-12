import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useParams } from 'react-router'; // React Router is not supported in React Native, you need to use a different navigation library like React Navigation
import Header from '../Components/Header';

const ActiveWorkout = () => {
  const { id } = useParams(); // This needs to be replaced with the appropriate navigation hook from React Navigation

  const [mode, setMode] = useState('');

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default ActiveWorkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
