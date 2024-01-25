import React from 'react'
import {useState} from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import {useCallback} from 'react'
import { oauthSignIn } from './GoogleAuth';

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')

  /*
  const onGoogleLoginSuccess = useCallback(
    response => {
      const idToken = response.tokenId;
      const data = {
        email: response.profileObj.email,
        first_name: response.profileObj.givenName,
        last_name: response.profileObj.familyName
      };
      validateTokenAndObtainSession({ data, idToken })
        .then(handleUserInit)
        .catch(notifyError);
       
    },
    [handleUserInit]
  );

  <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}  // your Google app client ID
          buttonText="Sign in with Google"
          onSuccess={onGoogleLoginSuccess} // perform your user logic here
          onFailure={onGoogleLoginFailure} // handle errors here
        />
  
  */

  
  return (
    <div>
      <div className='google'>
        
        
      </div>
      <button onClick={() => oauthSignIn()}>Google</button>
      <p>OR</p>
      <div className='login-form'>
        <label>Email:

          <input type="text" onChange={(e)=> setEmail(e.target.value)}></input>
        </label>
        <br></br>
        <label>Password:

          <input type="password" onChange={(e)=> setPassword(e.target.value)}></input>
        </label>
        <br></br>
        <button >Login</button>
      </div>

    </div>
  )
}

export default LoginForm
