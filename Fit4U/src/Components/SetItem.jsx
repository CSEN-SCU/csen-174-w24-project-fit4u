import React, { useState,useEffect } from 'react'


function SetItem( {setnumber} ) {
    const [repnumber, setRepNumber] = useState(0);
    const [volnumber, setVolNumber] = useState(0);


    return 
    (
        <div>
            <div>Set: {setnumber} </div>
            <div> <input type="number" className="repnumber" onChange={(e) => setRepNumber(e.target.value)}/> </div>
            <div> <input type="number" className="volnumber" onChange={(e) => setVolNumber(e.target.value)}/> </div>
        </div>
    )
}

export default SetItem;