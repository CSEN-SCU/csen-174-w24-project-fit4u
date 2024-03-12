import React from 'react'
import '../Styles/landingpage.css'
import {Link} from 'react-router-dom'
const ViewExercises = () => {
    return ( 
        <div> 
            <div className = "landing-option-wrapper">
                <h2>View Plans</h2>
                <div className = "button-wrapper">
                   <Link to="/app/workout-plans"><button className='link-btn'>Plans</button></Link>  
            </div>
        </div>
        
    </div>
    )
}
export default ViewExercises
