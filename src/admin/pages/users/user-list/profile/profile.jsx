import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Avatar } from 'antd';
import Heading from '../../../../../components/form/heading/heading'
import Divider from '../../../../../components/ui/divider/divider'
import Loader from '../../../../../components/ui/loader/loader'
// api
import {GetToken} from '../../../../../helpers/token';
import getUserProfile from '../../../../../services/apis/get-user-detail';
import * as actionType from '../../../../../store/actions/action-type'
import './profile.css'

class Profile extends Component {

    state = {
        showLoader: false
    }

    callback = (data) => {
        if(data.status === 200){
            this.props.dispatchProfile(data.data);
            console.log(data.data)
            this.setState({showLoader: false});
        }else{
            console.log(data.response)
            this.setState({showLoader: false})
        }
    }

    componentDidMount(){
        this.setState({showLoader: true});
        const token = GetToken();
        if(this.props.id && token) {
            console.log(token)
            getUserProfile(this.callback, this.props.id, token);
        }
    }

    render() {
        if(this.props.profile.basic !== null && this.props.profile.basic !== undefined){
            const { profile } = this.props;
            console.log(this.props.id)
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
                            <div className="profile-column"><span className="types">Company Name:</span><span>{profile.company.name}</span></div>
                            <div className="profile-column"><span className="types">Location:</span><span>{profile.company.location}</span></div>
                            <div className="profile-column"><span className="types">Type of Company:</span><span>pvt ltd</span></div>
                        </div>
                    </section>
                    <Divider/>
                    <section>
                        <h3><b>Documents</b></h3>
                    </section>
                </div>
            )
        }else {
            return <Loader/>
        }
    }
}

function mapStateToProps(state) {
    return{
        profile: state.Users.profile
    }
}

function mapDispatchToProps(dispatch) {
    return{
        dispatchProfile: (data) => {
            dispatch({
                type: actionType.USER_PROFILE,
                value: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)