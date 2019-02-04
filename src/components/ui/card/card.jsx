/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

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