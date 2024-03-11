import React from 'react'
import ForgotPasswordForm from '../Components/ForgotPasswordForm'
import { Link } from "react-router-dom";

const ForgotPassword = () => {
 
    return(
        <div className='create-wrapper'>
          
               <h5>
                    ENTER YOUR EMAIL ADDRESS FOR THE LINK TO RESET PASSWORD
                </h5>
                <div className='strong'>
                
            <input type = "text" class="mytext" placeholder='Email'/>
                    
               
            </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className='RP'>
                    <button type="buttonRED">
                        <h1>CONTINUE</h1>
                    </button>
                </div>
            
                <div className='newuser'>
                    <h3>New User? 
                        <Link to='/createuser'><h4>SIGN UP!</h4></Link>
                    </h3>
                    
                </div>

            <ForgotPasswordForm />
        </div>
        
    )
}

export default ForgotPassword