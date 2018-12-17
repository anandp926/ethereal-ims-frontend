import React, { Component } from 'react';
import Form from '../../../../components/form/form';
import InputType from '../../../../components/form/form-controls/input';
import Button from '../../../../components/form/button/button';
import ErrorBox from '../../../../components/form/error-box/error-box';
import Loader from '../../../../components/ui/loader/loader';
import Dropdown from '../../../../components/form/form-controls/select' 
import RichTextEditor from 'react-rte'
import ReactTextEditor from '../../../../components/form/rich-text-editor/rich-text-editor'
import { Table, Select } from 'antd';

const Option = Select.Option;

class CreateVersion extends Component {

    state = {
        version: '',
        versionDetail: RichTextEditor.createEmptyValue(),
        productId: '',
        errorMsg: false,
        showLoader: false
    };

    onFormSubmit = (e) => {
        const {productId, versionDetail, version} = this.state;
        e.preventDefault();

        const data = {
            id: productId,
            version: version,
            details: versionDetail.toString('html')
        }
        console.log(data)
    } 

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    textChange = (value) => {
        this.setState({versionDetail: value});
    };

    onProductSelect = (value) => {
        this.setState({ productId: value })
    }

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
                'name': 'Halo'
            },
            {
                '_id': 'dfgdsd77hsgh',
                'name': 'Ray'
            },
            {
                '_id': 'dfgdufr7hsgh',
                'name': 'Pentagram'
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
                            <ErrorBox errorMsgs={<strong>If product is not listed above then&nbsp;<b>Create Product.</b></strong>}></ErrorBox>
                            <InputType 
                                type="text"
                                value={this.state.version}
                                name="version" 
                                labelName="Product Version"
                                placeholder="Enter Product Version"
                                onInputChange={this.onInputChange}
                                isRequired={true}
                            />
                            <ReactTextEditor
                                labelName="Product Version Details"
                                value={this.state.versionDetail}
                                textChange={this.textChange}
                                placeholder="Enter Version Details"
                            />
                            <ErrorBox errorMsgs={<strong>If you are creating new version of product then&nbsp;<b>Write version details.</b></strong>}></ErrorBox>
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

export default CreateVersion