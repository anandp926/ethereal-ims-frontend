import React, { Component } from 'react'
import Form from '../../../../components/form/form'
import AutoComplete from '../../../../components/form/form-controls/auto-complete'
import InputType from '../../../../components/form/form-controls/input'
import TextArea from '../../../../components/form/form-controls/text-area'
import Button from '../../../../components/form/button/button'
import Heading from '../../../../components/form/heading/heading'


class IssueForm extends Component {

    state = {
        products: '',
        productsNo: '',
        subject: '',
        message:'',
        productsWarn: false,
        productsNoWarn: false,
        subjectWarn: false,
        messageWarn: false
    }
    
    onFormSubmit =(e)=> {
        e.preventDefault()
        if(this.validate()){
            console.log(this.state.products,this.state.productsNo,this.state.subject,this.state.message)
        }else{
            this.outlineColor()
        }
    }

    onSelectChange = (value) => {
        this.setState({
            products:value
        })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    outlineColor = () => {
        if(!this.state.products){
            this.setState({productsWarn:true})
        }else{
            this.setState({productsWarn:false})
        } 
        if(!this.state.productsNo){
            this.setState({productsNoWarn: true})
        }else{
            this.setState({productsNoWarn: false})
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
        const { products, productsNo, subject, message } = this.state
        return products !== '' && productsNo !== '' && subject !== '' && message !== ''
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
                            onSelectChange={(value) => this.setState({products:value})}
                            isRequired={true}
                            name="productsName"
                            labelName="Product Name"
                            dataSource={productsName} 
                            placeholder="Select a Product"
                            classValue={this.state.productsWarn ? 'inputField-outline' : null}
                        />
                        <AutoComplete  
                            onSelectChange={(value) => this.setState({productsNo:value})}
                            isRequired={true}
                            name="productsNumber"
                            labelName="Product Number"
                            dataSource={productsNumber} 
                            placeholder="Select Product Number"
                            classValue={this.state.productsNoWarn ? 'inputField-outline' : null}
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