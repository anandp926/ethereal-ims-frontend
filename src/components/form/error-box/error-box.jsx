import React from 'react';
import FormControl from '../form-controls/form-control'
import './error-box.css';

  function errorBox(props){  
    return (
        <FormControl>
            <div className="error-box">
                Warning:&nbsp;{props.errorMsgs}
            </div>
        </FormControl>
        
    );
  }


export default errorBox;