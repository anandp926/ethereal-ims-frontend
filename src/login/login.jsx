import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../components/header/header';
import InputType from '../components/form/form-controls/input'
import Button from '../components/form/button/button'
import Form from '../components/form/form'

const { Content, Footer } = Layout;

class Login extends Component{

    state = {
        userName: '',
        password: ''
    }

    onFormSubmit =(e)=> {
        e.preventDefault()
        console.log(this.state.userName,this.state.password)
        const { userName, password } = this.state
        if(userName === 'user' && password === 'user'){
            const type = 'user'
            this.props.typeCheck(type)
        }else if(userName === 'admin' && password === 'admin'){
            const type = 'admin'
            this.props.typeCheck(type)
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
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

export default Login