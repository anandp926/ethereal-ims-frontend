import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from '../../../components/ui/loader/loader';
import Divider from '../../../components/ui/divider/divider';
import './vendors.css'
//
import * as actionType from '../../../store/actions/action-type';
import getCompany from '../../../services/apis/get-company'
import { GetToken } from '../../../helpers/token'

class Vendors extends Component {

    state = {
        gToken: GetToken(),
        showLoader: true
    }

    callback = (data) => {
        if(data.status == 200){
            this.props.vendorDispatch(data.data);
            this.setState({showLoader: false})
        }else{
            console.log(data.response)
        }
    }

    componentDidMount(){
        getCompany(this.callback, this.state.gToken)
    }

    render(){
        if(this.props.companies.length === 0){
            return (
                <div className="container">
                    <Loader/>
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
                                    <th>Halo</th>
                                    <th>Ray</th>
                                    <th>Pentagram</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.companies.map((vendor) => (
                                        <tr key={vendor._id}>
                                            <td>{vendor.name}</td>
                                            <td>{vendor.location}</td>
                                            <td className="text-right"><span>50</span></td>
                                            <td className="text-right"><span>50</span></td>
                                            <td className="text-right"><span>50</span></td>
                                            <td className="text-right"><span>50</span></td>
                                        </tr>
                                    ))
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
        companies: state.Company.company
    }
}

function mapDispatchToProps (dispatch) {
    return{
        vendorDispatch : (data) => {
            dispatch({
                type: actionType.COMPANY,
                value: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vendors)