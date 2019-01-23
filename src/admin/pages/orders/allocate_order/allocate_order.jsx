import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddVendor from './add_vendor/add_vendor';
import AddProduct from './add_product/add_product';
import OrderDetail from './order_detail/order_detail';
import Loader from '../../../../components/ui/loader/loader';
import ErrorBox from '../../../../components/form/error-box/error-box';
//
import {GetToken} from '../../../../helpers/token';
import {getAllProduct} from '../../../../services/apis/product_catalog';
import {removeProduct, checkout} from '../../../../services/apis/orders'
import * as actionType from '../../../../store/actions/action-type'

class AllocateOrder extends Component {

    state = {
        showLoader: true,
        gToken: GetToken()
    }

    productCallback = (data) => {
        if(data.status === 200){
            this.props.getProducts(data.data)
            this.setState({showLoader: false})
        }else {
            console.log(data.response)
        }
    }

    removeProductCallback = (data, serialNumber, id) => {
        if(data.status === 200){
            this.props.dispatchUnproceedRemoveProduct(data.data.order, id);
            this.props.dispatchUpdateMachineStatus(data.data.product, serialNumber);
        }else{
            console.log(data.response)
        }
    }

    removeProduct = (data, id) => {
        const {gToken} = this.state;
        if(gToken){
            removeProduct(this.removeProductCallback, id, data, gToken)
        }
    }

    proceedCallback = (data) => {
        if(data.status === 200){
            this.props.dispatchProceedOrder(data.data);
        }else{
            console.log(data.response)
        }
    }

    proceedOrder = (id) => {
        const {gToken} = this.state;
        if(gToken){
            checkout(this.proceedCallback, id, gToken)
        }
    }

    componentDidMount(){
        const {gToken} = this.state;
        if(gToken){
            getAllProduct(this.productCallback, gToken);
        }
    }

    render() {
        return(
            <div className="container flex-row">
                <div className="container-left">
                {
                    // this.state.showLoader && !this.props.companies
                    // ? <Loader/>
                    // : <AddVendor companies={this.props.companies}/>
                }
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        products: state.Products.products,
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllocateOrder)