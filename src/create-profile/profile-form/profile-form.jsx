import React, {Component} from 'react'
import moment from 'moment';
import {Select} from 'antd'
import ErrorBox from '../../components/form/error-box/error-box'
import InputType from '../../components/form/form-controls/input'
import AutoComplete from '../../components/form/form-controls/auto-complete'
import DatePicker from '../../components/form/form-controls/date-picker'
import Dropdown from '../../components/form/form-controls/select'
import Button from '../../components/form/button/button'
import Form from '../../components/form/form'
import Heading from '../../components/form/heading/heading'
import Checkbox from '../../components/form/form-controls/checkbox'
import {Nationality} from '../../helpers/nationality'

const Option = Select.Option;

function disabledDate(current) {
    // Can not select days before today and today
    return current && current > moment().endOf('day');
}

class ProfileForm extends Component {

    state = {
        nationality: '',
        panNumber: '',
        presentOccupatoin: '',
        annualIncome: '',
        dob: '',
        typeOfCompany: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        declaration: false,
        errorMsg: '',
        zipWarn: false,
        nationalityWarn:false,
        presentOccupatoinWarn: false,
        annualIncomeWarn: false,
        dobWarn: false,
        typeOfCompanyWarn: false,
        streetWarn: false,
        cityWarn: false,
        stateWarn: false
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const {nationality, panNumber, presentOccupatoin, annualIncome, dob, typeOfCompany, street, city, state, zip, declaration} = this.state;
        if(this.validate() && this.props.userId){
            this.outlineColor()
            if(declaration){
                const data = {
                    userId: this.props.userId,
                    nationality: nationality,
                    panNumber: panNumber,
                    presentOccupatoin: presentOccupatoin,
                    annualIncome: annualIncome,
                    dob: dob,
                    typeOfCompany: typeOfCompany,
                    address: {
                        street: street,
                        city: city,
                        state: state,
                        zip: zip
                    }
                }
                this.props.formData(data);
                this.setState({errorMsg: ''});
                this.props.openModal(true);
            }else {
                this.setState({errorMsg: 'Please accept declaration'})
            }
        }else{
            this.outlineColor();
            this.setState({errorMsg: 'Please fill all the required field'})
        }
    }

    outlineColor = () => {
        if(!this.state.nationality){
            this.setState({nationalityWarn:true})
        }else{
            this.setState({nationalityWarn:false})
        } 
        if(!this.state.presentOccupatoin){
            this.setState({presentOccupatoinWarn: true})
        }else{
            this.setState({presentOccupatoinWarn: false})
        } 
        if(!this.state.annualIncome){
            this.setState({annualIncomeWarn: true})
        }else{
            this.setState({annualIncomeWarn: false})
        } 
        if(!this.state.dob){
            this.setState({dobWarn: true})
        }else{
            this.setState({dobWarn: false})
        }
        if(!this.state.typeOfCompany){
            this.setState({typeOfCompanyWarn: true})
        }else{
            this.setState({typeOfCompanyWarn: false})
        }
        if(!this.state.street){
            this.setState({streetWarn: true})
        }else{
            this.setState({streetWarn: false})
        }
        if(!this.state.city){
            this.setState({cityWarn: true})
        }else{
            this.setState({cityWarn: false})
        }
        if(!this.state.state){
            this.setState({stateWarn: true})
        }else{
            this.setState({stateWarn: false})
        }
        if(!this.state.zip){
            this.setState({zipWarn: true})
        }else{
            this.setState({zipWarn: false})
        }
    }
    validate = () => {
        const {nationality, presentOccupatoin, annualIncome, dob, typeOfCompany, street, city, state, zip} = this.state;
        return nationality !== '' && presentOccupatoin !== '' && annualIncome !== '' && dob !== '' && typeOfCompany !== '' && street !== '' && city !== '' && state !== '' && zip !== ''
    } 
    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onDateChange = (date, dateString) => {
        this.setState({dob: dateString})
    }

