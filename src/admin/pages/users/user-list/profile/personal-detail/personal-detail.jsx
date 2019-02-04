/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'
import Heading from '../../../../../../components/form/heading/heading'

const personalDetail = (props) => {
    if(props.personal) {
        return(
            <div className="details">
                <div className="profile-row">
                    <div className="profile-column"><span className="types">DOB:</span><span>{props.personal.dob}</span></div>
                    <div className="profile-column"><span className="types">Nationality:</span><span>{props.personal.nationality}</span></div>
                    <div className="profile-column"><span className="types">PAN Number:</span>
                        <span>{props.personal.panNumber ? props.personal.panNumber : null}</span>
                    </div>
                    <div className="profile-column"><span className="types">Present Occupatoin:</span>
                        <span>{props.personal.presentOccupatoin}</span>
                    </div>
                </div>
                <div className="address-type">Address:-</div>
                <div className="profile-row">
                    <div className="profile-column"><span className="types">Street:</span>
                        <span>{props.personal.address.street}</span>
                    </div>
                    <div className="profile-column"><span className="types">City:</span>
                        <span>{props.personal.address.city}</span>
                    </div>
                    <div className="profile-column"><span className="types">ZIP:</span>
                        <span>{props.personal.address.zip}</span>
                    </div>
                    <div className="profile-column"><span className="types">State:</span>
                        <span>{props.personal.address.state}</span>
                    </div>
                </div>
            </div>
        )
    }else {
        return <Heading heading={<b>Not Filled Yet</b>}/>
    }    
}

export default personalDetail