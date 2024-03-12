import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { PencilIcon } from '@heroicons/react/24/solid';

// Import the styles
import styles from './styles';

const PlanItem = ({ plan, setPreloadedExercises, setPopup, setCurPlan }) => {

  const generateEx = () => {
    return plan.exercises.map((exercise, index) =>
      <Text key={index}>{exercise.name}</Text>
    );
  };

  const editPlan = () => {
    setPreloadedExercises(plan.exercises);
    setCurPlan(plan);
    setPopup(true);
  };

  return (
    <View style={styles.planItemWrapper}>
      <View style={styles.planItemHeader}>
        <Text>{plan.name}</Text>
        <TouchableOpacity onPress={editPlan}>
          <PencilIcon height={12} width={12} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={styles.planExercises}>{generateEx()}</View>
      {/* You may replace Link with TouchableOpacity or Button */}
      <TouchableOpacity onPress={() => {}} style={styles.useBtn}>
        <Text style={styles.useBtnText}>USE PLAN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlanItem;

const styles = StyleSheet.create({
  planItemWrapper: {
    backgroundColor: '#D9D9D9',
    zIndex: 2,
    width: '92vw',
    height: '85vh',
    position: 'absolute',
    padding: 20,
  },
  planItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  planExercises: {
    marginBottom: 10,
  },
  useBtn: {
    backgroundColor: '#853835',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  useBtnText: {
    color: '#FFFFFF',
  },
});

