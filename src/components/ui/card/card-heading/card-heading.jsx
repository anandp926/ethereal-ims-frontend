import React from 'react'
import'./card-heading.css'

const cardHeading = (props) => {
    return(
        <div className="card-heading">
            <h4><b>{props.title}</b></h4> 
            <div>
                {props.subtitle}
            </div>
        </div>
    )
}

export default cardHeading