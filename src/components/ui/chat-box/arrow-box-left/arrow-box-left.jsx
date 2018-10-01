import React from 'react'
import './arrow-box-left.css'

const arrowBoxLeft = (props) => {
    return(
        <div className="arrow_box_left">
            {props.children}
        </div>
    )
}

export default arrowBoxLeft