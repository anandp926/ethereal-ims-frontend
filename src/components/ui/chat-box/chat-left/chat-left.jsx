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