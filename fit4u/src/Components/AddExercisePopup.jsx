import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StarIcon } from '@heroicons/react/24/solid';
import ReactSearchBox from 'react-search-box';
import calls from '../Hooks/calls';
import filters from '../Hooks/sanitizeData';

const AddExercisePopup = ({ exercises, setExercisePopup, setWorkoutExercises, workoutExercises, getMode, workout, setWorkout }) => {

  const searchData = useRef();

  const handleSelect = (record) => {
    if (getMode() === 'new' || getMode() === 'plan') {
      setWorkoutExercises([...workoutExercises, filters.convertSearchResult(record.item.key, exercises)]);
      setExercisePopup(false);
    } else if (getMode() === 'edit') {
      const temp = { ...workout };
      const converted = filters.convertSearchResult(record.item.key, exercises);
      temp.exercises.push({
        name: converted.name,
        sets: [],
        unit: 'lbs',
        externalExercise: record.item.key
      });
      setWorkout(temp);
      setExercisePopup(false);
    }
  };

  const searchDataFilter = () => {
    return filters.generateExerciseSearch(exercises);
  };

  return (
    <View style={styles.addExerciseWrapper}>
      <View style={styles.popupHeader}>
        <Text style={styles.headerText}>Add Exercise</Text>
        <TouchableOpacity onPress={() => setExercisePopup(false)}>
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
      </View>
      {exercises ? <ReactSearchBox
        placeholder="Search Exercises"
        value="Doe"
        autoFocus={true}
        data={searchDataFilter()}
        onSelect={(record) => {
          handleSelect(record);
        }}
      /> : <ReactSearchBox
        placeholder="Loading..."
        autoFocus={true}
      />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  addExerciseWrapper: {
    backgroundColor: '#D9D9D9',
    zIndex: 2,
    width: '92vw',
    height: '85vh',
    position: 'absolute',
  },
  popupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '2rem',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#853835',
    borderRadius: 0,
    height: 48,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 16,
  },
});

export default AddExercisePopup;
