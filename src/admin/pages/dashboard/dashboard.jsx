/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '../../../components/ui/card/card';
import CardHeading from '../../../components/ui/card/card-heading/card-heading';
import Divider from '../../../components/ui/divider/divider';
import AnalogClock from '../../../components/ui/analog_watch/analog_watch';
import FullScreenLoader from '../../../components/ui/fullscreen_loader/fullscreen_loader'
import '../../../common_css/dashboard.css'
import { Tree, Icon } from 'antd';
//
import * as actionType from '../../../store/actions/action-type';
import {getAllProduct} from '../../../services/apis/product_catalog';
import {getOrders} from '../../../services/apis/orders'
import {GetToken} from '../../../helpers/token';

const TreeNode = Tree.TreeNode;

class Dashboard extends Component {

    state = {
        gToken: GetToken(),
        showPLoader: this.props.firstRunProducts ? true : false,
        showOLoader: this.props.firstRunOrders ? true : false
    }

    productCallback = (data) => {
        if(data.status === 200){
            this.props.getProducts(data.data);
            this.setState({showPLoader: false});
            this.props.dispatchUpdateFirstRunProducts(false)
        }else {
            console.log(data.response);
            this.setState({showPLoader: false})
        }
    }

    callback = (data) => {
        if(data.status === 200) {
            this.props.dispatchOrders(data.data);
            this.setState({showOLoader: false});
            this.props.dispatchUpdateFirstRunOrders(false);
        }else{
            this.setState({showOLoader: false})
        }
    }

    componentDidMount() {
        const {gToken} = this.state
        if(gToken){
            if(this.props.firstRunProducts){
                getAllProduct(this.productCallback, gToken);
            }
            if(this.props.firstRunOrders){
                getOrders(this.callback, this.state.gToken);
            }
        }
    }

