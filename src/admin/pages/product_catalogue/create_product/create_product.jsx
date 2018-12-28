import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from '../../../../components/form/form';
import InputType from '../../../../components/form/form-controls/input';
import Button from '../../../../components/form/button/button';
import ErrorBox from '../../../../components/form/error-box/error-box';
import Loader from '../../../../components/ui/loader/loader'
import { Table, Modal } from 'antd';
//
import {createProduct} from '../../../../services/apis/product_catalog'
import {GetToken} from '../../../../helpers/token'
import * as actionType from '../../../../store/actions/action-type'

class CreateProduct extends Component {

    state = {
        gToken: GetToken(),
        name: '',
        type: '',
        nameWarn: false,
        typeWarn: false,
        errorMsg: false,
        showLoader: false
    };

    success = () => {
        Modal.success({
            title: 'Successful',
            content: 'Product has been created.',
        });
    };

    callback = (data) => {
        if(data.status === 200){
            this.props.dispatchProduct(data.data);
            this.success();
            this.reset();
        }else {
            this.setState({errorMsg: 'Something went wrong. Please try again ', showLoader: false});
        }
    }

    onFormSubmit = (e) => {
        this.setState({showLoader: true, errorMsg: ''});
        e.preventDefault();
        const { name, type, gToken } = this.state;
        if(this.validate()){
            this.outlineColor();
            const data = {
                name: name,
                type: type
            };
            if(data && gToken){
                createProduct(this.callback, data, gToken);
            }
        }else{
            this.outlineColor();
            this.setState({errorMsg: 'Please fill all the required field'});
        }
    } 

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    outlineColor = () => {
        if(!this.state.name.trim()){
            this.setState({nameWarn:true})
        }else{
            this.setState({nameWarn:false})
        }if(!this.state.type.trim()){
            this.setState({typeWarn:true})
        }else{
            this.setState({typeWarn:false})
        }
    }

    validate = () => {
        const { name, type } = this.state;
        return name.trim() !== '' && type.trim() !== '';
    }

    reset = () => {
        this.setState({
            name: '',
            type: '',
            errorMsg: '',
            showLoader: false
        })
    }

    render(){
          
        const columns = [{
            title: 'Product Name',
            dataIndex: 'name',
            key: 'p_name',
            }, {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        }];

        return(
            <div className="container flex-row">
                <div className="container-left">
                    <div className="product-form">
                        <Form onSubmitHandler={this.onFormSubmit}>
                            <InputType 
                                type="text"
                                value={this.state.name}
                                name="name" 
                                labelName="Product Name"
                                placeholder="Enter Product Name"
                                onInputChange={this.onInputChange}
                                isRequired={true}
                                classValue={this.state.nameWarn ? 'inputField-outline' : null}
                            />
                            <InputType 
                                type="text"
                                value={this.state.type}
                                name="type" 
                                labelName="Product Type"
                                placeholder="Enter Product Type"
                                onInputChange={this.onInputChange}
                                isRequired={true}
                                classValue={this.state.typeWarn ? 'inputField-outline' : null}
                            />
                            { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                            { this.state.showLoader ? <Loader>Creating...</Loader> : null }
                            <div className="issue-form-button">
                                <Button isType='primary' htmlTypes='submit'>Create</Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="container-right">
                    <Table 
                        dataSource={this.props.products} 
                        columns={columns}
                        rowKey={record => record._id}
                        title={() => <h3><b>Products</b></h3>}
                        bordered
                        pagination={false}
                     />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
        dispatchProduct: (data) => {
            dispatch({
                type: actionType.ADD_PRODUCTS,
                value: data
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateProduct)