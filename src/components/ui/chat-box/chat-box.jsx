/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'

const chatBox = (props) => {
    return(
        <div className={props.classValue }>
            {props.children}
        </div>
    )
}

export default chatBox