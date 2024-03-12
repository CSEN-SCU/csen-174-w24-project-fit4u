import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import axios from 'axios';

// Your client ID for Google OAuth
const clientId = 'YOUR_CLIENT_ID';

export const googleLogin = async() => {
    try {
        const { type, params } = await Google.authAsync({
            clientId,
            scopes: ['profile', 'email'], // Add scopes as needed
        });

        if (type === 'success') {
            const { code } = params;
            const tokens = await axios.post('http://localhost:8000/api/auth/login/google', {
                code,
            });

            console.log(tokens);
        } else {
            console.log('Google login canceled or failed.');
        }
    } catch (error) {
        console.error('Error occurred during Google login:', error);
    }
};

// Include the userProfile function within a component where you handle requests
const userProfile = async(credentials, clientId) => {
    try {
        const response = await axios.post('VERIFY_ID_TOKEN_ENDPOINT', {
            idToken: credentials,
            audience: clientId,
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error occurred during profile verification:', error);
    }
};

// Example usage of userProfile function
useEffect(() => {
    userProfile('YOUR_ID_TOKEN', 'YOUR_CLIENT_ID');
}, []);