import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import UnauthHeader from '../components/UnauthHeader';

const UnauthPage = () => {
  const route = useRoute();
  const { outlet } = route.params;

  let display;

  if (route.name === 'Login') {
    display = outlet;
  }

  return (
    <View style={styles.unauthWrapper}>
      <View style={styles.headerWrapper}>
        <UnauthHeader />
      </View>
      <View style={styles.contentWrapper}>{display}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  unauthWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff', // Example background color
  },
  headerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 1,
  },
});

export default UnauthPage;
