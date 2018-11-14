import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../components/header/header';
import InputType from '../components/form/form-controls/input'
import Button from '../components/form/button/button'
import Form from '../components/form/form'
import login from '../services/apis/login'
import {SetToken, GetToken} from '../helpers/token'
import * as actionType from '../store/actions/action-type';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
const { Content, Footer } = Layout;

class Login extends Component{

    state = {
        userName: '',
        password: '',
        url : ''
    }

    componentDidMount(){
        this.setState({
            url: this.props.redirectURL
        });
    }

    callback = (data) => {
        if(data.status === 200) {
            SetToken(data.data.token, 5);
            this.props.basic(data.data.user);
            if(data.data.user.firstTime === false){
                this.props.history.push('/user/updatePassword');
            }else if(data.data.user.approved === false && data.data.user.firstTime === true){
                this.props.history.push('/user/profile');
            }else if(data.data.user.firstTime && data.data.user.approved){
                this.props.login();
                if(!this.state.url || this.state.url === '/'){
                    this.props.history.push('/dashboard');
                }else {
                    this.props.history.push(this.state.url);
                }
            }
        }else {
            console.log(data.response)
        } 
    }

    onFormSubmit =(e)=> {
        e.preventDefault()
        const data = {
            email: this.state.userName,
            password: this.state.password
        }; 
        if(data){
        login(this.callback, data);
        }else{
            alert('no data')
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        if(this.props.isLoggedIn){
            return <Redirect to='/dashboard' />
        }else {
            return(
                <Layout>
                    <Header/>
                    <Layout style={{marginTop: 64}} >
                        <Content className="login">
                            <div className="login-box">
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
                                    <div className="login-button-group">
                                        <div className="login-group">
                                            <Button isType='primary' htmlTypes='submit' isBlock={true}>LOGIN</Button>
                                        </div>
                                        <div className="login-group">
                                            <Button isType='danger' isBlock={true}>FORGOTE PASSWORD</Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
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