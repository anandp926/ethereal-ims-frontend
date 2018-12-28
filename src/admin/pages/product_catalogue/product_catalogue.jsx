import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Tabs, Icon } from 'antd';
import CreateProduct from './create_product/create_product';
import Dashboard from './dashboard/dashboard';
import CreateVersion from './create_version/create_version';
import MachineEntry from './product_entry/product_entry';
import './product_catalogue.css'
import Loader from '../../../components/ui/loader/loader'
//
import * as actionType from '../../../store/actions/action-type';
import {getAllProduct} from '../../../services/apis/product_catalog';
import {GetToken} from '../../../helpers/token'

const TabPane = Tabs.TabPane;

class ProductCatalogue extends Component {

    state= {
        gToken: GetToken(),
        showLoader: true
    }

    callback = (data) => {
        if(data.status === 200){
            this.props.getProducts(data.data)
            this.setState({showLoader: false})
        }else {
            console.log(data.response)
        }
    }

    componentDidMount() {
        getAllProduct(this.callback, this.state.gToken);
    }

    render(){
        if(this.state.showLoader && !this.props.products){
            return <Loader />
        }else{
            return(
                <Tabs defaultActiveKey="1"  >
                    <TabPane tab={<span><Icon type="dashboard" />Dashboard</span>} key="1" >
                        <Dashboard products={this.props.products}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="form" />Machine Entry</span>} key="2">
                        <MachineEntry products={this.props.products}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="copy" />Create Version</span>} key="3">
                        <CreateVersion products={this.props.products}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="setting" />Create Product</span>} key="4">
                        <CreateProduct products={this.props.products}/>
                    </TabPane>
                </Tabs>
            )
        }
    }
}

function mapStateToProps(state) {
    return{
        products: state.Products.products
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getProducts: (data) => {
            dispatch({
                type: actionType.PRODUCTS,
                value: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalogue)