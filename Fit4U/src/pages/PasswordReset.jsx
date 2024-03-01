import React from 'react'
import PasswordResetForm from '../Components/PasswordResetForm'
import { Link } from "react-router-dom";

const PasswordReset = () => {
    return(
        <div className = 'create-wrapper'>
             <div className='textbox'>
                
                <input type = "text" class="mytext" placeholder='New Password'/>
                        
                   
                </div>
                <div className='textbox'>
                <input type = "text" class="mytext" placeholder='Confirm Password'/>
                </div>
                <div className='RP'>
                    <button type="buttonRED">
                        <h1>RESET PASSWORD</h1>
                    </button>
                </div>

                <div className='newuser'>
                    <h3>New User? 
                        <Link to='/createuser'><h4>SIGN UP!</h4></Link>
                    </h3>
                    
                </div>
                
                <PasswordResetForm />
        </div>
    )
}
export default PasswordReset