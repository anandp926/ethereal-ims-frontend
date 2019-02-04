/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

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