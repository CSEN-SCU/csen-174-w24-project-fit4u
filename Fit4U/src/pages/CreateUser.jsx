import React from 'react'
import CreateUserForm from '../Components/CreateUserForm'

const CreateUser = () => {
 
    return(
        <div className='create-wrapper'>
            <div className='strong'>
                
            <input type = "text" class="mytext" placeholder='Email'/>
                    
               
            </div>
            <div className='strong'>
            <input type = "text" class="mytext" placeholder='Password'/>
            </div>
            <div className='strong'>
            <input type = "text" class="mytext" placeholder='Confirm Password'/>
            </div>
            <div className='SIGNUP'>
              <h2>
                    <button type="button">
                       SIGN UP
                    </button>
                </h2>
            </div>
            
            <CreateUserForm />
        </div>
        
    )
}

export default CreateUser