import React from 'react'
import { Input, Icon } from 'antd';
import FormControl from './form-control'

const inputType =(props)=> {
    return(
        <FormControl>
            <Input
                type={props.type}
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
