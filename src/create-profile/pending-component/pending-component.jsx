import React from 'react'
import Heading from '../../components/form/heading/heading'

const pendingComponent = (props) => {
    return(
        <div>
            <Heading heading="Verification process is ongoing..."/>
            <p style={{textAlign: "center"}}>
                You will get account activation mail in shortly.<br/>
                <span>We are sorry &#x2639; for the delay.</span>   
            </p>
        </div>
    )
}

export default pendingComponent