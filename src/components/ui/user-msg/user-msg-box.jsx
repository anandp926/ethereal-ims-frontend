import React from 'react'
import './user-msg-box.css'

const userMsgBox = (props) => {
    return(
        <div className="user-msg-box">
            <div className="user-name">
                <h4><b>{props.title}</b></h4>
                <p>{props.subtitle}</p>
            </div>
            <div className="msg-box">
                {props.content}
            </div>
        </div>
    )
}

export default userMsgBox