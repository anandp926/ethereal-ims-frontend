/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Tabs, Icon, Modal} from 'antd';
import AllocateOrder from './allocate_order/allocate_order';
import OrderList from './order_list/order_list';
import ChangeStatus from './change_status/change_status'
import Loader from '../../../components/ui/loader/loader'
import './orders.css'
//
import * as actionType from '../../../store/actions/action-type';
import getCompanylist from '../../../services/apis/get-company';
import {GetToken} from '../../../helpers/token'
import {getOrders, changeStatus} from '../../../services/apis/orders'

const TabPane = Tabs.TabPane;

class Orders extends Component {
    state = {
        gToken: GetToken(),
        showOLoader: true,
        showCLoader: true
    }

    success = () => {
        Modal.success({
            title: 'Successful',
            content: 'Order status has been changed :).',
        });
    }

    error = () => {
        Modal.error({
            title: 'Oops',
            content: 'Something went wrong. Please try again later :(',
        })
    }

    callback = (data) => {
        if(data.status === 200) {
            this.props.dispatchOrders(data.data);
            this.setState({showLoader: false});
        }
    }

    changeStatusCallback = (data, status) => {
        if(data.status === 200){
            if(status === 'installed'){
                this.props.dispatchChangeOrderStatus(data.data.updatedOrder);
                this.props.dispatchNewVendorData(data.data.newVendorData);
            }else {
                this.props.dispatchChangeOrderStatus(data.data)
            }
            this.success()
        }else {
            this.error();
            console.log(data.response)
        }
    }

    changeOrderStatus = (status, id) => {
        const {gToken} = this.state;
        if(gToken){
            changeStatus(this.changeStatusCallback, id, {status: status}, gToken)
        }
    }

    companyCallback = (data) => {
        if(data.status === 200){
            this.props.getCompany(data.data);
            this.setState({showCLoader: false})
        }else {
            console.log(data.response);
        }
    }

    componentDidMount () {
        const {gToken} = this.state;
        if(gToken){
            getOrders(this.callback, this.state.gToken);
            getCompanylist(this.companyCallback, gToken);
        }
    }

    render() {
        
        // for unproceed order
        let unproceedOrder;
        if(this.props.orders.length > 0) {
            unproceedOrder = this.props.orders.filter((orders) => orders.orderStatus.allocated === false);
        }

        if(this.state.showOLoader && this.state.showCLoader && !this.props.orders && ! this.props.companies){
            return <Loader/>
        }else if(this.props.orders){
            return(
                <Tabs defaultActiveKey="1" >
                    <TabPane tab={<span><Icon type="dashboard" />Dashboard</span>} key="1" >
                        Orders Dashboard
                    </TabPane>
                    <TabPane tab={<span><Icon type="ordered-list" />Order List</span>} key="2">
                        <OrderList Orders={this.props.orders} companies={this.props.companies}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="edit" />Change Status</span>} key="3">
                        <ChangeStatus Orders={this.props.orders} changeOrderStatus={this.changeOrderStatus} companies={this.props.companies}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="form" />Allocate Order</span>} key="4">
                        <AllocateOrder 
                            Orders={this.props.orders} 
                            unproceedOrder= {unproceedOrder} 
                            companies={this.props.companies}
                        />
                    </TabPane>
                </Tabs>
            )
        }
    }
}

function mapStateToProps (state) {
    return {
        orders: state.Orders.orders,
        companies: state.Company.company,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getCompany: (data) => {
            dispatch({
                type: actionType.COMPANY,
                value: data
            })
        },
        dispatchOrders: (data) => {
            dispatch({
                type: actionType.ORDERS,
                value: data
            })
        },
        dispatchChangeOrderStatus: (data) => {
            dispatch({
                type: actionType.UPDATE_ORDER_STATUS,
                value: data
            })
        },
        dispatchNewVendorData: (data) => {
            dispatch({
                type: actionType.ADD_VENDOR_PRODUCTS,
                value: data
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Orders)