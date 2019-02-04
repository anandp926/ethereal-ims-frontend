/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'
import'./card-heading.css'

const cardHeading = (props) => {
    return(
        <div className={props.classValue ? props.classValue : "card-heading"}>
            <h4><b>{props.title}</b></h4> 
            <div>
                {props.subtitle}
            </div>
        </div>
    )
}

export default cardHeading