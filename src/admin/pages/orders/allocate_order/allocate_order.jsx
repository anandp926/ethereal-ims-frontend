import React, { Component } from 'react';
import {Select, Tabs, Icon} from 'antd'
import Form from '../../../../components/form/form';
import Dropdown from '../../../../components/form/form-controls/select';
import Button from '../../../../components/form/button/button';
import Loader from '../../../../components/ui/loader/loader';
import ErrorBox from '../../../../components/form/error-box/error-box';

const Option = Select.Option;

class AllocateOrder extends Component {

    state = {
        orderId: '',
        errorMsg: false,
        showLoader: false
    }

    onProductSelect = (value) => {
        //
    }

    render() {
        return(
            <div className="container flex-row">
                <div className="container-left">
                    <Form onSubmitHandler={this.onFormSubmit}>
                        <fieldset>
                            <legend>Add Vendor</legend>
                            <Dropdown
                                labelName="Vendor/Company"
                                placeholder="Select Vendor"
                                optionFilterProp="children"
                                onSelect={this.onProductSelect}
                                size="large"
                                isRequired={true}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                // classValue={this.state.companyIdWarn ? 'inputField-outline' : null}
                            >
                                <Option value="sdf3" key='1'>Ethereal Machines</Option>
                            </Dropdown>
                            { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                            { this.state.showLoader ? <Loader>Creating...</Loader> : null }
                            <div className="issue-form-button">
                                <Button isType='primary' htmlTypes='submit'>Add</Button>
                            </div>
                        </fieldset>
                    </Form>
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
                                // classValue={this.state.companyIdWarn ? 'inputField-outline' : null}
                            >
                                <Option value="sdf3" key='1'>Halo</Option>
                            </Dropdown>
                            <Dropdown
                                labelName="Serial Number"
                                placeholder="Select Serial Number"
                                optionFilterProp="children"
                                onSelect={this.onProductSelect}
                                size="large"
                                isRequired={true}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                // classValue={this.state.companyIdWarn ? 'inputField-outline' : null}
                            >
                                <Option value="sdf3" key='1'>gfutfgiu</Option>
                            </Dropdown>
                            { this.state.errorMsg ? <ErrorBox errorMsgs={this.state.errorMsg} /> : null}
                            { this.state.showLoader ? <Loader>Creating...</Loader> : null }
                            <div className="issue-form-button">
                                <Button isType='primary' htmlTypes='submit'>Add</Button>
                            </div>
                        </fieldset>
                    </Form>
                </div>
                <div className="container-right">
                    <div className="order-detail-container">
                        <div className="order-detail" style={{overflowX:'auto'}}>
                            <table border="1">
                                <thead>
                                    <tr>
                                        <td colSpan="4">
                                            <h3><b>Ethereal Machines</b></h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Sr. </th>
                                        <th>Product Name</th>
                                        <th>Serial Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Halo</td>
                                        <td>kdytskmdsfdyrns</td>
                                        <td>
                                            <span><a href="javascript:;">Remove</a></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Pentagram</td>
                                        <td>kdytskmdsfdyrns</td>
                                        <td>
                                            <span><a href="javascript:;">Remove</a></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Ray</td>
                                        <td>kdytskmdsfdyrns</td>
                                        <td>
                                            <span><a href="javascript:;">Remove</a></span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="4" className="text-right">
                                            <Button isType="primary">Proceed</Button>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllocateOrder