import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../Components/LoginForm';
import useProfile from '../hooks/useProfile';

const LoginPage = () => {
  const { data: profile, refetch: fetchProfile } = useProfile();

  useEffect(() => {
    fetchProfile(); // Fetching profile data
  }, []); // Empty dependency array means this effect runs only once, equivalent to componentDidMount

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        {profile ? (
          <Text>Hello {profile.email}!</Text>
        ) : (
          <LoginForm fetchProfile={fetchProfile} />
        )}
      </View>
    </View>
  );
};

export default LoginPage;
