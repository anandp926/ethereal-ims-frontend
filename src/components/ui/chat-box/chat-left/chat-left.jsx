/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'
import UserImage from '../user-image/user-image'
import ArrowBoxRight from '../arrow-box-right/arrow-box-right'

const chatLeft = (props) => {
    return(
        <div className="chat-left">
            <ArrowBoxRight>
                {props.message}
            </ArrowBoxRight>
            <UserImage {...props}/>
        </div>
    )
}

export default chatLeft