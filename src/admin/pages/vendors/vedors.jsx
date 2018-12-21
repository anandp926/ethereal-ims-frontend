import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from '../../../components/ui/loader/loader';
import {Table} from 'antd'

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

        const columns = [{
            title: 'Vendor Comapny',
            dataIndex: 'name',
            key: 'v_name',
            }, {
            title: 'Location',
            dataIndex: 'location',
            key: 'v_location',
        }];

        if(this.props.companies.length === 0){
            return <Loader/>
        }else {
            return(
                <Table 
                    dataSource={this.props.companies} 
                    columns={columns}
                    rowKey={record => record._id}
                    title={() => <h3><b>Vendors</b></h3>}
                    bordered
                    pagination={false}
                />
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