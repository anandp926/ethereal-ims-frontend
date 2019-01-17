import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Tabs, Icon} from 'antd';
import AllocateOrder from './allocate_order/allocate_order';
import OrderList from './order_list/order_list';
import Loader from '../../../components/ui/loader/loader'
import './orders.css'
//
import * as actionType from '../../../store/actions/action-type'
import {GetToken} from '../../../helpers/token'
import {getOrders} from '../../../services/apis/orders'

const TabPane = Tabs.TabPane;

class Orders extends Component {
    state = {
        gToken: GetToken(),
        showLoader: true
    }

    callback = (data) => {
        if(data.status === 200) {
            this.props.dispatchOrders(data.data);
            this.setState({showLoader: false});
        }
    }

    componentDidMount () {
        getOrders(this.callback, this.state.gToken);
    }

    render() {
        if(this.state.showLoader && !this.props.orders){
            return <Loader/>
        }else if(this.props.orders){
            return(
                <Tabs defaultActiveKey="4" >
                    <TabPane tab={<span><Icon type="dashboard" />Dashboard</span>} key="1" >
                        Orders Dashboard
                    </TabPane>
                    <TabPane tab={<span><Icon type="ordered-list" />Order List</span>} key="2">
                        <OrderList Orders={this.props.order}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="edit" />Change Status</span>} key="3">
                        Change Order Status
                    </TabPane>
                    <TabPane tab={<span><Icon type="form" />Allocate Order</span>} key="4">
                        <AllocateOrder Orders={this.props.order}/>
                    </TabPane>
                </Tabs>
            )
        }
    }
}

function mapStateToProps (state) {
    return {
        orders: state.Orders.orders
    }
}

function mapDispatchToProps (dispatch) {
    return {
        dispatchOrders: (data) => {
            dispatch({
                type: actionType.ORDERS,
                value: data
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Orders)