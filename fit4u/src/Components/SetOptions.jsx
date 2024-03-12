import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TrashIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

const SetOptions = ({ setOptionsOpen, deleteSet, setNum, setRating, rating }) => {
  const [ratingOpen, setRatingOpen] = useState(false);

  const ratingDisplay = (
    <View style={styles.ratingWrapper}>
      <View style={styles.ratingHeader}>
        <TouchableOpacity onPress={() => setRatingOpen(false)}>
          <ArrowLeftCircleIcon height={24} width={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.ratingHeaderText}>Rate Set</Text>
      </View>
      <View style={styles.ratingButtons}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity
            key={value}
            style={[styles.ratingButton, rating === value && styles.selectedRatingButton]}
            onPress={() => setRating(value)}>
            <Text style={styles.ratingButtonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.ratingGuide}>
        <Text>Easy Set</Text>
        <Text>Hard Set</Text>
      </View>
    </View>
  );

  let display;

  if (!ratingOpen) {
    display = (
      <View style={styles.setOptions}>
        <TouchableOpacity onPress={() => setOptionsOpen(false)} style={styles.exitButton}>
          <ArrowLeftCircleIcon height={24} width={24} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('delete')}>
          <TrashIcon height={18} color={'#000000'} />
          <Text>Delete Set</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRatingOpen(true)} style={styles.rateButton}>
          <Text>Rate Workout</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    display = ratingDisplay;
  }

  return <>{display}</>;
};

export default SetOptions;

const styles = StyleSheet.create({
  setOptions: {
    position: 'absolute',
    backgroundColor: '#853835',
    width: '25%',
    zIndex: 4,
    padding: 16,
    top: 80,
  },
  exitButton: {
    backgroundColor: 'transparent',
    marginVertical: 8,
  },
  rateButton: {
    marginVertical: 8,
  },
  ratingWrapper: {
    flexDirection: 'column',
    backgroundColor: '#B82A25',
    zIndex: 5,
    position: 'absolute',
    padding: 8,
    left: 80,
  },
  ratingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingHeaderText: {
    marginLeft: '30%',
  },
  ratingButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  ratingButton: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    borderRadius: 4,
    marginHorizontal: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  selectedRatingButton: {
    backgroundColor: 'black',
    color: 'white',
  },
  ratingGuide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 8,
  },
});
