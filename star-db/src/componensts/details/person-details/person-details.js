import React from 'react'
import '../css/details.css'

const PersonDetails = () => {

    return (
        <div className = 'details'>
            <div className = 'box'></div>
            <div>
                <h3>R2-D2</h3>
                <ul>
                    <li>Gender male</li>
                    <li>Birth year 43</li>
                    <li>Eye color red</li>
                </ul>
            </div>
        </div>
    )
}

export default PersonDetails;