    onSelect = (value) => {
        this.setState({typeOfCompany: value})
    }

    onCheck = (e) => {
        this.setState({declaration: e.target.checked})
    }

    render(){
        return(
            <div className="login-box">
                <Heading heading="Fill Basic Details" />
                <Form onSubmitHandler={this.onFormSubmit}>
                    <DatePicker
                        disabledDate={disabledDate}
                        placeholder="Select Date"
                        labelName="Date Of Birth"
                        onDateChange={this.onDateChange}
                        isRequired={true}
                        classValue={this.state.dobWarn ? 'inputField-outline' : null}
                    />
                    <AutoComplete  
                        onSelectChange={(value) => this.setState({nationality:value})}
                        isRequired={true}
                        name="nationality"
                        labelName="Nationality"
                        dataSource={Nationality} 
                        placeholder="Select Nationality"
                        classValue={this.state.nationalityWarn ? 'inputField-outline' : null}
                    />
                    <InputType 
                        type="text"
                        value={this.state.panNumber}
                        name="panNumber" 
                        placeholder="Enter PAN Number"
                        onInputChange={this.onInputChange}
                        labelName="PAN Number"
                    />
                    <InputType 
                        type="text"
                        value={this.state.presentOccupatoin}
                        name="presentOccupatoin"
                        placeholder="Enter Present Occupatoin"
                        onInputChange={this.onInputChange}
                        isRequired={true}
                        labelName="Present Occupatoin"
                        classValue={this.state.presentOccupatoinWarn ? 'inputField-outline' : null}
                    />
                    <Dropdown
                        labelName="Type of Componay"
                        placeholder="Select ToC"
                        optionFilterProp="children"
                        onSelect={this.onSelect}
                        size="large"
                        isRequired={true}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        classValue={this.state.typeOfCompanyWarn ? 'inputField-outline' : null}
                    >
                        <Option value="proprietor">Proprietor</Option>
                        <Option value="partnership">Partnership</Option>
                        <Option value="pvt ltd">Pvt ltd</Option>
                    </Dropdown>
                    <InputType 
                        type="number"
                        value={this.state.annualIncome}
                        name="annualIncome" 
                        placeholder="Enter Annual Income"
                        onInputChange={this.onInputChange}
                        isRequired={true}
                        labelName="Annual Income"
                        classValue={this.state.annualIncomeWarn ? 'inputField-outline' : null}
                    />
                    <InputType 
                        type="text"
                        value={this.state.street}
                        name="street" 
                        placeholder="Enter Street Name"
                        onInputChange={this.onInputChange}
                        labelName="Street"
                        isRequired={true}
                        classValue={this.state.streetWarn ? 'inputField-outline' : null}
                    />
                    <InputType 
                        type="text"
                        value={this.state.city}
                        name="city" 
                        placeholder="Enter City Name"
                        onInputChange={this.onInputChange}
                        labelName="City"
                        isRequired={true}
                        classValue={this.state.cityWarn ? 'inputField-outline' : null}
                    />
                    <InputType 
                        type="text"
                        value={this.state.state}
                        name="state" 
                        placeholder="Enter State Name"
                        onInputChange={this.onInputChange}
                        labelName="State"
                        isRequired={true}
                        classValue={this.state.stateWarn ? 'inputField-outline' : null}
                    />
                    <InputType 
                        type="number"
                        value={this.state.zip}
                        name="zip" 
                        placeholder="Enter ZIP Code"
                        onInputChange={this.onInputChange}
                        labelName="ZIP Code"
                        isRequired={true}
                        classValue={this.state.zipWarn ? 'inputField-outline' : null}
                    />
                    <Checkbox onCheck={this.onCheck}>
                        Declaration: I hereby declare that the information mentioned in the application is correct &amp; true to
                        best of my knowledge.
                    </Checkbox>
                    { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                    <Button isType='primary' htmlTypes='submit' isBlock={true}>Create</Button>
                </Form>
            </div>
        )
    }
}

export default ProfileForm