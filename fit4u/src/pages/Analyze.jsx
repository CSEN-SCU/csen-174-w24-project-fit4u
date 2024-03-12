import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import calls from '../Hooks/calls';

const Analyze = () => {
  const [analyze, setAnalyze] = useState([]);
  const [currentMuscle, setCurrentMuscle] = useState('');

  const getData = () => {
    calls.getAnalyze(setAnalyze);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Analyzing</Text>
    </View>
  );
};

export default Analyze;
