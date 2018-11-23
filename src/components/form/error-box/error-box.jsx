import React from 'react';
import FormControl from '../form-controls/form-control'
import './error-box.css';

  function errorBox(props){  
    return (
        <FormControl>
            <div className="error-box">
                Warning:&nbsp;{props.errorMsgs}&nbsp;{props.children}
            </div>
        </FormControl>
        
    );
  }


export default errorBox;