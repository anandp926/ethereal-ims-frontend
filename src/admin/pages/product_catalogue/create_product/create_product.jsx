import React, { Component } from 'react';
import Form from '../../../../components/form/form';
import InputType from '../../../../components/form/form-controls/input';
import Button from '../../../../components/form/button/button';
import ErrorBox from '../../../../components/form/error-box/error-box';
import Loader from '../../../../components/ui/loader/loader'
import { Table, Divider } from 'antd';

class CreateProduct extends Component {

    state = {
        name: '',
        type: '',
        errorMsg: false,
        showLoader: false
    };

    onFormSubmit = (e) => {
        e.preventDefault();
    } 

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render(){
        const dataSource = [{
            key: '1',
            product_name: 'Halo',
            type: 'Machines'
          }, {
            key: '2',
            product_name: 'Ray',
            type: 'Machines'
          }, {
            key: '3',
            product_name: 'Pentagram',
            type: 'Machines'
          }, {
            key: '4',
            product_name: 'Spindle',
            type: 'Tools'
          }];
          
          const columns = [{
            title: 'Product Name',
            dataIndex: 'product_name',
            key: 'p_name',
          }, {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
          }];
          
        return(
            <div className="container product">
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
                            />
                            <InputType 
                                type="text"
                                value={this.state.type}
                                name="type" 
                                labelName="Product Type"
                                placeholder="Enter Product Type"
                                onInputChange={this.onInputChange}
                                isRequired={true}
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
                        dataSource={dataSource} 
                        columns={columns}
                        title={() => <h3><b>Products</b></h3>}
                        bordered
                        pagination={false}
                     />
                </div>
            </div>
        )
    }
}

export default CreateProduct