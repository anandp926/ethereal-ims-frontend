import React from 'react';

const companyDetail = (props) => {
    return(
        <div className="profile-row">
            <div className="profile-column"><span className="types">Company Name:</span><span>{props.profile.company.name}</span></div>
            <div className="profile-column"><span className="types">Location:</span><span>{props.profile.company.location}</span></div>
            <div className="profile-column"><span className="types">Type of Company:</span>
                <span>{props.profile.uProfile ? props.profile.uProfile.typeOfCompany : null}</span>
            </div>
            <div className="profile-column"><span className="types">Annual Income:</span>
                <span>{props.profile.uProfile ? props.profile.uProfile.annualIncome : null}</span>
            </div>
        </div>
    )
}

export default companyDetail