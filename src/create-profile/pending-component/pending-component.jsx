/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

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