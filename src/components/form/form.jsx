import React from 'react'

const forms = (props) => {
    return(
        <form onSubmit={props.onSubmitHandler}>
            {props.children}
        </form>
    )
}

export default forms