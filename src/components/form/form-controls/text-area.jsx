import React from 'react'
import { Input } from 'antd';
import FormControl from '../form-controls/form-control'

const { TextArea } = Input;

const inputTextArea = (props) => {
    return(
        <FormControl>
            <TextArea 
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onInputChange}
                size='large'
                autosize={{minRows:props.minRows ? props.minRows : 6}}
            />
        </FormControl>
    )
}

export default inputTextArea