    render(){
        var haloCount=0, haloSold=0, rayCount=0, raySold=0, pentagramCount=0, pentagramSold=0;
        var alctCount=0, pkdCount=0, shpdCount=0, iCount=0;
        if(this.props.products.length > 0) {
            this.props.products.map((product) => {
                if(product.name === 'Halo'){
                    haloCount = product.count;
                    haloSold = product.sold;
                }else if(product.name === 'Pentagram'){
                    pentagramCount = product.count;
                    pentagramSold = product.sold;
                }else if(product.name === 'Ray'){
                    rayCount = product.count;
                    raySold = product.sold
                }
            });
        }
        if(this.props.orders.length > 0) {
            this.props.orders.map((order) => {
                if(order.orderStatus.allocated && !order.orderStatus.packed && !order.orderStatus.shipped && !order.orderStatus.installed){
                    alctCount++;
                }else if(order.orderStatus.packed && order.orderStatus.packed && !order.orderStatus.shipped && !order.orderStatus.installed){
                    pkdCount++;
                }else if(order.orderStatus.shipped && order.orderStatus.packed && order.orderStatus.shipped && !order.orderStatus.installed){
                    shpdCount++;
                }else if(order.orderStatus.allocated && order.orderStatus.packed && order.orderStatus.shipped && order.orderStatus.installed){
                    iCount++;
                }
            } );
        }
        return(
            <div className="dashboard">
            {
                this.state.showOLoader && this.state.showPLoader
                ? <FullScreenLoader/>
                : null
            }
                <div className="dashboard-card-list">
                    <div className="dashboard-card-item">
                        <Card>
                            <CardHeading title="Products" classValue="dashboard-card-heading"/>
                            <Divider/>
                            <div className="dashboard-inventory-detail">
                                <Tree
                                    showIcon
                                    defaultExpandedKeys={['0-0']}
                                    onSelect={this.onSelect}
                                >
                                    <TreeNode title={<b>Machines</b>} key="0-0">
                                        <TreeNode 
                                            icon={<img className="ray-icon" alt=""/>} 
                                            title={<span style={{color:'#0c3ff7'}}>Total ({haloCount+rayCount+pentagramCount+haloSold+raySold+pentagramSold})</span>} 
                                            key="0-0-0-0" 
                                        />
                                        <TreeNode icon={<img className="ray-icon" alt=""/>} title={`Ray (${rayCount+raySold})`} key="0-0-0-1" />
                                        <TreeNode icon={<img className="halo-icon" alt=""/>} title={`Halo (${haloCount+haloSold})`} key="0-0-0-2" />
                                        <TreeNode icon={<img className="pentagram-icon" alt=""/>} title={`Pentagram (${pentagramCount+pentagramSold})`} key="0-0-0-3" />
                                    </TreeNode>
                                </Tree>
                            </div>
                        </Card>
                    </div>
                    <div className="dashboard-card-item">
                        <Card>
                            <CardHeading title="Available Products" classValue="dashboard-card-heading"/>
                            <Divider/>
                            <div className="dashboard-inventory-detail">
                                <Tree
                                    showIcon
                                    defaultExpandedKeys={['0-0']}
                                    onSelect={this.onSelect}
                                >
                                    <TreeNode title={<b>Available Machines</b>} key="0-0">
                                        <TreeNode icon={<img className="ray-icon" alt=""/>} title={<span style={{color:'#0c3ff7'}}>Total ({haloCount+rayCount+pentagramCount})</span>} key="0-0-0-0" />
                                        <TreeNode icon={<img className="ray-icon" alt=""/>} title={`Ray (${rayCount})`} key="0-0-0-1" />
                                        <TreeNode icon={<img className="halo-icon" alt=""/>} title={`Halo (${haloCount})`} key="0-0-0-2" />
                                        <TreeNode icon={<img className="pentagram-icon" alt=""/>} title={`Pentagram (${pentagramCount})`} key="0-0-0-3" />
                                    </TreeNode>
                                </Tree>
                            </div>
                        </Card>
                    </div>
                    <div className="dashboard-card-item">
                        <Card>
                            <AnalogClock />
                        </Card>
                    </div>
                    <div className="dashboard-card-item">
                        <Card>
                            <CardHeading title="Sold Products" classValue="dashboard-card-heading" />
                            <Divider/>
                            <div className="dashboard-inventory-detail">
                                <Tree
                                    showIcon
                                    defaultExpandedKeys={['0-0']}
                                    onSelect={this.onSelect}
                                >
                                    <TreeNode title={<b>Toatal Sold</b>} key="0-0">
                                        <TreeNode icon={<img className="ray-icon" alt=""/>} title={<span style={{color:'#0c3ff7'}}>Total ({haloSold+raySold+pentagramSold})</span>} key="0-0-0-0" />
                                        <TreeNode icon={<img className="ray-icon" alt=""/>} title={`Ray (${raySold})`} key="0-0-0-1" />
                                        <TreeNode icon={<img className="halo-icon" alt=""/>} title={`Halo (${haloSold})`} key="0-0-0-2" />
                                        <TreeNode icon={<img className="pentagram-icon" alt=""/>} title={`Pentagram (${pentagramSold})`} key="0-0-0-3" />
                                    </TreeNode>
                                </Tree>
                            </div>
                        </Card>
                    </div>
                    <div className="dashboard-card-item">
                        <Card>
                            <CardHeading title="Orders" classValue="dashboard-card-heading"/>
                            <Divider/>
                            <div className="dashboard-inventory-detail">
                                <Tree
                                    showIcon
                                    defaultExpandedKeys={['0-0']}
                                    onSelect={this.onSelect}
                                >
                                    <TreeNode title={<b style={{color:'#0c3ff7'}}>Total Orders ({iCount+pkdCount+shpdCount+alctCount})</b>} key="0-0">
                                        <TreeNode icon={<Icon type="smile" />} title={`Installed (${iCount})`} key="0-0-0-0" />
                                        <TreeNode icon={<Icon type="car" />} title={`Shipped (${shpdCount})`} key="0-0-0-1" />
                                        <TreeNode icon={<Icon type="gift" />} title={`Packed (${pkdCount})`} key="0-0-0-2" />
                                        <TreeNode icon={<Icon type="check-circle" />} title={`Allocated (${alctCount})`} key="0-0-0-3" />
                                    </TreeNode>
                                </Tree>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return{
        firstRunOrders: state.Orders.firstRun,
        firstRunProducts: state.Products.firstRun,
        orders: state.Orders.orders,
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
        dispatchOrders: (data) => {
            dispatch({
                type: actionType.ORDERS,
                value: data
            })
        },
        dispatchUpdateFirstRunOrders: (data) => {
            dispatch({
                type: actionType.UPDATE_FIRST_RUN_ORDERS,
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)