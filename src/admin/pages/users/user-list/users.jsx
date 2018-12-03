import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Drawer } from 'antd';
import Approved from './approved/approved'
import NewUsers from './new-users/new-users'
import Pending from './pending/pending'
import Profile from './profile/profile'
import {auth} from './data'
import './users.css'
//api
import * as actionType from '../../../../store/actions/action-type'
import { GetToken } from '../../../../helpers/token'
import getUsers from '../../../../services/apis/get-users'

class Users extends Component {

    state = {
        visible: false,
        id: ''
    }

    // callback = (data) => {
    //     if (data.status === 200) {
    //         this.props.getAllUsers(data.data)
    //     } else {
    //         console.log(data.response)
    //     }
    // }

    // componentDidMount() {
    //     const token = GetToken();
    //     if (token) {
    //         getUsers(this.callback, token);
    //     }
    // }

    openDrawer = (bool, id) => {
        this.setState({
            visible: bool,
            id: id
        });
    }

    onClose = () => {
        this.setState({
          visible: false,
          id: ''
        });
    };

    render() {
        return(
            <div className="users-container">
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                <Profile id={this.state.id} />
                </Drawer>
                {
                    // this.props.users !== null && this.props.users !== undefined && (
                        auth !== null && auth !== undefined && (
                        <div className="table-list">
                            <NewUsers users={auth} openDrawer={this.openDrawer} classValue="table"/>
                            <Pending users={auth} openDrawer={this.openDrawer} classValue="table"/>
                            <Approved users={auth} openDrawer={this.openDrawer} classValue="table"/>
                        </div>
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.Users.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: (data) => {
            dispatch({
                type: actionType.USERS,
                value: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)