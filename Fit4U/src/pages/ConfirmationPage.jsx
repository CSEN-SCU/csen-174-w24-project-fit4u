import React from 'react'
import ConfirmationPageForm from '../Components/ConfirmationPageForm'
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
 
    return(
        <div className='create-wrapper'>
          
               <h5>
                    THE LINK WITH INSTRUCTIONS TO RESET YOUR PASSWORD HAS BEEN SENT TO YOUR EMAIL
                </h5>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            
                <div className='newuser'>
                    <h3>New User? 
                        <Link to='/createuser'><h4>SIGN UP!</h4></Link>
                    </h3>
                    
                </div>

            <ConfirmationPageForm />
        </div>
        
    )
}

export default ConfirmationPage