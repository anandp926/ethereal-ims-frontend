import React, { Component } from 'react';
import Form from '../../../../components/form/form';
import InputType from '../../../../components/form/form-controls/input';
import Button from '../../../../components/form/button/button';
import ErrorBox from '../../../../components/form/error-box/error-box';
import Loader from '../../../../components/ui/loader/loader';
import Dropdown from '../../../../components/form/form-controls/select';
import { Modal } from 'antd'
import { Table, Select } from 'antd';

const Option = Select.Option;

class ProductEntry extends Component {

    state = {
        version: '',
        productId: '',
        serialNumber: '',
        boardNumber: '',
        errorMsg: false,
        showLoader: false
    };

    onFormSubmit = (e) => {
        const {productId, version} = this.state;
        e.preventDefault();

        const data = {
            id: productId,
            version: version
        }
        console.log(data)
    };

    success = () => {
        Modal.success({
            title: 'Congratulation',
            content: 'Your order has been placed. :)',
        });
    };

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onProductSelect = (value) => {
        this.setState({ productId: value })
    };

    onVersionSelect = (value) => {
        this.setState({ versoin: value })
    };

    render(){
        const dataSource = [{
            key: '1',
            version: 'A12018'
          }, {
            key: '2',
            version: 'A12019'
          }, {
            key: '3',
            version: 'A22019'
          }, {
            key: '4',
            version: 'A32019'
          }];
          
          const columns = [{
            title: 'Version',
            dataIndex: 'version',
            key: 'p_version',
          }, {
            title: 'Details',
            key: 'details',
            render: (text, record) => (
                <span>
                    <a href="javascript:;">View</a>
                </span>
            ),
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:;">Edit</a>
                </span>
            ),
        }];
          
        const product = [
            {
                '_id': 'dfgds577hsgh',
                'name': 'Halo',
                'version': 'asf324'
            },
            {
                '_id': 'dfgdsd77hsgh',
                'name': 'Ray',
                'version': 'asf324'
            },
            {
                '_id': 'dfgdufr7hsgh',
                'name': 'Pentagram',
                'version': 'asf324'
            }
        ];

        return(
            <div className="container product">
                <div className="container-left">
                    <div className="product-form">
                        <Form onSubmitHandler={this.onFormSubmit}>
                            <Dropdown
                                labelName="Product"
                                placeholder="Select Product"
                                optionFilterProp="children"
                                onSelect={this.onProductSelect}
                                size="large"
                                isRequired={true}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                classValue={this.state.companyIdWarn ? 'inputField-outline' : null}
                            >
                                {
                                    product.map((product) => (
                                        <Option value={product._id} key={product._id}>{product.name}</Option>
                                    ))
                                }
                            </Dropdown>
                            <Dropdown
                                labelName="Version"
                                placeholder="Select Version"
                                optionFilterProp="children"
                                onSelect={this.onVersionSelect}
                                size="large"
                                isRequired={true}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                classValue={this.state.companyIdWarn ? 'inputField-outline' : null}
                            >
                                {
                                    product.map((product) => (
                                        <Option value={product.vaersion} key={product._id}>{product.version}</Option>
                                    ))
                                }
                            </Dropdown>
                            <ErrorBox errorMsgs={<strong>If products and versions are not listed above then&nbsp;<b>Create Product/Version.</b></strong>}></ErrorBox>
                            <InputType 
                                type="text"
                                value={this.state.serialNumber}
                                name="serialNumber" 
                                labelName="Serial Number"
                                placeholder="Enter Product Serial Number"
                                onInputChange={this.onInputChange}
                                isRequired={true}
                            />
                            <InputType 
                                type="text"
                                value={this.state.boardNumber}
                                name="boardNumber" 
                                labelName="Board Number"
                                placeholder="Enter Product Board Number"
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
                        title={() => <h3><b>Halo</b></h3>}
                        bordered
                        pagination={false}
                     />
                     <Table 
                        dataSource={dataSource} 
                        columns={columns}
                        title={() => <h3><b>Halo</b></h3>}
                        bordered
                        pagination={false}
                     />
                     <Table 
                        dataSource={dataSource} 
                        columns={columns}
                        title={() => <h3><b>Halo</b></h3>}
                        bordered
                        pagination={false}
                     />
                </div>
            </div>
        )
    }
}

export default ProductEntry