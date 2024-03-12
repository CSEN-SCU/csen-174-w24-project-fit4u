import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import calls from '../Hooks/calls';
import AddPlanPopup from '../Components/Workout-Plans/AddPlanPopup';
import PlanItem from '../Components/Workout-Plans/PlanItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WorkoutPlans = () => {
  const [plans, setPlans] = useState([]);
  const [addPlanOpen, setAddPlanOpen] = useState(false);
  const [mode, setMode] = useState('view');
  const [preloadedExercises, setPreloadedExercises] = useState([]);
  const [curPlan, setCurPlan] = useState(null);

  const items = useRef(null);

  useEffect(() => {
    const getPlans = async () => {
      calls.getWorkoutPlans(setPlans);
    };

    getPlans();
  }, []);

  const generateItems = () => {
    return plans.map((plan, index) => (
      <View key={index} style={styles.planItem}>
        <PlanItem
          plan={plan}
          setPreloadedExercises={setPreloadedExercises}
          setPopup={setAddPlanOpen}
          setCurPlan={setCurPlan}
        />
      </View>
    ));
  };

  useEffect(() => {
    const setItems = () => {
      if (plans) {
        items.current = generateItems();
      }
    };

    setItems();
  }, [plans]);

  return (
    <View style={styles.workoutPlansWrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Workout Plans</Text>
        <Button title="+ ADD PLAN" onPress={() => setAddPlanOpen(true)} />
      </View>
      <View style={styles.popupWrapper}>
        {addPlanOpen && (
          <AddPlanPopup
            setPopupOpen={setAddPlanOpen}
            preloadedExercises={preloadedExercises}
            plan={curPlan}
          />
        )}
      </View>
      <ScrollView contentContainerStyle={styles.planItems}>
        {generateItems()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  workoutPlansWrapper: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  planItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  planItem: {
    width: '35%',
    margin: 10,
  },
  popupWrapper: {
    position: 'relative',
  },
  addPlanButton: {
    backgroundColor: '#853835',
    borderRadius: 0,
    marginVertical: 10,
    width: '90%',
  },
});

export default WorkoutPlans;
