import React, {Component} from 'react'
import {Select} from 'antd'
import Form from '../../../../../components/form/form'
import InputType from '../../../../../components/form/form-controls/input'
import Button from '../../../../../components/form/button/button'
import Dropdown from '../../../../../components/form/form-controls/select'
import ErrorBox from '../../../../../components/form/error-box/error-box'
import Loader from '../../../../../components/ui/loader/loader'
import createUser from '../../../../../services/apis/create-user'
import {GetToken} from '../../../../../helpers/token'

const Option = Select.Option;

class CreateUserForm extends Component {

    state = {
        name: '',
        email: '',
        companyId: '',
        group: '',
        phone: '',
        companyIdWarn: false,
        groupWarn: false,
        errorMsg: '',
        showLoader: false,
    }

    reset = () => {
        this.setState({
            name: '',
            email: '',
            companyId: '',
            group: '',
            phone: '',
            errorMsg: '',
            showLoader: false,
        })
    }

    callback = (data) => {
        if(data.status === 200){
            this.reset();
            console.log(data.data)
        }else if(data.response){
            this.setState({
                errorMsg: data.response.data._message,
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
        const token = GetToken();
        this.setState({showLoader: true, errorMsg:''});
        e.preventDefault();
        const { name, email, companyId, group, phone } = this.state;
        if(this.validate()){
            this.outlineColor();
            const data = {
                name: name,
                email: email,
                companyId: companyId,
                group: group,
                phone: phone
            };
            if(data && token){
                createUser(this.callback, data, token);
            }
        }else{
            this.outlineColor();
            this.setState({errorMsg: 'Please fill all the required field'});
        }
    }

    onCompanySelect = (value) => {
        this.setState({ companyId: value })
    }

    onUserRole = (value) => {
        this.setState({group: value})
    }

    onInputChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    outlineColor = () => {
        if(!this.state.companyId){
            this.setState({companyIdWarn:true})
        }else{
            this.setState({companyIdWarn:false})
        }if(!this.state.group){
            this.setState({groupWarn:true})
        }else{
            this.setState({groupWarn:false})
        }
    }

    validate = () => {
        const { name, email, companyId, group, phone } = this.state;
        return name !== '' && email !== '' && companyId !== '' && group !== '' && phone !== '';
    }

    render(){
        const { companies } = this.props;
        return(
            <Form onSubmitHandler={this.onFormSubmit}>
                <Dropdown
                    labelName="Comapny"
                    placeholder="Select User Company"
                    optionFilterProp="children"
                    onSelect={this.onCompanySelect}
                    size="large"
                    isRequired={true}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    classValue={this.state.companyIdWarn ? 'inputField-outline' : null}
                >
                    {
                        companies.map((company) => (
                            <Option value={company._id} key={company._id}>{company.name}</Option>
                        ))
                    }
                </Dropdown>
                <ErrorBox errorMsgs="If company is not listed above then create company">
                    <Button isSize='small' isType='danger' onClick={() => this.props.openModal(true)}>Click</Button>
                </ErrorBox>
                <Dropdown
                    labelName="User Role"
                    placeholder="Select User Role"
                    optionFilterProp="children"
                    onSelect={this.onUserRole}
                    size="large"
                    isRequired={true}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    classValue={this.state.groupWarn ? 'inputField-outline' : null}
                >
                    <Option value="user">User</Option>
                    <Option value="admin">Admin</Option>
                </Dropdown>
                <InputType 
                    type="text"
                    value={this.state.name}
                    name="name" 
                    labelName="Name "
                    placeholder="Enter Name"
                    onInputChange={this.onInputChange}
                    isRequired={true}
                />
                <InputType 
                    type="email"
                    value={this.state.email}
                    name="email" 
                    labelName="Email"
                    placeholder="Enter Email"
                    onInputChange={this.onInputChange}
                    isRequired={true}
                />
                <InputType 
                    type="number"
                    value={this.state.phone}
                    name="phone" 
                    labelName="Phone Number"
                    placeholder="Enter Phone"
                    onInputChange={this.onInputChange}
                    isRequired={true}
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

export default CreateUserForm