import React from 'react';
import { Collapse, Steps, Icon } from 'antd';
import sortBy from 'sort-by';
import Button from '../../../../components/form/button/button'
import ErrorBox from '../../../../components/form/error-box/error-box'
import {status} from '../../../../helpers/order_status';

const Panel = Collapse.Panel;
const Step = Steps.Step;

const ChangeStatus= (props) => {
    
    let filterOrder;
    if(props.Orders.length > 0){
        filterOrder = props.Orders.filter((order) => order.orderStatus.installed === false && order.orderStatus.allocated === true).sort(sortBy('-createdAt'));
    }

    if(filterOrder === undefined || filterOrder.length === 0){
        return(
            <div className="orders-container flex-row u-text-center">
                <h2><b style={{color: '#bcbcbc'}}>No Data</b></h2>
            </div>
        )
    }else{
        return (
            <div className="orders-container flex-row">
                <Collapse bordered={false} defaultActiveKey={['1']}>
                {
                    filterOrder.map((order) => (
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
                            <div className="change-status-div">
                                <h3><b>Change Status</b></h3>
                                <Button 
                                    classValue="change-status" 
                                    onClick={() => props.changeOrderStatus('allocate', order._id)} isType={order.orderStatus.allocated ? 'default' : 'primary'} 
                                    isSize="default" isDisabled={order.orderStatus.allocated ? true : false}
                                >
                                    allocate
                                </Button>
                                <Button 
                                    classValue="change-status" 
                                    onClick= {() => props.changeOrderStatus('packed', order._id)} isType={order.orderStatus.packed ? 'default' : 'primary'} 
                                    isSize="default" isDisabled={order.orderStatus.packed ? true : false}
                                >
                                    packed
                                </Button>
                                <Button 
                                    classValue="change-status" 
                                    onClick={() => props.changeOrderStatus('shipped', order._id)} isType={order.orderStatus.shipped ? 'default' : 'primary'} 
                                    isSize="default" isDisabled={order.orderStatus.shipped ? true : false}
                                >
                                    shipped
                                </Button>
                                <Button 
                                    classValue="change-status" 
                                    onClick={() => props.changeOrderStatus('installed', order._id)} isType={order.orderStatus.installed ? 'default' : 'primary'} 
                                    isSize="default" isDisabled={order.orderStatus.installed ? true : false}
                                >
                                    installed
                                </Button>
                                <ErrorBox errorMsgs="Please change status order Order-by"/>
                            </div>
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
}

export default ChangeStatus