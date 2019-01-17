import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Select} from 'antd'
import Form from '../../../../../components/form/form';
import Dropdown from '../../../../../components/form/form-controls/select';
import Button from '../../../../../components/form/button/button';
import Loader from '../../../../../components/ui/loader/loader';
import ErrorBox from '../../../../../components/form/error-box/error-box';
//
import * as actionType from '../../../../../store/actions/action-type';
import {GetToken} from '../../../../../helpers/token';
import {addProduct} from '../../../../../services/apis/orders';

const Option = Select.Option;

class AddProduct extends Component {
    state = {
        productId: '',
        name: '',
        version: '',
        machineSRN: '',
        errorMsg: false,
        showLoader: false,
        serialNumberWarn: false,
        productIdWarn: false,
        gToken: GetToken()
    }

    callback = (data) => {
        if(data.status === 200) {
            this.setState({showLoader: false, errorMsg: ''})
            this.props.dispatchAddProduct(data.data.order.products)
        }else{
            this.setState({showLoader: false, errorMsg: 'Something went wrong. Please try again later &#x2639;'});
            console.log(data.response)
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState({showLoader: true, errorMsg: ''});
        const {productId, name, version, machineSRN, gToken} = this.state;
        const data = {
            productId: productId,
            name: name,
            version: version,
            machineSRN: machineSRN
        }
        const id = this.props.unproceedOrder._id;
        if(this.validate() && id){
            this.outlineColor();
            addProduct(this.callback, id, data, gToken);
        }else{
            this.outlineColor();
            this.setState({showLoader: false, errorMsg: 'Select All Fields'});
        }
        // this.props.dispatchAddProduct()
    }

    onProductSelect = (value) => {
        let filterProduct  = this.props.products.filter((product) => product._id === value);
        if(filterProduct[0] !== undefined && filterProduct[0] !== null) {
            this.setState({productId: value, name: filterProduct[0].name})
        } 
    }

    onMachineSelect = (value) => {
        let filterProduct, filtermachine;
        filterProduct  = this.props.products.filter((product) => product._id === this.state.productId);
        if(filterProduct[0] !== undefined && filterProduct[0] !== null) {
            filtermachine = filterProduct[0].productList.filter((machine) => machine.serialNumber === value)
        }
        if(filtermachine) {
            this.setState({machineSRN: value, version: filtermachine[0].version});
        }
    }

    outlineColor = () => {
        if(!this.state.productId.trim()){
            this.setState({productIdWarn:true})
        }else{
            this.setState({productIdWarn:false})
        }if(!this.state.machineSRN.trim()) {
            this.setState({serialNumberWarn: true})
        }else{
            this.setState({serialNumberWarn: false})
        }
    }
    
    validate = () => {
        const { version, productId, machineSRN, name} = this.state;
        return version.trim() !== '' && productId.trim() !== '' && machineSRN.trim() !== '' && name.trim() !== '';
    }

    render() {
        console.log(this.props.orders)
        let filterProduct, filtermachine;
        filterProduct  = this.props.products.filter((product) => product._id === this.state.productId);
        if(filterProduct[0] !== undefined && filterProduct[0] !== null) {
            filtermachine = filterProduct[0].productList.filter((machine) => machine.sold === false)
        }

        return(
            <Form onSubmitHandler={this.onFormSubmit}>
                <fieldset>
                    <legend>Add Products</legend>
                    <Dropdown
                        labelName="Product"
                        placeholder="Select Product"
                        optionFilterProp="children"
                        onSelect={this.onProductSelect}
                        size="large"
                        isRequired={true}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        classValue={this.state.productIdWarn ? 'inputField-outline' : null}
                    >
                        {
                            this.props.products.map((product) => (
                                <Option value={product._id} key={product._id}>{product.name}</Option>
                            ))
                        }
                    </Dropdown>
                    <Dropdown
                        labelName="Serial Number"
                        placeholder="Select Serial Number"
                        optionFilterProp="children"
                        onSelect={this.onMachineSelect}
                        size="large"
                        isRequired={true}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        classValue={this.state.serialNumberWarn ? 'inputField-outline' : null}
                    >
                        {
                            filtermachine !== undefined && filtermachine !== null && (
                                filtermachine.map((machine) =>(
                                    <Option value={machine.serialNumber} key={machine._id}>{machine.serialNumber}</Option>
                                ))
                            )
                        }
                    </Dropdown>
                    { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                    { this.state.showLoader ? <Loader>Creating...</Loader> : null }
                    <div className="issue-form-button">
                        <Button isType='primary' htmlTypes='submit'>Add</Button>
                    </div>
                </fieldset>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
        dispatchAddProduct : (data) => {
            dispatch({
                type: actionType.UNPROCEED_ADD_PRODUCT,
                value: data
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(AddProduct)