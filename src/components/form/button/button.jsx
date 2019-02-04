/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

 import React from 'react'
import { Button } from 'antd'

const btn = (props) => {
    return(
        <Button 
            htmlType={props.htmlTypes} 
            block={props.isBlock ? true : false}
            size={props.isSize ? props.isSize : 'large'}
            type={props.isType ? props.isType : 'default'}
            disabled={props.isDisabled ? props.isDisabled : false}
            shape={props.shape}
            className={props.classValue}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}

export default btn