/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react'
import { Avatar } from 'antd';
import Heading from '../../../../../components/form/heading/heading'
import Divider from '../../../../../components/ui/divider/divider'
import PersonalDetail from './personal-detail/personal-detail'
import CompanyDetail from './company-detail/company-detail'
import './profile.css'

class Profile extends Component {

    render() {
        if(this.props.profile.basic !== null && this.props.profile.basic !== undefined){
            const { profile } = this.props;
            return(
                <div>
                    <Heading heading={<Avatar size={64} icon="user" />}/>
                    <Divider/>
                    <section>
                        <h3><b>Basic Details</b></h3>
                        <div className="details">
                            <div>
                                <span className="types">Name:</span><span>{profile.basic.name}</span>
                            </div>
                            <div className="profile-row">
                                <div className="profile-column">
                                    <span className="types">Email:</span><span>{profile.basic.email}</span>
                                </div>
                                <div className="profile-column">
                                    <span className="types">Phone:</span><span>{profile.basic.phone}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Divider/>
                    <section>
                        <h3><b>Personal Details</b></h3>
                        <PersonalDetail personal={profile.uProfile}/>
                    </section>
                    <Divider/>
                    <section>
                        <h3><b>Company Details</b></h3>
                        <CompanyDetail profile={profile}/>
                    </section>
                    <Divider/>
                    <section>
                        <h3><b>Documents</b></h3>
                    </section>
                </div>
            )
        }else {
            return null
        }
    }
}

export default Profile