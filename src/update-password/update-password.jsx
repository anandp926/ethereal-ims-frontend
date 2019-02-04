/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {Layout} from 'antd'
import Header from '../components/header/header'
import Heading from '../components/form/heading/heading'
import InputType from '../components/form/form-controls/input'
import Button from '../components/form/button/button'
import Form from '../components/form/form'
//api
import updatePassword from '../services/apis/update-password';
import * as actionType from '../store/actions/action-type'
import {GetToken} from '../helpers/token'

const { Content, Footer } = Layout;

class UpdatePassword extends Component {

    state = {
        password: '',
        reTypePassword: '',
        err: ''
    }

    callback = (data) => {
        if(data.status === 200){
            this.props.firstTime(data.data);
            this.setState({err: ''});
            this.props.history.push('/user/profile');
        }else if(data.response){
            console.log(data.response);
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const {password, reTypePassword} = this.state;
        const token = GetToken();
        if(password === reTypePassword) {
            if(token){
            updatePassword(this.callback, this.props.basic._id, {password: password}, token);
            }else{
                console.log('Token is missing');
            }
        }else {
            this.setState({err: 'Password not matched'});
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        if(this.props.basic.length === 0){
            return <Redirect to="/" />
        }else{
            return(
                <Layout>
                    <Header/>
                    <Layout style={{marginTop: 64, height: '100vh'}}>
                        <Content className="login">
                            <div className="login-box">
                                <Heading heading={<b>Update Password</b>}/>
                                <Form onSubmitHandler={this.onFormSubmit}>
                                    <InputType 
                                        type="password"
                                        value={this.state.password}
                                        name="password" 
                                        prefixType="lock" 
                                        placeholder="Enter New Password"
                                        onInputChange={this.onInputChange}
                                        isRequired={true}
                                        labelName="New Password"
                                    />
                                    <InputType 
                                        type="text"
                                        value={this.state.reTypePassword}
                                        name="reTypePassword" 
                                        prefixType="lock" 
                                        placeholder="Retype Password"
                                        onInputChange={this.onInputChange}
                                        isRequired={true}
                                        labelName="Retype Password"
                                    />
                                    {this.state.err}
                                    <Button isType='primary' htmlTypes='submit' isBlock={true}>UPDATE</Button>
                                </Form>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center', marginBottom: 64}}>
                            Copyright © 2018. Ethereal Machines Pvt Ltd. All rights reserved.
                        </Footer>
                    </Layout>
                </Layout>
            )
        }
        
    }
}

function mapStateToProps(state) {
    return {
        basic: state.Basic.basic
    }
}

function mapDispatchToProps(dispatch) {
    return {
        firstTime: (data) => {
            dispatch({
                type: actionType.FIRST_TIME,
                value: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword)