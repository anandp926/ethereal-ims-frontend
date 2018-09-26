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
        step1: false,
        step2: false
    }
    
    onFormSubmit =(e)=> {
        e.preventDefault()
        console.log(this.state.products,this.state.productsNo,this.state.subject,this.state.message)
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

    render(){
        const productsName = ['Ethereal Ray', 'Ethereal Halo', 'Ethereal Pentagram'];
        const productsNumber = ['er12asd ', 'er73dsf', 'er19iyu'];

        return(
            <div className="issue-form-box">
                <div className="issue-form">
                    <Heading heading={"Raise Issue"}/>
                    <Form onSubmitHandler={this.onFormSubmit}>
                        <AutoComplete  
                            onSelectChange={(value) => this.setState({products:value, step1:true})}
                            required 
                            dataSource={productsName} 
                            placeholder="Select a Product"
                        />
                        <AutoComplete  
                            onSelectChange={(value) => this.setState({productsNo:value, step2: true})}
                            required 
                            dataSource={productsNumber} 
                            placeholder="Select Product Number"
                        />
                        <InputType 
                            type="text"
                            value={this.state.subject}
                            name="subject" 
                            placeholder="Enter subject"
                            onInputChange={this.onInputChange}
                            isRequired={true}
                            isReadonly={this.state.step1 && this.state.step2 ? false : true}
                        />
                        <TextArea 
                            name="message" 
                            placeholder="Enter Description" 
                            value={this.state.message} 
                            onInputChange={this.onInputChange} 
                            isRequired={true}
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