import React from 'react'
import '../css/details.css'

const StarshipDetails = () => {

    return (
        <div className = 'details'>
            <div className = 'box'></div>
            <div>
                <h3>Planet Name</h3>
                <ul>
                    <li>Population 123124</li>
                    <li>Rotation Period 43</li>
                    <li>Diameter 100</li>
                </ul>
            </div>
        </div>
    )
}

export default StarshipDetails;