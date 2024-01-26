import React from 'react'
import {useState} from 'react'
import GoogleAuth from './GoogleAuth'
import {useCallback} from 'react'

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')

  
  return (
    <div>
      <div className='google'>
        <GoogleAuth />
        
      </div>
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
