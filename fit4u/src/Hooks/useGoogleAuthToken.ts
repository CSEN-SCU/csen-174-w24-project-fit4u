import { useMutation } from "react-query"; // Import from correct location
import * as Google from 'expo-auth-session/providers/google'; // Import Google authentication from Expo
import { getGoogleAuthToken, OAuthCredential } from "../api/oauth"; // Update import path
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for token storage

const useGoogleAuthToken = () =>
  useMutation(async (credential: OAuthCredential) => {
    try {
      const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      });

      // Handle response and fetch token from your API server

      if (response?.type === 'success') {
        // Token received, send it to your server
        const token = response.params.id_token;
        const apiResponse = await getGoogleAuthToken({ ...credential, token });

        // Store token locally in AsyncStorage
        //name the token
        await AsyncStorage.setItem(TOKEN_KEY, token);
        
        return apiResponse;
      } else {
        throw new Error('Google authentication failed');
      }
    } catch (error) {
      throw new Error("Failed to fetch Google auth token");
    }
  });

export default useGoogleAuthToken;
