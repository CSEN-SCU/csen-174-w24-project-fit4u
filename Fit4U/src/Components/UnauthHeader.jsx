import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Logo from '/Logo.png?url';

const UnauthHeader = () => {
  return (
    <View style={styles.logoWrapper}>
      <Image source={Logo} />
    </View>
  );
};

export default UnauthHeader;

const styles = StyleSheet.create({
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 32,
  },
});
