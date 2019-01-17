import React from 'react'
import { Select } from 'antd';
import FormControl from './form-control'

const select =(props)=> {
    return(
        <FormControl>
            <label htmlFor={props.name}>
                {props.labelName}
                {props.isRequired ? <span className="star">*</span> : null}
                &nbsp;
            </label>
            <Select
                showSearch
                className={props.classValue}
                placeholder={props.placeholder}
                optionFilterProp="children"
                onChange={props.onSelect}
                size="large"
                required={props.isRequired ? props.isRequired : false}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                {...props}
            >
                {props.children}
            </Select>
        </FormControl>
        
    )
}

export default select