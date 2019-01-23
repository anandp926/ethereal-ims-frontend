import React from 'react';
import { Collapse, Steps, Icon } from 'antd';
import {status} from '../../../../helpers/order_status'
import sortBy from 'sort-by';
import './order_list.css'

const Panel = Collapse.Panel;
const Step = Steps.Step;

const OrderList= (props) => {
    return(
        <div className="orders-container flex-row">
            <Collapse bordered={false} defaultActiveKey={['1']}>
            {
                props.Orders.sort(sortBy('-createdAt')).map((order) => (
                    <Panel 
                        header={
                                <div>
                                    {
                                        props.companies.map((company) => {
                                            if(company._id === order.vendorId){
                                                return <span className="vendor-company-name" key={company._id}>{company.name}, {company.location}.</span>
                                            }
                                        })
                                    }
                                    <span className="vendor-order-status">{status(order.orderStatus)}</span>
                                    <div className="vendor-order-id"><strong>Order ID:</strong> {order._id}</div>
                                </div> 
                            } 
                        key={order._id}
                        showArrow={false}
                    >
                        <div className="order-detail order-detail-list" style={{overflowX:'auto'}}>
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th>Sr. </th>
                                        <th>Product Name</th>
                                        <th>Serial Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order.products.map((product, index) => (
                                            <tr key={product._id}>
                                                <td>{index}</td>
                                                <td>{product.name}</td>
                                                <td>{product.machineSRN}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Steps>
                            <Step status={order.orderStatus.allocated ? "finish" : "wait"} title="Allocated" icon={<Icon type="check-circle" />} />
                            <Step status={order.orderStatus.packed ? "finish" : "wait"} title="Packed" icon={<Icon type="gift" />} />
                            <Step status={order.orderStatus.shipped ? "finish" : "wait"} title="Shipped" icon={<Icon type="car" />} />
                            <Step status={order.orderStatus.installed ? "finish" : "wait"} title="Installed" icon={<Icon type="smile-o" />} />
                        </Steps>
                    </Panel>
                ))
            }
            </Collapse>
        </div>
    )
}

export default OrderList