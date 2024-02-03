import React from 'react'
import '../Styles/landingpage.css'
import { Navigate } from "react-router-dom";


const CreateWorkout = () => {
    const [goToNewWorkout, setgoToNewWorkout] = React.useState(false);

    if(goToNewWorkout) {
        return <Navigate to="/app/newworkout"/>
    }
    return (
        <div> 
            <div className = "landing-option-wrapper">
                <h2>Create a new workout</h2>
                <div className = "button-wrapper">
                    <button
                    onClick={() => {
                        setgoToNewWorkout(true);
                    }}
                    >New Workout</button>  
                </div>
            </div>
            
        </div>
    )
}
export default CreateWorkout