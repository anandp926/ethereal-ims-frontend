/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

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