/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../../../../components/form/form';
import InputType from '../../../../components/form/form-controls/input';
import Button from '../../../../components/form/button/button';
import ErrorBox from '../../../../components/form/error-box/error-box';
import Loader from '../../../../components/ui/loader/loader';
import Dropdown from '../../../../components/form/form-controls/select' 
import VersionDetailModal from '../../../../components/layout/modal/modal'
import RichTextEditor from 'react-rte'
import ReactTextEditor from '../../../../components/form/rich-text-editor/rich-text-editor'
import Card from '../../../../components/ui/card/card'
import Divider from '../../../../components/ui/divider/divider'
import { Select, Modal } from 'antd';
//
import { GetToken } from '../../../../helpers/token';
import {createVersion} from '../../../../services/apis/product_catalog';
import * as actionType from '../../../../store/actions/action-type';
//
import './create_version.css'

const Option = Select.Option;

class CreateVersion extends Component {

    state = {
        gToken: GetToken(),
        version: '',
        versionDetail: RichTextEditor.createEmptyValue(),
        productId: '',
        detailsId: '',
        productIdWarn: false,
        versionWarn: false,
        errorMsg: false,
        showLoader: false,
        visible: false
    };

    success = () => {
        Modal.success({
            title: 'Successful',
            content: 'Product version has been created.',
        });
    };

    callback = (data) => {
        if(data.status === 200){
            this.props.versionDispatch(data.data);
            this.success();
            this.reset();
        }else {
            this.setState({errorMsg: 'Something went wrong. Please try again ', showLoader: false});
        }
    }

    onFormSubmit = (e) => {
        this.setState({showLoader: true, errorMsg: ''})
        const {productId, versionDetail, version, gToken} = this.state;
        e.preventDefault();

        const data = {
            version: version,
            versionDetail: versionDetail.toString('html')
        }
        if(this.validate() && gToken){
            this.outlineColor();
            createVersion(this.callback, productId, data, gToken)
        }else {
            this.outlineColor();
            this.setState({errorMsg: 'Please fill all the required field', showLoader: false});
        }
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

    outlineColor = () => {
        if(!this.state.productId.trim()){
            this.setState({productIdWarn:true})
        }else{
            this.setState({productIdWarn:false})
        }if(!this.state.version.trim()){
            this.setState({versionWarn:true})
        }else{
            this.setState({versionWarn:false})
        }
    }

    validate = () => {
        const { version, productId } = this.state;
        return version.trim() !== '' && productId.trim() !== '';
    }

    reset = () => {
        this.setState({
            productId: '',
            version: '',
            versionDetail: RichTextEditor.createEmptyValue(),
            showLoader: false,
            errorMsg: ''
        })
    }

    openModal = (pId, vId) => {
        this.setState({
            visible: true, 
            productId: pId, 
            detailsId: vId
        })
    }

    cancelClick = () => {
        this.setState({
            visible: false, 
            productId: '',
            detailsId: '',
        })
    }

    render(){
        
        let filterProduct = this.props.products.filter((product) => product._id === this.state.productId);
        let filterDetail = filterProduct.length > 0 ? filterProduct[0].details.filter((detail) => detail._id === this.state.detailsId) : '';
        return(
            <div className="container flex-row">
                <VersionDetailModal 
                    heading="Version Details"
                    showModal={this.state.visible}
                    cancelClick={this.cancelClick}
                    footer={null}
                    maskClosable={false}
                >
                    {filterDetail.length > 0 ? <div dangerouslySetInnerHTML={{ __html: filterDetail[0].versionDetail }} /> : 'No data'}
                </VersionDetailModal>
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
                                    this.props.products.map((product) => (
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
                    {
                        this.props.products.map((product) => (
                            (
                                <div key={product._id} className="versionTable">
                                    <Card>
                                        <h3><b>{product.name} Versions</b></h3>
                                        <Divider/>
                                        {
                                            product.details.length > 0
                                            ?
                                            <div className="versionList">
                                                {
                                                    product.details.map((version) => (
                                                        <a onClick={() => this.openModal(product._id, version._id)} className="versionListCol" key={version._id}>
                                                            {version.version}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                            : <div className="u-text-center">No data</div>
                                        }
                                        
                                    </Card>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return{
        versionDispatch: (data) => {
            dispatch({
                type: actionType.ADD_VERSION,
                value: data
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateVersion)