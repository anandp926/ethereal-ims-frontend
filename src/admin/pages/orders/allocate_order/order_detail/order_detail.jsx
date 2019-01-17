import React, { Component } from 'react';
import Button from '../../../../../components/form/button/button';

class OrderDetail extends Component {
    render(){
        let filterVendor = this.props.companies.filter((vendor) => vendor._id === this.props.unproceedOrder.vendorId)
        return(
            <table border="1">
                <thead>
                    <tr>
                        <td colSpan="4">
                            <h3><b>{filterVendor[0] ? filterVendor[0].name : 'Yet to be add'}</b></h3>
                            {filterVendor[0] ? filterVendor[0].location : ''}
                        </td>
                    </tr>
                    <tr>
                        <th>Sr. </th>
                        <th>Product Name</th>
                        <th>Serial Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.unproceedOrder.products !== undefined && this.props.unproceedOrder.products.length > 0 && (
                            this.props.unproceedOrder.products.map((product, index) => (
                                <tr key={product._id}>
                                    <td>{index}</td>
                                    <td>{product.name}</td>
                                    <td>{product.machineSRN}</td>
                                    <td>
                                        <span><a href="javascript:;">Remove</a></span>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-right">
                            {
                                this.props.unproceedOrder.products !== undefined && this.props.unproceedOrder.products.length > 0
                                ? <Button isType="primary">Proceed</Button>
                                : null
                            }
                        </td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}

export default OrderDetail