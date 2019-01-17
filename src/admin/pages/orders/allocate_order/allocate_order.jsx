import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddVendor from './add_vendor/add_vendor';
import AddProduct from './add_product/add_product';
import OrderDetail from './order_detail/order_detail';
import Loader from '../../../../components/ui/loader/loader';
import ErrorBox from '../../../../components/form/error-box/error-box';
//
import {GetToken} from '../../../../helpers/token';
import getCompanylist from '../../../../services/apis/get-company';
import {getAllProduct} from '../../../../services/apis/product_catalog';
import {getUnproceedOrder} from '../.././../../services/apis/orders'
import * as actionType from '../../../../store/actions/action-type'

class AllocateOrder extends Component {

    state = {
        showLoader: true,
        gToken: GetToken(),
        vendorDisable: this.props.unproceedOrder
    }
    
    companyCallback = (data) => {
        if(data.status === 200){
            this.props.getCompany(data.data);
            this.setState({showLoader: false})
        }else {
            console.log(data.response);
        }
    }

    productCallback = (data) => {
        if(data.status === 200){
            this.props.getProducts(data.data)
            this.setState({showLoader: false})
        }else {
            console.log(data.response)
        }
    }

    unproceedCallback = (data) => {
        if(data.status === 200) {
            this.props.dispatchUnproceed(data.data)
        }else {
            console.log(data.response)
        }
    }

    componentDidMount(){
        const {gToken} = this.state;
        if(gToken){
            getCompanylist(this.companyCallback, gToken);
            getAllProduct(this.productCallback, gToken);
            getUnproceedOrder(this.unproceedCallback, gToken);
        } 
    }

    render() {
        console.log(this.props.test.unproceed)
        return(
            <div className="container flex-row">
                <div className="container-left">
                {
                    // this.state.showLoader && !this.props.companies
                    // ? <Loader/>
                    // : <AddVendor companies={this.props.companies}/>
                }
                    <AddVendor companies={this.props.companies} vendorDisable={this.state.vendorDisable}/>
                    <AddProduct products={this.props.products} unproceedOrder={this.props.unproceedOrder}/>
                </div>
                <div className="container-right">
                    <div className="order-detail-container">
                        <div className="order-detail" style={{overflowX:'auto'}}>
                            <OrderDetail unproceedOrder={this.props.unproceedOrder} companies={this.props.companies}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        companies: state.Company.company,
        products: state.Products.products,
        unproceedOrder: state.Orders.unproceed,
        test: state.Orders
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getCompany: (data) => {
            dispatch({
                type: actionType.COMPANY,
                value: data
            })
        },
        getProducts: (data) => {
            dispatch({
                type: actionType.PRODUCTS,
                value: data
            })
        },
        dispatchUnproceed: (data) => {
            dispatch({
                type: actionType.UNPROCEED_ORDER,
                value: data
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllocateOrder)