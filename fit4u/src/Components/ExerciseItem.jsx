import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SetItem from './SetItem';
import filters from '../Hooks/sanitizeData';
import Difficulty from './Difficulty';
import ExerciseOptions from './ExerciseOptions';
import { EllipsisHorizontalCircleIcon, HeartIcon } from '@heroicons/react/24/solid';

const ExerciseItem = ({ exercise, getDataStatus, dataExercises, setDataExercises, deleteExercise }) => {
  const [sets, setSets] = useState(0);
  const [setNum, setSetNum] = useState(0);
  const [dataSets, setDataSets] = useState([]);
  const [unit, setUnit] = useState(exercise.equipment === "body_only" ? 'bw' : 'lbs');
  const [displaySets, setDisplaySets] = useState([]);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [favorite, setFavorite] = useState(exercise.favorite);

  const getUnits = () => {
    return unit;
  };

  useEffect(() => {
    const genExercise = async () => {
      const newExercise = filters.convertExercise(exercise.id, exercise.name, getUnits(), dataSets);
      if (newExercise !== null) {
        const result = await setDataExercises(dataExercises => [...dataExercises, newExercise]);
      }
    };

    if (getDataStatus()) {
      genExercise();
    }
  }, [dataSets]);

  const volume = () => {
    if (unit === 'lbs' || unit === 'kg') {
      return (<Text>VOL</Text>);
    } else if (unit === 'tm') {
      return (<Text>TIME</Text>);
    } else {
      return <></>;
    }
  };

  const deleteSet = (setNum) => {
    const index = Number(setNum - 1);
    console.log(index);
    console.log('-------Delete------');
    setDisplaySets(displaySets => [...displaySets].filter(s => s.key !== index));
    setDisplay();
  };

  const addSet = () => {
    setSets(sets + 1);
    setDisplaySets(sets => [...sets, { 'key': sets.length, 'reps': 0, 'vol': 0, 'rating': 0 }]);
  };

  const generateOptions = () => {
    if (exercise.type === 'strength') {
      if (exercise.equipment === 'body_only') {
        return (
          <View style={styles.selectWrapper}>
            <Picker
              selectedValue={unit}
              onValueChange={(itemValue) => setUnit(itemValue)}>
              <Picker.Item label="Body Weight" value="bw" />
            </Picker>
          </View>
        );
      } else {
        return (
          <View style={styles.selectWrapper}>
            <Picker
              selectedValue={unit}
              onValueChange={(itemValue) => setUnit(itemValue)}>
              <Picker.Item label="LB" value="lbs" />
              <Picker.Item label="KG" value="kg" />
              <Picker.Item label="Body Weight" value="bw" />
            </Picker>
          </View>
        );
      }
    } else if (exercise.type === 'cardio') {
      return (
        <View style={styles.selectWrapper}>
          <Picker
            selectedValue={unit}
            onValueChange={(itemValue) => setUnit(itemValue)}>
            <Picker.Item label="Timed" value="timed" />
          </Picker>
        </View>
      );
    }
  };

  const setDisplay = () => {
    return (displaySets.map((set, i) =>
      <SetItem set={set} setNum={i + 1} dataSets={dataSets} setDataSets={setDataSets} getDataStatus={getDataStatus} key={i} getUnits={getUnits} deleteSet={deleteSet} />
    ));
  };

  useEffect(() => {
    setDisplay();
  }, [sets]);

  return (
    <View style={styles.exerciseItemWrapper}>
      <View style={styles.exerciseNameWrapper}>
        {favorite ? <View style={styles.heartIcon}><HeartIcon EllipsisHorizontalCircleIcon height={28} width={28} color='#853835' /></View> : <></>}
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <TouchableOpacity style={styles.btnClear} onPress={() => setOptionsOpen(!optionsOpen)}>
          <EllipsisHorizontalCircleIcon height={28} width={28} margin={4} color='#853835' />
        </TouchableOpacity>
        {optionsOpen ? <ExerciseOptions deleteExercise={deleteExercise} exercise={exercise} setFavoriteItem={setFavorite} favorite={favorite} /> : <></>}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.exerciseInfo}>
          <Text>Muscle: {exercise.muscle}</Text>
          <Text style={styles.difficultyWrapper}>Difficulty: <Difficulty rating={exercise.difficulty} /></Text>
          <Text>Equipment: {exercise.equipment}</Text>
          {generateOptions()}
        </View>
        <View style={styles.setInfo}>
          <View style={styles.header}>
            <Text>REPS</Text>
            {volume()}
          </View>
          <View style={unit !== "tm" ? styles.setsItems : styles.setsItemsTimed}>
            {setDisplay()}
            <TouchableOpacity onPress={() => addSet()} style={styles.addButton}><Text> +  ADD SET</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseItemWrapper: {
    width: '90vw',
    backgroundColor: '#D9D9D9',
    position: 'relative',
    margin: '1rem 0rem',
  },
  exerciseNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '2rem',
  },
  heartIcon: {
    width: 28,
    height: 28,
    margin: '1rem',
  },
  btnClear: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  exerciseName: {
    fontFamily: 'Koulen',
    fontWeight: '900',
    letterSpacing: -1,
    lineHeight: 1.5,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: '2rem',
    justifyContent: 'space-between',
  },
  exerciseInfo: {
    width: '30%',
    justifyContent: 'left',
    alignItems: 'center',
    marginLeft: '1rem',
  },
  difficultyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectWrapper: {
    width: '70%',
  },
  setInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60vw',
  },
  header: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-evenly',
    alignSelf: 'flex-end',
  },
  setsItems: {
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  setsItemsTimed: {
    width: '100%',
    flexDirection: 'column',
  },
  addButton: {
    backgroundColor: '#853835',
    borderRadius: 0,
    width: '80%',
    margin: '.5rem',
    alignSelf: 'center',
  },
});

export default ExerciseItem;
