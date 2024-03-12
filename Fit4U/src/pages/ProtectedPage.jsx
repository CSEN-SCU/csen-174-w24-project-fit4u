import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../Components/Header';

const ProtectedPage = () => {
  const route = useRoute();
  const { outlet } = route.params;

  return (
    <View style={styles.appWrapper}>
      <Header />
      <View style={styles.contentWrapper}>
        {outlet}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: '#ffffff', // Example background color
  },
  contentWrapper: {
    flex: 1,
  },
});

export default ProtectedPage;
