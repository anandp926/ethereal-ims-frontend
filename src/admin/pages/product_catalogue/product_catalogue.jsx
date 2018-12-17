import React, { Component } from 'react'
import { Tabs, Icon } from 'antd';
import CreateProduct from './create_product/create_product';
import Dashboard from './dashboard/dashboard';
import CreateVersion from './create_version/create_version';
import ProductEntry from './product_entry/product_entry';
import './product_catalogue.css'

const TabPane = Tabs.TabPane;

class ProductCatalogue extends Component {
    render(){
        return(
            <Tabs defaultActiveKey="2"  >
                <TabPane tab={<span><Icon type="dashboard" />Dashboard</span>} key="1" >
                    <Dashboard/>
                </TabPane>
                <TabPane tab={<span><Icon type="form" />Product Entry</span>} key="2">
                    <ProductEntry/>
                </TabPane>
                <TabPane tab={<span><Icon type="copy" />Create Version</span>} key="3">
                    <CreateVersion/>
                </TabPane>
                <TabPane tab={<span><Icon type="setting" />Create Product</span>} key="4">
                    <CreateProduct />
                </TabPane>
            </Tabs>
        )
    }
}

export default ProductCatalogue