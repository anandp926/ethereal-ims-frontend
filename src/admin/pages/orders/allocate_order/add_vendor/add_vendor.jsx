import React, { Component } from 'react';
import {Select} from 'antd'
import Form from '../../../../../components/form/form';
import Dropdown from '../../../../../components/form/form-controls/select';
import Button from '../../../../../components/form/button/button';
import Loader from '../../../../../components/ui/loader/loader';
import ErrorBox from '../../../../../components/form/error-box/error-box';
//
import * as actionType from '../../../../../store/actions/action-type';
import {GetToken} from '../../../../../helpers/token';
import {addVendor} from '../../../../../services/apis/orders';

const Option = Select.Option;

class AddVendor extends Component {
    
    state = {
        vendorId: '',
        errorMsg: false,
        showLoader: false,
        vendorIdWarn: false,
        gToken: GetToken()
    }

    callback = (data) => {
        if(data.status === 200) {
            this.setState({showLoader: false, errorMsg: ''})
            console.log(data.data)
        }else{
            this.setState({showLoader: true, errorMsg: 'Something went wrong. Please try again later &#x2639;'});
            console.log(data.response)
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState({showLoader: true, errorMsg: ''});
        const {vendorId, gToken} = this.state;
        if(this.validate()){
            this.outlineColor();
            addVendor(this.callback, {vendorId: vendorId}, gToken);
        }else{
            this.outlineColor();
            this.setState({showLoader: false, errorMsg: 'Please Select Vendor/Company'});
        }
    }

    onVendorSelect = (value) => {
        this.setState({vendorId: value})
    }

    outlineColor = () => {
        if(!this.state.vendorId.trim()){
            this.setState({vendorIdWarn:true})
        }else{
            this.setState({vendorIdWarn:false})
        }
    }
    
    validate = () => {
        const { vendorId } = this.state;
        return vendorId.trim() !== '';
    }

    render(){
        return(
            <Form onSubmitHandler={this.onFormSubmit}>
                <fieldset 
                    disabled={this.props.vendorDisable}
                    style={this.props.vendorDisable ? {pointerEvents: "none", opacity: "0.5",} : {}}
                >
                    <legend>Add Vendor</legend>
                    <Dropdown
                        labelName="Vendor/Company"
                        placeholder="Select Vendor"
                        optionFilterProp="children"
                        onSelect={this.onVendorSelect}
                        size="large"
                        isRequired={true}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        classValue={this.state.vendorIdWarn ? 'inputField-outline' : null}
                    >
                    {
                        this.props.companies.map((company) => (
                            <Option value={company._id} key={company._id}>{company.name}</Option>
                        ))
                    }
                    </Dropdown>
                    { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                    { this.state.showLoader ? <Loader>Adding...</Loader> : null }
                    <div className="issue-form-button">
                        <Button isType='primary' htmlTypes='submit'>Add</Button>
                    </div>
                </fieldset>
            </Form>
        )
    }
}

export default AddVendor