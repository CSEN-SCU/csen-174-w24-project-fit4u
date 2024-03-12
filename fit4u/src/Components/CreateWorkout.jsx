import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateWorkout = () => {
  const navigation = useNavigation();
  const [goToNewWorkout, setGoToNewWorkout] = useState(false);

  if (goToNewWorkout) {
    navigation.navigate('Workout');
  }

  return (
    <View style={styles.container}>
      <View style={styles.landingOptionWrapper}>
        <Text style={styles.title}>Create a new workout</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setGoToNewWorkout(true);
            }}>
            <Text style={styles.buttonText}>New Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingOptionWrapper: {
    width: '75%',
    backgroundColor: '#853835',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginTop: 20,
    width: '75%',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#EB0900',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CreateWorkout;
