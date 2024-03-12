import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Google } from 'expo-auth-session/providers/google';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickGoogleLogin = async () => {
    //what...
    const REDIRECT_URI = 'http://localhost:8000/api/auth/login/google/';
    
    const { type, params } = await Google.useIdTokenAuthRequest({
      clientId: '155154544257-ieimep868tope5r3kbamv194q33d22uh.apps.googleusercontent.com',
      redirectUri: REDIRECT_URI,
      prompt: Google.Prompt.SelectAccount,
      responseType: Google.ResponseType.Code,
      scopes: ['email', 'profile'],
    });

    if (type === 'success') {
      // Handle successful authentication
      const { code } = params;
      console.log('Authentication successful. Authorization code:', code);
    } else {
      // Handle other authentication types or errors
      console.log('Authentication failed.');
    }
  };

  return (
    <View>
      <View style={styles.loginForm}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Login" onPress={() => console.log('Login button pressed')} />
      </View>
      <Text>OR</Text>
      <View style={styles.google}>
        <Button title="Login with Google" onPress={onClickGoogleLogin} />
      </View>
    </View>
  );
};

const styles = {
  loginForm: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  google: {
    marginTop: 20,
  },
};

export default LoginForm;
