/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'
import { DatePicker } from 'antd';
import FormControl from './form-control'

const datePicker =(props)=> {
    return(
        <FormControl>
            <label htmlFor={props.name}>
                {props.labelName}
                {props.isRequired ? <span className="star">*</span> : null}
                &nbsp;
            </label>
            <DatePicker
                className={props.classValue}
                placeholder={props.placeholder}
                format="YYYY-MM-DD"
                disabledDate={props.disabledDate}
                onChange={props.onDateChange}
                size='large'
                required={props.isRequired ? props.isRequired : false}
            />
        </FormControl>
        
    )
}

export default datePicker