import React from 'react'
import UserImage from '../user-image/user-image'
import ArrowBoxLeft from '../arrow-box-left/arrow-box-left'

const chatRight = (props) => {
    return(
        <div className="chat-right">
            <UserImage {...props}/>
            <ArrowBoxLeft>
                {props.message}
            </ArrowBoxLeft>
        </div>
    )
}

export default chatRight