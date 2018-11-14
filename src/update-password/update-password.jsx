import React, { Component } from 'react'
import {Layout} from 'antd'
import Header from '../components/header/header'
import InputType from '../components/form/form-controls/input'
import Button from '../components/form/button/button'
import Form from '../components/form/form'
const { Content, Footer } = Layout;

class UpdatePassword extends Component {

    state = {
        password: '',
        reTypePassword: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
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
                <Layout>
                    <Content className="login">
                        <div className="login-box">
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
                                <Button isType='primary' htmlTypes='submit' isBlock={true}>UPDATE</Button>
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

export default UpdatePassword