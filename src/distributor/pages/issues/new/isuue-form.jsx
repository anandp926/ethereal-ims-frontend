import React, { Component } from 'react';
import {Modal} from 'antd'
import Form from '../../../../components/form/form';
import Loader from '../../../../components/ui/loader/loader'
import ErrorBox from '../../../../components/form/error-box/error-box'
import AutoComplete from '../../../../components/form/form-controls/auto-complete';
import InputType from '../../../../components/form/form-controls/input';
import TextArea from '../../../../components/form/form-controls/text-area';
import Button from '../../../../components/form/button/button';
import Heading from '../../../../components/form/heading/heading';
//
import {GetToken} from '../../../../helpers/token';
import {createIssue} from '../../../../services/apis/issues';


class IssueForm extends Component {

    state = {
        gToken: GetToken(),
        productName: '',
        serialNumber: '',
        subject: '',
        message:'',
        productNameWarn: false,
        serialNumberWarn: false,
        subjectWarn: false,
        messageWarn: false,
        showLoader: false,
        errMsg: ''
    }

    success = () => {
        Modal.success({
            title: 'Successful',
            content: 'Issue has been created :)',
        });
    }

    error = () => {
        Modal.error({
            title: 'Oops',
            content: 'Something went wrong. Please try again later :(',
        })
    }

    callback = (data) => {
        if(data.status === 200){
            this.success();
            this.setState({showLoader: false, errMsg: ''});
            console.log(data.data);
        }else {
            this.error();
            this.setState({showLoader: false, errMsg: ''});
            console.log(data.response)
        }
    }

    onFormSubmit =(e)=> {
        e.preventDefault();
        this.setState({showLoader: true, errMsg: ''});
        if(this.validate() && this.state.gToken){
            const data = {
                productName: this.state.productName,
                serialNumber: this.state.serialNumber,
                subject: this.state.subject,
                description: this.state.message
            }
            this.outlineColor();
            createIssue(this.callback, data, this.state.gToken);
        }else{
            this.outlineColor()
            this.setState({showLoader: false, errMsg: 'Fill all * field'});
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    outlineColor = () => {
        if(!this.state.productName){
            this.setState({productNameWarn:true})
        }else{
            this.setState({productNameWarn:false})
        } 
        if(!this.state.serialNumber){
            this.setState({serialNumberWarn: true})
        }else{
            this.setState({serialNumberWarn: false})
        } 
        if(!this.state.subject){
            this.setState({subjectWarn: true})
        }else{
            this.setState({subjectWarn: false})
        } 
        if(!this.state.message){
            this.setState({messageWarn: true})
        }else{
            this.setState({messageWarn: false})
        }
    }

    validate = () => {
        const { productName, serialNumber, subject, message } = this.state
        return productName !== '' && serialNumber !== '' && subject !== '' && message !== ''
    }    

    render(){
        const productsName = ['Ethereal Ray', 'Ethereal Halo', 'Ethereal Pentagram'];
        const productsNumber = ['er12asd ', 'er73dsf', 'er19iyu'];

        return(
            <div className="container">
                <div className="issue-form">
                    <Heading heading={"Raise Issue"}/>
                    <Form onSubmitHandler={this.onFormSubmit}>
                        <AutoComplete  
                            onSelectChange={(value) => this.setState({productName:value})}
                            isRequired={true}
                            name="productsName"
                            labelName="Product Name"
                            dataSource={productsName} 
                            placeholder="Select a Product"
                            classValue={this.state.productNameWarn ? 'inputField-outline' : null}
                        />
                        <AutoComplete  
                            onSelectChange={(value) => this.setState({serialNumber:value})}
                            isRequired={true}
                            name="productsNumber"
                            labelName="Product Number"
                            dataSource={productsNumber} 
                            placeholder="Select Product Number"
                            classValue={this.state.serialNumberWarn ? 'inputField-outline' : null}
                        />
                        <InputType 
                            type="text"
                            value={this.state.subject}
                            name="subject" 
                            labelName="Subject"
                            placeholder="Enter subject"
                            onInputChange={this.onInputChange}
                            isRequired={true}
                            classValue={this.state.subjectWarn ? 'inputField-outline' : null}
                        />
                        <TextArea 
                            name="message"
                            labelName="Description" 
                            placeholder="Enter Description" 
                            value={this.state.message} 
                            onInputChange={this.onInputChange} 
                            isRequired={true}
                            classValue={this.state.messageWarn ? 'inputField-outline' : null}
                        />
                        { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                        { this.state.showLoader ? <Loader>Creating...</Loader> : null }
                        <div className="issue-form-button" >
                            <Button isType='primary' htmlTypes='submit' isBlock={true}>Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default IssueForm