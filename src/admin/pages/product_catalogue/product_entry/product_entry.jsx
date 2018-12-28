import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../../../../components/form/form';
import InputType from '../../../../components/form/form-controls/input';
import Button from '../../../../components/form/button/button';
import ErrorBox from '../../../../components/form/error-box/error-box';
import Loader from '../../../../components/ui/loader/loader';
import Dropdown from '../../../../components/form/form-controls/select';
import RichTextEditor from 'react-rte'
import ReactTextEditor from '../../../../components/form/rich-text-editor/rich-text-editor'
import { Modal } from 'antd'
import { Table, Select } from 'antd';
//
import {GetToken} from '../../../../helpers/token'
import * as actionType from '../../../../store/actions/action-type'
import {productEntry} from '../../../../services/apis/product_catalog'

const Option = Select.Option;

class ProductEntry extends Component {

    state = {
        gToken: GetToken(),
        version: '',
        productId: '',
        serialNumber: '',
        boardNumber: '',
        variant: RichTextEditor.createEmptyValue(),
        serialNumberWarn: false,
        boardNumberWarn: false,
        versionWarn: false,
        productIdWarn: false,
        errorMsg: false,
        showLoader: false
    };

    callback = (data) => {
        if(data.status === 200){
            this.props.machineDispatch(data.data);
            this.success();
            this.reset();
        }else{
            this.setState({errorMsg: 'Something went wrong. Please try again ', showLoader: false});
        }
    }

    onFormSubmit = (e) => {
        this.setState({showLoader: true, errorMsg: ''})
        const { version, productId, serialNumber, boardNumber, gToken, variant} = this.state;
        e.preventDefault();

        const data = {
            version: version,
            serialNumber: serialNumber,
            boardNumber: boardNumber,
            variant: variant.toString('html')
        }

        if(this.validate() && gToken){
            this.outlineColor();
            productEntry(this.callback, productId, data, gToken)
        }else {
            this.outlineColor();
            this.setState({errorMsg: 'Please fill all the required field', showLoader: false});
        }
    };

    success = () => {
        Modal.success({
            title: 'Successful',
            content: 'Product version has been created.',
        });
    };

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onProductSelect = (value) => {
        this.setState({ productId: value })
    };

    onVersionSelect = (value) => {
        this.setState({ version: value })
    };

    textChange = (value) => {
        this.setState({variant: value});
    };

    outlineColor = () => {
        if(!this.state.productId.trim()){
            this.setState({productIdWarn:true})
        }else{
            this.setState({productIdWarn:false})
        }if(!this.state.version.trim()){
            this.setState({versionWarn:true})
        }else{
            this.setState({versionWarn:false})
        }if(!this.state.serialNumber.trim()) {
            this.setState({serialNumberWarn: true})
        }else{
            this.setState({serialNumberWarn: false})
        }if(!this.state.boardNumber.trim()) {
            this.setState({boardNumberWarn: true})
        }else{
            this.setState({boardNumberWarn: false})
        }
    }

    validate = () => {
        const { version, productId, serialNumber, boardNumber} = this.state;
        return version.trim() !== '' && productId.trim() !== '' && serialNumber.trim() !== '' && boardNumber.trim() !== '';
    }

    reset = () => {
        this.setState({
            serialNumber: '',
            boardNumber: '',
            showLoader: false,
            errorMsg: '',
            variant: RichTextEditor.createEmptyValue(),
        })
    }

    render(){
          const columns = [{
            title: 'Versions',
            dataIndex: 'version',
            key: 'p_version',
          }, {
            title: 'Machines',
            render: (text, record) => (
                record.count+record.sold
            ),
            key: 'p_count',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:;">View</a>
                </span>
            ),
        }];

        let filterProduct = this.props.products.filter((product) => product._id === this.state.productId);
        return(
            <div className="container flex-row">
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
                                classValue={this.state.productIdWarn ? 'inputField-outline' : null}
                            >
                                {
                                    this.props.products.map((product) => (
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
                                classValue={this.state.versionWarn ? 'inputField-outline' : null}
                            >
                                {
                                    filterProduct[0] !== undefined && filterProduct[0] !== null && (
                                        filterProduct[0].details.map((version) =>(
                                            <Option value={version.version} key={version._id}>{version.version}</Option>
                                        ))
                                    )
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
                                classValue={this.state.serialNumberWarn ? 'inputField-outline' : null}
                            />
                            <InputType 
                                type="text"
                                value={this.state.boardNumber}
                                name="boardNumber" 
                                labelName="Board Number"
                                placeholder="Enter Product Board Number"
                                onInputChange={this.onInputChange}
                                isRequired={true}
                                classValue={this.state.boardNumberWarn ? 'inputField-outline' : null}
                            />
                            <ErrorBox errorMsgs={<strong>If any variant in this machine then&nbsp;<b>Please write down.</b></strong>}></ErrorBox>
                            <ReactTextEditor
                                labelName="Variant"
                                value={this.state.variant}
                                textChange={this.textChange}
                                placeholder="Enter Variant of Machine"
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
                {
                    this.props.products.map((product) => (
                        <div key={product._id} className="versionTable">
                            <Table 
                                dataSource={product.details} 
                                columns={columns}
                                rowKey={record => record._id}
                                title={() => <h3><b>{product.name}</b>&nbsp;<b>({product.count+product.sold})</b></h3>}
                                bordered
                                pagination={false}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return{
        machineDispatch: (data) => {
            dispatch({
                type: actionType.ADD_MACHINE,
                value: data
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductEntry)