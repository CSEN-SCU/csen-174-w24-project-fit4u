import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import CreateWorkout from '../Components/CreateWorkout';
import ViewExercises from '../Components/ViewExercises';
import calls from '../Hooks/calls';

const LandingPage = () => {
  const [userInfo, setUserInfo] = useState();
  const info = useRef();

  const getUserInfo = async () => {
    calls.getMe(setUserInfo);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const setUserInfoDisplay = () => {
    if (userInfo) {
      return userInfo.firstName;
    } else {
      return '';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.helloTitle}>Hello, {userInfo ? userInfo.firstName : ''}</Text>
      <CreateWorkout />
      <ViewExercises />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  helloTitle: {
    textAlign: 'center',
    fontFamily: 'Koulen',
    fontWeight: '900',
    letterSpacing: -1,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default LandingPage;
