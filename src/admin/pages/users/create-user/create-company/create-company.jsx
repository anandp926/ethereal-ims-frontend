import React, {Component} from 'react'
import { connect } from 'react-redux'
import Form from '../../../../../components/form/form'
import InputType from '../../../../../components/form/form-controls/input'
import Button from '../../../../../components/form/button/button'
import ErrorBox from '../../../../../components/form/error-box/error-box'
import Loader from '../../../../../components/ui/loader/loader'
//api
import createCompany from '../../../../../services/apis/create-company'
import * as actionType from '../../../../../store/actions/action-type'
import {GetToken} from '../../../../../helpers/token'


class CreateCompany extends Component {

    state = {
        name: '',
        location: '',
        nameWarn: false,
        locationWarn: false,
        errorMsg: '',
        showLoader: false
    }

    callback = (data) => {
        if(data.status === 200){
            this.reset();
            this.props.addCompany(data.data);
            this.props.cancelClick(false); // close modal
        }else if(data.response){
            this.setState({
                errorMsg: 'Something went wrong. Please try again later &#x2639;',
                showLoader: false,
            });
        }else{
            this.setState({
                errorMsg: 'Something went wrong. Please try again later &#x2639;',
                showLoader: false,
            });
        }
    }

    onFormSubmit = (e) => {
        const token = GetToken();
        e.preventDefault();
        this.setState({showLoader: true, errorMsg:''});
        const { name, location} = this.state;
        if(this.validate()){
            this.outlineColor();
            const data = {
                name: name,
                location: location
            };
            if(data && token){
                createCompany(this.callback, data, token);
            }
        }else {
            this.outlineColor();
            this.setState({errorMsg: 'Please fill all the required field'});
        }
    }

    onInputChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    reset = () => {
        this.setState({
            name: '',
            location: '',
            errorMsg: '',
            showLoader: false
        })
    }

    outlineColor = () => {
        if(!this.state.name.trim()){
            this.setState({nameWarn:true})
        }else{
            this.setState({nameWarn:false})
        }if(!this.state.location.trim()){
            this.setState({locationWarn:true})
        }else{
            this.setState({locationWarn:false})
        }
    }

    validate = () => {
        const { name, location } = this.state;
        return name.trim() !== '' && location.trim() !== '';
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
                    classValue={this.state.nameWarn ? 'inputField-outline' : null}
                />
                <InputType 
                    type="text"
                    value={this.state.location}
                    name="location" 
                    labelName="Company Location"
                    placeholder="Enter Company Location"
                    onInputChange={this.onInputChange}
                    isRequired={true}
                    classValue={this.state.locationWarn ? 'inputField-outline' : null}
                />
                { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                { this.state.showLoader ? <Loader>Creating...</Loader> : null }
                <div className="issue-form-button" >
                    <Button isType='primary' htmlTypes='submit' isBlock={true}>Submit</Button>
                </div>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
        addCompany: (data) => {
            dispatch({
                type: actionType.ADD_COMPANY,
                value: data
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateCompany)