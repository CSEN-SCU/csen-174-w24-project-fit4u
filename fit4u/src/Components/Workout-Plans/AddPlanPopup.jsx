import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native'; // Import necessary components from 'react-native'
import calls from '../../Hooks/calls';
import filters from '../../Hooks/sanitizeData';
import { TrashIcon } from '@heroicons/react/24/solid'; // Make sure to replace this with an appropriate icon component in React Native

const AddPlanPopup = ({ setPopupOpen, preloadedExercises, plan }) => {
  const [externalExercises, setExternalExercises] = useState([]);
  const [workoutExercises, setWorkoutExercises] = useState(preloadedExercises ? preloadedExercises : []);
  const [name, setName] = useState(plan ? plan.name : '');
  const [mode, setMode] = useState(plan ? 'edit' : 'new');
  const [unit, setUnit] = useState();

  // Function to formulate data for creating or updating a workout plan
  const formulateData = () => {
    let exercises = workoutExercises.map(exercise => exercise.id);
    return {
      workout_plan: {
        name: name,
        exercises: exercises
      }
    };
  };

  // Function to handle selection of an exercise from the search box
  const handleSelect = record => {
    setWorkoutExercises([...workoutExercises, filters.convertSearchResult(record.item.key, externalExercises)]);
  };

  // Function to handle submission of the form
  const handleSubmit = () => {
    if (name && workoutExercises.length && mode === 'new') {
      const data = formulateData();
      calls.createWorkoutPlan(data);
      setPopupOpen(false);
    } else if (name && workoutExercises.length && mode === 'edit') {
      const data = formulateData();
      calls.updateWorkoutPlan(plan.id, data);
      setPopupOpen(false);
    } else {
      alert('Please enter name and exercises');
    }
  };

  useEffect(() => {
    const getExercises = () => {
      calls.getExercises(setExternalExercises);
    };

    getExercises();
  }, []);

  // Function to display selected exercises
  const setExercisesDisplay = () => {
    return workoutExercises.map(exercise => (
      <View key={exercise.externalExercise} style={styles.popupExItem}>
        <Text>{exercise.name}</Text>
        <Button title="Delete" onPress={() => deleteExercise(exercise.id)} />
      </View>
    ));
  };

  // Function to delete an exercise from the list
  const deleteExercise = id => {
    setWorkoutExercises(workoutExercises.filter(exercise => exercise.id !== id));
  };

  return (
    <View style={styles.addPlanPopup}>
      <View style={styles.popupHeader}>
        <Text>Add Plan</Text>
        <Button title="X" onPress={() => setPopupOpen(false)} />
      </View>

      <View style={styles.workoutTitleWrapper}>
        <TextInput
          style={styles.workoutInputs}
          placeholder="Workout Title"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      {externalExercises ? (
        <ReactSearchBox
          placeholder="Search Exercises"
          clearOnSelect={true}
          autoFocus={true}
          data={filters.generateExerciseSearch(externalExercises)}
          onSelect={record => {
            handleSelect(record);
          }}
        />
      ) : (
        <></>
      )}

      <View style={styles.popupExercises}>
        <Text>Exercises</Text>
        {setExercisesDisplay()}
      </View>

      <Button title="Save" onPress={() => handleSubmit()} style={styles.submitBtn} />
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
      margin: '0rem 2rem',
      alignItems: 'center',
    },
    popupHeaderButton: {
      backgroundColor: '#853835',
      borderRadius: 0,
      height: '3rem',
    },
  });

export default AddPlanPopup;
