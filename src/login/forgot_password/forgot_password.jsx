import React, {Component} from 'react';
import {Modal} from 'antd'
import Form from '../../components/form/form'
import InputType from '../../components/form/form-controls/input'
import Button from '../../components/form/button/button'
import ErrorBox from '../../components/form/error-box/error-box'
import Loader from '../../components/ui/loader/loader'
import {forgotPassword} from '../../services/apis/user'

class ForgotPassword extends Component {

    state = {
        email: '',
        emailWarn: false,
        errorMsg: '',
        showLoader: false
    }

    success = () => {
        Modal.success({
            title: 'Successful',
            content: 'Your new password has been sent to your email.',
        });
    }

    callback = (data) => {
        if(data.status === 200){
            this.reset();
            this.success();
            this.props.cancelClick(); // close modal
        }else if(data.response.status === 404){
            this.setState({
                errorMsg: data.response.data.statusText,
                showLoader: false,
            });
        }else {
            this.setState({
                errorMsg: 'Something went wrong. Please try again later &#x2639;',
                showLoader: false,
            });
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.reset();
        this.setState({showLoader: true});
        const { email} = this.state;
        if(this.validate()){
            this.outlineColor();
            const data = {
                email: email
            };
            if(data){
                forgotPassword(this.callback, data);
            }
        }else {
            this.outlineColor();
            this.setState({showLoader: false, errorMsg: 'Please fill all the required field'});
        }
    }

    onInputChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    reset = () => {
        this.setState({
            email: '',
            errorMsg: '',
            showLoader: false
        })
    }

    outlineColor = () => {
        if(!this.state.email.trim()){
            this.setState({emailWarn:true})
        }else{
            this.setState({emailWarn:false})
        }
    }

    validate = () => {
        const { email } = this.state;
        return email.trim() !== '';
    }

    render(){
        return(
            <Form onSubmitHandler={this.onFormSubmit}>
                <InputType 
                    type="email"
                    value={this.state.email}
                    name="email" 
                    labelName="Email"
                    placeholder="Enter Your Email"
                    onInputChange={this.onInputChange}
                    isRequired={true}
                    classValue={this.state.emailWarn ? 'inputField-outline' : null}
                />
                { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                { this.state.showLoader ? <Loader>Requesting...</Loader> : null }
                <div className="issue-form-button" >
                    <Button isType='primary' htmlTypes='submit' isBlock={true}>Submit</Button>
                </div>
            </Form>
        )
    }
}

export default ForgotPassword