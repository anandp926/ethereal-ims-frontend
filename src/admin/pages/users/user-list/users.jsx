import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Drawer,Modal } from 'antd';
import Approved from './approved/approved'
import NewUsers from './new-users/new-users'
import Pending from './pending/pending'
import Profile from './profile/profile'
import './users.css'
//api
import * as actionType from '../../../../store/actions/action-type'
import { GetToken } from '../../../../helpers/token'
import getUsers from '../../../../services/apis/get-users'
import getUserProfile from '../../../../services/apis/get-user-detail'
import userApproval from '../.../../../../../services/apis/approve-user'

class Users extends Component {

    state = {
        visible: false,
        token: GetToken()
    }

    success = () => {
        Modal.success({
            title: 'Successful',
            content: 'User has been approved :).',
        });
    }

    callback = (data) => {
        if (data.status === 200) {
            this.props.getAllUsers(data.data)
        } else {
            console.log(data.response)
        }
    }

    componentDidMount() {
        const {token} = this.state;
        getUsers(this.callback, token);
    }

    profileCallback = (data) => {
        if(data.status === 200){
            this.props.dispatchProfile(data.data);
            this.setState({visible: true});
        }else{
            console.log(data.response)
            // this.setState({showLoader: false})
        }
    }

    openDrawer = (id) => {
        getUserProfile(this.profileCallback, id, this.state.token)
    }

    approvalCallback = (data) => {
        if(data.status === 200){
            this.props.dispatchApproval(data.data)
            this.success();
        }else {
            console.log(data.response);
        }
    }

    approveUser = (id) => {
        userApproval(this.approvalCallback, id, this.state.token);
    }

    onClose = () => {
        this.setState({
          visible: false
        });
    };

    render() {
        return(
            <div className="users-container">
                <Drawer
                    width={640}
                    placement="right"
                    maskClosable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                <Profile profile={this.props.profile}/>
                </Drawer>
                {
                    this.props.users !== null && this.props.users !== undefined && (
                        <div className="table-list">
                            <NewUsers users={this.props.users} openDrawer={this.openDrawer} classValue="table"/>
                            <Pending users={this.props.users} openDrawer={this.openDrawer} approveUser={this.approveUser} classValue="table"/>
                            <Approved users={this.props.users} openDrawer={this.openDrawer} classValue="table"/>
                        </div>
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.Users.users,
        profile: state.Users.profile
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: (data) => {
            dispatch({
                type: actionType.USERS,
                value: data
            })
        },
        dispatchProfile: (data) => {
            dispatch({
                type: actionType.USER_PROFILE,
                value: data
            })
        },
        dispatchApproval: (data) => {
            dispatch({
                type: actionType.APPROVE_USER,
                value: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)