import React, { Component } from 'react';
import {Tabs, Icon} from 'antd';
import AllocateOrder from './allocate_order/allocate_order';
import OrderList from './order_list/order_list'
import './orders.css'

const TabPane = Tabs.TabPane;

class Orders extends Component {

    render() {
        return(
            <Tabs defaultActiveKey="2" >
                <TabPane tab={<span><Icon type="dashboard" />Dashboard</span>} key="1" >
                    Orders Dashboard
                </TabPane>
                <TabPane tab={<span><Icon type="ordered-list" />Order List</span>} key="2">
                    <OrderList/>
                </TabPane>
                <TabPane tab={<span><Icon type="form" />Allocate Order</span>} key="3">
                    <AllocateOrder/>
                </TabPane>
            </Tabs>
        )
    }
}


export default Orders