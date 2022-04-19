import React from 'react'

export default function ToggleBar({onChange}) {
    return (
        <div className="toggleBar">
            <h1>Our pricing</h1>
            <div className="toggleBar_timeSet">
                <p>Anually</p>
                <input type="checkbox" id="toggle" onChange={onChange}/>
                <label htmlFor="toggle"/>
                <p>Monthly</p>    
            </div>
        </div>
    )
}
