/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react'
import { Layout } from 'antd'
import Modal from '../components/layout/modal/modal';
import Header from '../components/header/header';
import Heading from '../components/form/heading/heading'
import InputType from '../components/form/form-controls/input'
import Button from '../components/form/button/button'
import Form from '../components/form/form'
import login from '../services/apis/login'
import ForgotPassword from './forgot_password/forgot_password'
import {SetToken, GetToken} from '../helpers/token';
import * as actionType from '../store/actions/action-type';
import { connect } from 'react-redux'
import ErrorBox from '../components/form/error-box/error-box'
import {Redirect} from 'react-router-dom'
import Loader from '../components/ui/loader/loader'
const { Content, Footer } = Layout;

class Login extends Component{

    state = {
        visible: false,
        userName: '',
        password: '',
        url : this.props.redirectURL,
        errorMsg: '',
        showLoader: false
    }

    callback = (data) => {
        if(data.status === 200) {
            this.setState({showLoader: false, errorMsg: ''});
            SetToken(data.data.token, 5);
            this.props.basic(data.data.user);
            if(data.data.user.firstTime === false){
                this.props.history.push('/user/updatePassword');
            }else if((data.data.user.approval === 'pending' || data.data.user.approval === null) && data.data.user.firstTime === true){
                this.props.history.push('/user/profile');
            }else if(data.data.user.firstTime && data.data.user.approval === 'approved'){
                this.props.login();
                if(!this.state.url || this.state.url === '/'){
                    this.props.history.push('/dashboard');
                }else {
                    this.props.history.push(this.state.url);
                }
            }
        }else if(data.response){
            this.setState({showLoader: false});
            this.setState({errorMsg: "Please enter valid username or password"})
        }else {
            this.setState({showLoader: false});
            this.setState({errorMsg: "Something went wrong. Please try again latter!"})
        }
    }

    onFormSubmit =(e)=> {
        e.preventDefault()
        this.setState({showLoader: true, errorMsg:''});
        const data = {
            email: this.state.userName,
            password: this.state.password
        }; 
        if(this.state.userName && this.state.password){
        login(this.callback, data);
        }else{
            this.setState({errorMsg: "Please enter valid username or password"})
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    openModal = () => {
        this.setState({visible: true})
    }
    
    // close modal
    cancelClick = () => {
        this.setState({visible: false})
    }

    render(){
        if(this.props.isLoggedIn && this.props.isApproved === 'approved' && GetToken()){
            return <Redirect to={this.state.url} />
        }else {
            return(
                <Layout>
                    <Header/>
                    <Layout style={{marginTop: 64, height: '93vh'}} >
                        <Modal 
                            heading="Enter Your Registered Email."
                            showModal={this.state.visible}
                            cancelClick={this.cancelClick}
                            footer={null}
                        >
                            <ForgotPassword cancelClick={this.cancelClick}/>
                        </Modal>
                        <Content className="login">
                            <div className="login-box">
                                <Heading heading={<b>Sign In</b>}/>
                                <Form onSubmitHandler={this.onFormSubmit}>
                                    <InputType 
                                        type="text"
                                        value={this.state.userName}
                                        name="userName" 
                                        prefixType="user" 
                                        placeholder="Enter Username"
                                        onInputChange={this.onInputChange}
                                        isRequired={true}
                                        labelName="User Name"
                                    />
                                    <InputType 
                                        type="password"
                                        value={this.state.password}
                                        name="password" 
                                        prefixType="lock" 
                                        placeholder="Enter Password"
                                        onInputChange={this.onInputChange}
                                        isRequired={true}
                                        labelName="Password"
                                    />
                                    { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                                    { this.state.showLoader ? <Loader>Logging...</Loader> : null }
                                    <div className="login-button-group">
                                        <div className="login-group">
                                            <Button isType='primary' htmlTypes='submit' isBlock={true}>LOGIN</Button>
                                        </div>
                                        <div className="login-group">
                                            <Button isType='danger' isBlock={true} onClick={this.openModal}>FORGOT PASSWORD</Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center',marginBottom: 64 }}>
                            Copyright © 2018. Ethereal Machines Pvt Ltd. All rights reserved.
                        </Footer>
                    </Layout>
                </Layout>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.Login.isLogedIn,
        isApproved: state.Basic.basic.approval,
        redirectURL: state.Login.redirect
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch({
                type: actionType.LOGIN
            })
        },
        basic: (data) => {
            dispatch({
                type: actionType.USER_BASIC,
                value: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)