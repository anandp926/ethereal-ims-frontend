/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Modal } from 'antd';
import AddVendor from './add_vendor/add_vendor';
import AddProduct from './add_product/add_product';
import OrderDetail from './order_detail/order_detail';
import Loader from '../../../../components/ui/loader/loader';
import FullScreenLoading from '../../../../components/ui/fullscreen_loader/fullscreen_loader'
//
import {GetToken} from '../../../../helpers/token';
import {getAllProduct} from '../../../../services/apis/product_catalog';
import {removeProduct, checkout, removeUnproceedOrder} from '../../../../services/apis/orders'
import * as actionType from '../../../../store/actions/action-type'

class AllocateOrder extends Component {

    state = {
        showLoader: this.props.firstRunProducts ? true : false,
        gToken: GetToken(),
        orderDetailEditLoader: false,
        errMsg: ''
    }

    success = () => {
        Modal.success({
            title: 'Successful',
            content: 'Order has been allocated :).',
        });
    }

    error = () => {
        Modal.error({
            title: 'Oops',
            content: 'Something went wrong. Please try again later :(',
        })
    }

    productCallback = (data) => {
        if(data.status === 200){
            this.props.getProducts(data.data);
            this.setState({showLoader: false});
            this.props.dispatchUpdateFirstRunProducts(false);
        }else {
            this.error();
            console.log(data.response)
        }
    }

    removeProductCallback = (data, serialNumber, id) => {
        if(data.status === 200){
            this.setState({orderDetailEditLoader: false});
            this.props.dispatchUnproceedRemoveProduct(data.data.order, id);
            this.props.dispatchUpdateMachineStatus(data.data.product, serialNumber);
        }else{
            this.setState({orderDetailEditLoader: false});
            this.error();
            console.log(data.response)
        }
    }

    removeProduct = (data, id) => {
        this.setState({orderDetailEditLoader: true});
        const {gToken} = this.state;
        if(gToken){
            removeProduct(this.removeProductCallback, id, data, gToken)
        }
    }

    removeOrderCallback = (data) => {
        if(data.status === 200){
            this.setState({orderDetailEditLoader: false});
            this.props.dispatchRemoveOrder(data.data)
        } else{
            this.setState({orderDetailEditLoader: false});
            this.error();
            console.log(data.response)
        }
    }

    removeOrder = (id) => {
        this.setState({orderDetailEditLoader: true});
        const {gToken} = this.state;
        if(gToken){
            removeUnproceedOrder(this.removeOrderCallback, id, gToken)
        }
    }

    proceedCallback = (data) => {
        if(data.status === 200){
            this.setState({orderDetailEditLoader: false});
            this.props.dispatchProceedOrder(data.data);
            this.success();
        }else{
            this.setState({orderDetailEditLoader: false});
            this.error();
            console.log(data.response)
        }
    }

    proceedOrder = (id) => {
        this.setState({orderDetailEditLoader: true});
        const {gToken} = this.state;
        if(gToken){
            checkout(this.proceedCallback, id, gToken)
        }
    }

    componentDidMount(){
        const {gToken} = this.state;
        if(gToken){
            if(this.props.firstRunProducts){
                getAllProduct(this.callback, gToken);
            }
        }
    }

    render() {
        if(this.state.showLoader){
            return <Loader/>
        }else {
            return(
                <div className="container flex-row">
                {
                    this.state.orderDetailEditLoader
                    ? <FullScreenLoading />
                    : null
                }
                    <div className="container-left">
                        <AddVendor companies={this.props.companies} unproceedOrder = {this.props.unproceedOrder} />
                        <AddProduct products={this.props.products} unproceedOrder = {this.props.unproceedOrder}/>
                    </div>
                    <div className="container-right">
                        <div className="order-detail-container">
                            <div className="order-detail" style={{overflowX:'auto'}}>
                                <OrderDetail 
                                    Orders= {this.props.Orders} 
                                    proceedOrder={this.proceedOrder} 
                                    removeProduct={this.removeProduct} 
                                    companies={this.props.companies}
                                    removeOrder={this.removeOrder}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } 
    }
}

function mapStateToProps(state) {
    return{
        products: state.Products.products,
        firstRunProducts: state.Products.firstRun
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getProducts: (data) => {
            dispatch({
                type: actionType.PRODUCTS,
                value: data
            })
        },
        dispatchUpdateMachineStatus: (data, serialNumber) => {
            dispatch({
                type: actionType.UPDATE_MACHINE_STATUS,
                value: {data, serialNumber}
            })
        },
        dispatchUnproceedRemoveProduct: (data, id) => {
            dispatch({
                type: actionType.UNPROCEED_REMOVE_PRODUCT,
                value: {data, id}
            })
        },
        dispatchProceedOrder: (data) => {
            dispatch({
                type: actionType.UPDATE_ORDER_STATUS,
                value: data
            })
        },
        dispatchRemoveOrder: (data) => {
            dispatch({
                type: actionType.REMOVE_UNPROCEED_ORDER,
                value: data
            })
        },
        dispatchUpdateFirstRunProducts: (data) => {
            dispatch({
                type: actionType.UPDATE_FIRST_RUN_PRODUCTS,
                value: data
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllocateOrder)