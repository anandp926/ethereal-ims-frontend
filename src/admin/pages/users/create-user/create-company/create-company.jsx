import React, {Component} from 'react'
import Form from '../../../../../components/form/form'
import InputType from '../../../../../components/form/form-controls/input'
import Button from '../../../../../components/form/button/button'
import ErrorBox from '../../../../../components/form/error-box/error-box'
import Loader from '../../../../../components/ui/loader/loader'
import createCompany from '../../../../../services/apis/create-company'
import {GetToken} from '../../../../../helpers/token'

class CreateCompany extends Component {

    state = {
        name: '',
        location: '',
        errorMsg: ''
    }

    callback = (data) => {
        if(data.status === 200){
            console.log(data.data)
        }else if(data.response){
            console.log(data.response)
        }
    }

    onFormSubmit = (e) => {
        const token = GetToken();
        e.preventDefault();
        const { name, location} = this.state;
        if(this.validate()){
            const data = {
                name: name,
                location: location
            };
            if(data && token){
                createCompany(this.callback, data, token);
            }
        }
    }

    onInputChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    reset = () => {
        this.setState({
            name: '',
            location: '',
            errorMsg: ''
        })
    }

    validate = () => {
        const { name, location } = this.state;
        return name !== '' && location !== '';
    }

    render(){
        return(
            <Form onSubmitHandler={this.onFormSubmit}>
                <InputType 
                    type="text"
                    value={this.state.name}
                    name="name" 
                    labelName="Company Name"
                    placeholder="Enter Company Name"
                    onInputChange={this.onInputChange}
                    isRequired={true}
                />
                <InputType 
                    type="text"
                    value={this.state.location}
                    name="location" 
                    labelName="Company Location"
                    placeholder="Enter Company Location"
                    onInputChange={this.onInputChange}
                    isRequired={true}
                />
                { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                <div className="issue-form-button" >
                    <Button isType='primary' htmlTypes='submit' isBlock={true}>Submit</Button>
                </div>
            </Form>
        )
    }
}

export default CreateCompany