import React from 'react'
import './card.css'

const card = (props) => {
    return(
        <div className="card">
            <div className="card-container">
                {props.children}  
            </div>
        </div>
    )
}

export default card