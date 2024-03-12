import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useOutlet, useNavigate } from 'react-router';
import { useSearchParams, useLocation } from 'react-router-dom';

// Assuming Expo AuthSession is used for Google authentication
import * as Google from 'expo-auth-session/providers/google';

import useGoogleAuthLink from '../hooks/useGoogleAuthLink';
import useGoogleAuthToken from '../hooks/useGoogleAuthToken';
import useProfile from '../hooks/useProfile';

const AuthPage = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('token')) {
      localStorage.setItem('token', searchParams.get('token'));
    }
  }, [searchParams]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      if (location.pathname !== '/') navigate(location.pathname);
      else navigate('/app');
    } else {
      navigate('/login');
    }
  }, [location.pathname]);

  const { data: profile, refetch: fetchProfile } = useProfile();
  const { data: googleAuth, refetch: fetchGoogleAuth } = useGoogleAuthLink();
  const { mutate, isSuccess } = useGoogleAuthToken();

  useEffect(() => {
    if (googleAuth) {
      window.location.replace(googleAuth.authorizationUrl);
    }
  }, [googleAuth]);

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);

    const code = searchParams.get('code');
    const state = searchParams.get('state');

    if (code && state) {
      mutate({ code, state });
    }
  }, [mutate]);

  useEffect(() => {
    if (isSuccess) {
      console.log('Success!');
      fetchProfile();
    }
  }, [isSuccess, fetchProfile]);

  const handleGoogleLogin = () => {
    fetchGoogleAuth();
  };

  return <View>{outlet}</View>;
};

export default AuthPage;
