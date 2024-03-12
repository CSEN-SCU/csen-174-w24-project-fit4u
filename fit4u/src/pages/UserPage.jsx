import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import calls from '../Hooks/calls';
import UserIcon from '../assets/UserIcon.png'; // Adjust the path as per your project structure

const UserPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getUserInfo = async () => {
      const data = await calls.getMe();
      setUserInfo(data);
    };

    getUserInfo();
  }, []);

  const handleLogout = () => {
    calls.logout();
    // Clearing localStorage should be done by the logout method itself, if applicable
    // localStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {userInfo ? (
        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoHeader}>
            <View style={styles.profilePhoto}>
              <Image source={UserIcon} style={styles.userIcon} />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{userInfo.firstName} {userInfo.lastName}</Text>
              <Text>Username: {userInfo.username}</Text>
            </View>
          </View>
          <View style={styles.logout}>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoWrapper: {
    flexDirection: 'column',
    backgroundColor: '#D9D9D9',
    height: '80%',
    width: '92%',
    marginVertical: '10%',
    paddingHorizontal: '4%',
    position: 'absolute',
    top: '5%',
  },
  userInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePhoto: {
    width: '35%',
  },
  userIcon: {
    width: '100%',
    height: 'auto',
  },
  userInfo: {
    width: '65%',
    textAlign: 'left',
  },
  userName: {
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  logout: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '5%',
  },
});

export default UserPage;
