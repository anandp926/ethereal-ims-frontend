/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from '../../../components/ui/loader/loader';
import Divider from '../../../components/ui/divider/divider';
import './vendors.css'
//
import * as actionType from '../../../store/actions/action-type';
import getCompany from '../../../services/apis/get-company'
// import {getAllProduct} from '../../../services/apis/product_catalog';
import { GetToken } from '../../../helpers/token'

class Vendors extends Component {

    state = {
        gToken: GetToken(),
        showLoader: true,
        // showPLoader: true
    }

    callback = (data) => {
        if(data.status === 200){
            this.props.vendorDispatch(data.data);
            this.setState({showLoader: false})
        }else{
            console.log(data.response)
        }
    }

    // productCallback = (data) => {
    //     if(data.status === 200){
    //         this.props.getProducts(data.data)
    //         this.setState({showPLoader: false})
    //     }else {
    //         console.log(data.response)
    //     }
    // }

    componentDidMount(){
        const {gToken} = this.state;
        if(gToken){
            // getAllProduct(this.productCallback, gToken);
            getCompany(this.callback, gToken)
        }
    }

    render(){
        if(this.state.showLoader){
            return (
                <div className="container">
                    <Loader/>
                </div>
            )
        }else if(this.props.companies.length === 0){
            return (
                <div className="vendors-container flex-row u-text-center">
                    <h2><b style={{color: '#bcbcbc'}}>No Data</b></h2>
                </div>
            )
         }else {
            return(
                <div className="vendors-container flex-column">
                    <h2><b>Vendor List</b></h2>
                    <Divider/>
                    <div className="vendor-table" style={{overflowX:'auto'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Vendor Comapny</th>
                                    <th>Location</th>
                                    <th>Machines</th>
                                    {/* {
                                        this.props.products.length > 0 &&(
                                            this.props.products.map((product) => (
                                                <th key={product._id}>{product.name}</th>
                                            ))
                                        )
                                    } */}
                                    <th>Pentagram</th>
                                    <th>Halo</th>
                                    <th>Ray</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.companies.map((vendor) => {
                                        var haloCount=0, pentagramCount=0, rayCount=0;
                                        return(
                                            <tr key={vendor._id}>
                                            <td>{vendor.name}</td>
                                            <td>{vendor.location}</td>
                                            <td className="text-right"><span>{vendor.products.length}</span></td>
                                            {
                                                vendor.products.length > 0 &&(
                                                    vendor.products.map((product) => {
                                                        if(product.name === 'Halo'){
                                                            haloCount++
                                                        }else if(product.name === 'Pentagram'){
                                                            pentagramCount++
                                                        }else if(product.name === 'Ray'){
                                                            rayCount++
                                                        }
                                                    })
                                                )
                                            }
                                            <td className="text-right"><span>{haloCount}</span></td>
                                            <td className="text-right"><span>{pentagramCount}</span></td>
                                            <td className="text-right"><span>{rayCount}</span></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps (state) {
    return{
        companies: state.Company.company,
        // products: state.Products.products,
    }
}

function mapDispatchToProps (dispatch) {
    return{
        vendorDispatch : (data) => {
            dispatch({
                type: actionType.COMPANY,
                value: data
            })
        },
        // getProducts: (data) => {
        //     dispatch({
        //         type: actionType.PRODUCTS,
        //         value: data
        //     })
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vendors)