import { OAuth2Client, useGoogleLogin } from 'google-auth-library'
import {router} from 'axios'


export const googleLogin = useGoogleLogin({
  onSuccess: async ({ code }) => {
    const tokens = await axios.post('http://localhost:8000/api/auth/login/google', {  // http://localhost:3001/auth/google backend that will exchange the code
      code,
    });

    console.log(tokens);
  },
  flow: 'auth-code',
});


// ...
const userProfile = googleClient.verifyIdToken({
    idToken: req.body.credentials,
    audience: req.body.clientId,
  })