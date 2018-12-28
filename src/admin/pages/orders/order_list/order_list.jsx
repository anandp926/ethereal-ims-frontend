import React, { Component } from 'react';
import { Collapse, Steps, Icon } from 'antd';
import {status} from '../../../../helpers/order_status'
import './order_list.css'

const Panel = Collapse.Panel;
const Step = Steps.Step;


const orderStatus = {
    "allocated" : true,
    "packed" : true,
    "shipped" : true,
    "installed" : false
};

class OrderList extends Component {
    render() {
        return(
            <div className="orders-container flex-row">
                <Collapse bordered={false} defaultActiveKey={['1']}>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((index) => (
                        <Panel 
                            header={
                                    <div>
                                        <span className="vendor-company-name">Ethereal Machiens, Bangaluru.</span>
                                        <span className="vendor-order-status">{status(orderStatus)}</span>
                                        <div className="vendor-order-id"><strong>Order ID:</strong> 5c24bd8f655fbb352480a6bc</div>
                                    </div> 
                                } 
                            key={index}
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
                                        <tr>
                                            <td>1</td>
                                            <td>Halo</td>
                                            <td>kdytskmdsfdyrns</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Pentagram</td>
                                            <td>kdytskmdsfdyrns</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Ray</td>
                                            <td>kdytskmdsfdyrns</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Steps>
                                <Step status={orderStatus.allocated ? "finish" : "wait"} title="Allocated" icon={<Icon type="check-circle" />} />
                                <Step status={orderStatus.packed ? "finish" : "wait"} title="Packed" icon={<Icon type="gift" />} />
                                <Step status={orderStatus.shipped ? "finish" : "wait"} title="Shipped" icon={<Icon type="car" />} />
                                <Step status={orderStatus.installed ? "finish" : "wait"} title="Installed" icon={<Icon type="smile-o" />} />
                            </Steps>
                        </Panel>
                    ))
                }
                </Collapse>
            </div>
        )
    }
}

export default OrderList