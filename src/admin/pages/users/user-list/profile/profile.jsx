import React, { Component } from 'react'
import { Avatar } from 'antd';
import Heading from '../../../../../components/form/heading/heading'
import Divider from '../../../../../components/ui/divider/divider'
import {profile} from '../data'
import './profile.css'

class Profile extends Component {

    render() {
        // console.log(Object.values(userProfile))
        const a = profile(this.props.id).then((data) => console.log(data))
        console.log(this.props.id)
        return(
            <div>
                <Heading heading={<Avatar size={64} icon="user" />}/>
                <Divider/>
                <section>
                    <h3><b>Basic Details</b></h3>
                    <div className="details">
                        <div>
                            <span className="types">Name:</span><span>Anand Singh</span>
                        </div>
                        <div className="profile-row">
                            <div className="profile-column">
                                <span className="types">Email:</span><span>sanand926@gmail.com</span>
                            </div>
                            <div className="profile-column">
                                <span className="types">Phone:</span><span>9041259277</span>
                            </div>
                        </div>
                    </div>
                </section>
                <Divider/>
                <section>
                    <h3><b>Personal Details</b></h3>
                    <div className="details">
                        <div className="profile-row">
                            <div className="profile-column"><span className="types">DOB:</span><span>2018-11-05</span></div>
                            <div className="profile-column"><span className="types">Nationality:</span><span>Algerian</span></div>
                            <div className="profile-column"><span className="types">PAN Number:</span><span>sdvfnrset5</span></div>
                            <div className="profile-column"><span className="types">Present Occupatoin:</span><span>Designer</span></div>
                        </div>
                        <div className="address-type">Address:-</div>
                        <div className="profile-row">
                            <div className="profile-column"><span className="types">Street:</span><span>Nest PG, Queens road</span></div>
                            <div className="profile-column"><span className="types">City:</span><span>Bangaluru</span></div>
                            <div className="profile-column"><span className="types">ZIP:</span><span>560052</span></div>
                            <div className="profile-column"><span className="types">State:</span><span>Karnataka</span></div>
                        </div>
                    </div>
                </section>
                <Divider/>
                <section>
                    <h3><b>Company Details</b></h3>
                    <div className="profile-row">
                        <div className="profile-column"><span className="types">Company Name:</span><span>Apna Company</span></div>
                        <div className="profile-column"><span className="types">Location:</span><span>Bengaluru India</span></div>
                        <div className="profile-column"><span className="types">Type of Company:</span><span>pvt ltd</span></div>
                    </div>
                </section>
                <Divider/>
                <section>
                    <h3><b>Documents</b></h3>
                </section>
            </div>
        )
    }
}

export default Profile