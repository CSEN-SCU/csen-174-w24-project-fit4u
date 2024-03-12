import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SavedSetItem from './SavedSetItem';
import calls from '../Hooks/calls';
import filters from '../Hooks/sanitizeData';
import Difficulty from './Difficulty';

const SavedExerciseItem = ({ exercise }) => {
  const [workoutExercises, setWorkoutExercises] = useState([]);
  const [exerciseInfo, setExerciseInfo] = useState(null);

  useEffect(() => {
    const generateExerciseItems = async () => {
      // Call your async function to fetch workout exercises
      // For example:
      // const exercises = await calls.getExercises();
      // setWorkoutExercises(exercises);
    };

    generateExerciseItems();
  }, []);

  useEffect(() => {
    const getInfo = async () => {
      if (workoutExercises.length === 0) return;

      // Assuming exercise.externalExercise contains the ID or other identifier
      // to retrieve exercise details from workoutExercises array
      const foundExercise = workoutExercises.find(
        (item) => item.id === exercise.externalExercise
      );

      // Assuming filters.convertSearchResult returns the exercise details in the expected format
      const info = await filters.convertSearchResult(foundExercise);

      setExerciseInfo(info);
    };

    getInfo();
  }, [workoutExercises]);

  const generateSetItems = () => {
    if (!exercise.sets) return null;

    return exercise.sets.map((set, index) => (
      <SavedSetItem set={set} key={index} />
    ));
  };

  return (
    <View style={styles.exerciseItemWrapper}>
      <View style={styles.exerciseName}>
        <Text>{exercise.name}</Text>
      </View>
      {exerciseInfo && (
        <View style={styles.infoContainer}>
          <View style={styles.exerciseInfo}>
            <Text>Muscle: {exerciseInfo.muscle}</Text>
            <View style={styles.difficultyWrapper}>
              <Text>Difficulty: </Text>
              <Difficulty rating={exerciseInfo.difficulty} />
            </View>
            <Text>Equipment: {exerciseInfo.equipment}</Text>
            <Text>Unit: {exercise.unit}</Text>
          </View>
          <View style={styles.setInfo}>
            <View style={styles.header}>
              <Text>REPS</Text>
              <Text>VOL</Text>
            </View>
            <View style={styles.setsItems}>{generateSetItems()}</View>
          </View>
        </View>
      )}
    </View>
  );
};

export default SavedExerciseItem;

const styles = StyleSheet.create({
    exerciseItemWrapper: {
        width: '90vw',
        backgroundColor: '#D9D9D9',
        position: 'relative',
        margin: '1rem 0rem',
    },
    exerciseName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 72,
    },
    exerciseNameHeart: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnClear: {
        display: 'flex',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    heartIcon: {
        width: 28,
        height: 28,
        margin: '1rem',
    },
    exerciseInfo: {
        textAlign: 'left',
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'center',
        margin: '0rem 1rem 0rem 0rem',
    },
    exerciseInfoSelect: {
        width: '70%',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '2rem',
        justifyContent: 'space-between',
    },
    setInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60vw',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-end',
    },
    setsItems: {
        width: '100%',
    },
    setsItemsTimed: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    setWrapperInputsInput: {
        width: '8vw',
        height: '4vh',
        margin: '0rem 1rem 0rem 1rem',
    },
    setItemsButton: {
        backgroundColor: '#853835',
        borderRadius: '0rem',
        width: '80%',
        margin: '.5rem',
        alignSelf: 'center',
    },
    setWrapperInputsP: {
        width: '10vw',
        height: '3.5vh',
        margin: '0rem 1rem 0rem 1rem',
        backgroundColor: '#853835',
        color: 'white',
        textAlign: 'center',
        verticalAlign: 'center',
    },
    setWrapperInputs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    setWrapperH4: {
        width: '100%',
    },
    setWrapperButton: {
        backgroundColor: 'transparent',
        borderWidth: '0px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    difficultyWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timedInput: {
        display: 'flex',
        flexDirection: 'row',
        width: '20vw',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timedInputInput: {
        width: '30%',
        height: '4vh',
        alignSelf: 'center',
    },
    timedInputP: {
        padding: '.25rem',
    },
    repOnlyInputs: {
        width: '60vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    repOnlyInputsInput: {
        width: '16vw',
        height: '4vh',
    },
    exerciseOptions: {
        position: 'absolute',
        top: '4rem',
        backgroundColor: '#853835',
        zIndex: '4',
        padding: '1rem',
    },
    exerciseOptionsButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        letterSpacing: '.8px',
        fontWeight: '500',
        backgroundColor: 'black',
        width: '30vw',
        height: '8vh',
        margin: '.2rem 1rem',
        borderRadius: '0px',
        borderBottomWidth: '3px',
        borderColor: '#B82A25',
        alignSelf: 'center',
    },
});
