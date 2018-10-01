import React from 'react'

const chatBox = (props) => {
    return(
        <div className={props.classValue }>
            {props.children}
        </div>
    )
}

export default chatBox