/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'

const formControl = (props) => {
    return(
        <div className="form-control">
            {props.children}
        </div>
    )
}

export default formControl