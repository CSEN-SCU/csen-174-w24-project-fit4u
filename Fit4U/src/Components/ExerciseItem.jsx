import React, { useState,useEffect } from 'react'
import SetItem from "./SetItem.jsx"


export default function ExerciseItem({ exercise }) {
    const [counter, setCounter] = useState(0);
    const n = counter; 
    const handleClick = () => {
        setCounter(counter + 1);
    };
    

    const generateSet = () => {
        if(counter){
            return( [...Array(n)].map((i) => 
              <div className="popup_field">
                    <SetItem setnumber={i}/>
              </div>
                )
            )
        }
    };
        return (
            <div className="gray-table">
                <p>{exercise.name}</p>
                <p>Reps</p>
                <p>Vol</p>
                <button onClick={() => handleClick()}>+</button>
                {generateSet()}
            </div>
        )
}