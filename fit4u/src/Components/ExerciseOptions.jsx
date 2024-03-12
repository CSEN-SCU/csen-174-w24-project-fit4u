import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/solid';
import calls from '../Hooks/calls';

const ExerciseOptions = ({ deleteExercise, exercise, setFavoriteItem, favorite }) => {

  const setFavorite = (id) => {
    calls.createFavorite({ "id": id });
    setFavoriteItem(!favorite);
  };

  return (
    <View style={styles.exerciseOptions}>
      <TouchableOpacity onPress={() => setFavorite(exercise.id)} style={styles.button}>
        <HeartIcon height={24} width={24} color='#FFFFFF' />
        <Text style={styles.buttonText}>Favorite Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteExercise(exercise.id)} style={styles.button}>
        <TrashIcon height={24} width={24} color='#FFFFFF' />
        <Text style={styles.buttonText}>Delete Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseOptions: {
    position: 'absolute',
    top: '4rem',
    backgroundColor: '#853835',
    zIndex: 4,
    padding: '1rem',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    letterSpacing: .8,
    fontWeight: '500',
    backgroundColor: 'black',
    width: '30vw',
    height: '8vh',
    margin: '.2rem 1rem',
    borderRadius: 0,
    borderBottomWidth: 3,
    borderBottomColor: '#B82A25',
    alignSelf: 'center',
  },
  buttonText: {
    marginLeft: '1rem',
    color: 'white',
  },
});

export default ExerciseOptions;
