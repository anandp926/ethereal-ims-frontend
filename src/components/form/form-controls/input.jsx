/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'
import { Input, Icon } from 'antd';
import FormControl from './form-control'

const inputType =(props)=> {
    return(
        <FormControl>
            <label htmlFor={props.name}>
                {props.labelName}
                {props.isRequired ? <span className="star">*</span> : null}
            </label>
            <Input
                type={props.type}
                className={props.classValue}
                placeholder={props.placeholder}
                prefix={props.prefixType ? <Icon type={props.prefixType} style={{ color: 'rgba(0,0,0,.25)' }} /> : null}
                name={props.name}
                value={props.value}
                onChange={props.onInputChange}
                required={props.isRequired ? props.isRequired : false}
                size='large'
                readOnly={props.isReadonly ? props.isReadonly : false}
            />
        </FormControl>
        
    )
}

export default inputType
