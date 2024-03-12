import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ViewExercises = () => {
  return (
    <View style={styles.landingOptionWrapper}>
      <Text style={styles.heading}>View Exercises</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Exercises</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewExercises;

const styles = StyleSheet.create({
  landingOptionWrapper: {
    width: '75%',
    marginHorizontal: 'auto',
    backgroundColor: '#853835',
    marginBottom: '2rem',
    height: '25vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontFamily: 'Koulen',
    fontWeight: '900',
    letterSpacing: -1,
    lineHeight: 1.5,
  },
  buttonWrapper: {
    width: '75%',
    marginHorizontal: 'auto',
  },
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EB0900',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Koulen',
    fontWeight: '900',
  },
});
