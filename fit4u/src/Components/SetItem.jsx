import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid';
import SetOptions from './SetOptions';
// Assuming filters and other dependencies are properly imported

const SetItem = ({
  set,
  setNum,
  getDataStatus,
  setDataSets,
  dataSets,
  getUnits,
  deleteSet,
  updateSet,
}) => {
  const [reps, setReps] = useState(set.reps);
  const [vol, setVol] = useState(set.vol);
  const [rating, setRating] = useState(set.rating);
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [optionsOpen, setOptionsOpen] = useState(false);

  // Function to handle volume based on unit type
  const volume = () => {
    if (getUnits() === 'bw') {
      return null; // No volume input for body weight unit
    } else if (getUnits() === 'tm') {
      return (
        <View style={styles.timedInput}>
          <TextInput
            style={styles.input}
            placeholder={'min'}
            keyboardType="numeric"
            value={minutes}
            onChangeText={(text) => setMinutes(text)}
          />
          <Text>:</Text>
          <TextInput
            style={styles.input}
            placeholder={'sec'}
            keyboardType="numeric"
            value={seconds}
            onChangeText={(text) => setSeconds(text)}
          />
        </View>
      );
    } else {
      return (
        <TextInput
          style={styles.input}
          placeholder={'Volume'}
          keyboardType="numeric"
          value={vol}
          onChangeText={(text) => setVol(text)}
        />
      );
    }
  };

  return (
    <View style={getUnits() !== 'bw' ? styles.setWrapper : styles.setWrapperRepOnly}>
      {optionsOpen ? (
        <View>
          <SetOptions
            setOptionsOpen={setOptionsOpen}
            deleteSet={deleteSet}
            setNum={setNum}
            setRating={setRating}
            rating={rating}
          />
        </View>
      ) : null}
      <Button onPress={() => setOptionsOpen(!optionsOpen)} title="Options" />
      <Text>SET {setNum}</Text>
      <View style={getUnits() === 'bw' ? styles.repOnlyInputs : styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder={'Reps'}
          keyboardType="numeric"
          value={reps}
          onChangeText={(text) => setReps(text)}
        />
        {volume()}
      </View>
    </View>
  );
};

export default SetItem;

const styles = StyleSheet.create({
  setWrapper: {
    // Add styles for set wrapper
  },
  setWrapperRepOnly: {
    // Add styles for set wrapper when reps only
  },
  repOnlyInputs: {
    // Add styles for rep only inputs container
  },
  inputs: {
    // Add styles for inputs container
  },
  timedInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    // Add styles for text input
  },
});
