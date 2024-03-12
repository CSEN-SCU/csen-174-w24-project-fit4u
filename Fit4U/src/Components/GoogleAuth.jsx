import React from "react";
import { Google } from 'expo-auth-session/providers/google';

const GoogleAuth = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '155154544257-ieimep868tope5r3kbamv194q33d22uh.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log(id_token);
      // Handle successful login
    }
  }, [response]);

  return (
    <div>
      <button onPress={() => promptAsync()}>Login with Google</button>
    </div>
  );
};

export default GoogleAuth;
