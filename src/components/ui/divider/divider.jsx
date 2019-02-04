/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'
import { Divider } from 'antd';
import './divider.css'
// orientation	position of title inside divider	enum: left right center	"default: center"

// type	direction type of divider	enum: horizontal vertical	"default: horizontal"


const divider = (props) => {
    return(
        <Divider 
            className={props.classValue ? props.classValue : 'divider'} 
            dashed={props.isDashed} 
            type={props.isType}
            orientation={props.isOrientation}
        />
    )
}

export default divider