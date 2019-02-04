/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import {connect} from 'react-redux'
import Card from '../../../components/ui/card/card'
import CardHeading from '../../../components/ui/card/card-heading/card-heading'
import Divider from '../../../components/ui/divider/divider'
import AnalogClock from '../../../components/ui/analog_watch/analog_watch';
import '../../../common_css/dashboard.css'
import { Tree } from 'antd';
//
import {getUserCompany} from '../../../services/apis/user';
import * as actionType from '../../../store/actions/action-type';
import {GetToken} from '../../../helpers/token'

const TreeNode = Tree.TreeNode;

class Dashboard extends Component {

    state = {
        gToken: GetToken(),
        showLoader: true
    }

    callback = (data) => {
        if(data.status === 200){
            this.props.dispatchUserCompany(data.data);
        }else{
            console.log(data.response)
        }
    }

    componentDidMount(){
        const {gToken} = this.state;
        if(gToken){
            getUserCompany(this.callback, gToken)
        }
    }

    render(){
        var haloCount=0, rayCount=0, pentagramCount=0;
        if(this.props.userComapny){
            if(this.props.userComapny.products !== undefined) {
                this.props.userComapny.products.map((product) => {
                    if(product.name === 'Halo'){
                        haloCount++;
                    }else if(product.name === 'Pentagram'){
                        pentagramCount++;
                    }else if(product.name === 'Ray'){
                        rayCount++;
                    }
                });
            }
        }

        return(
            <div className="dashboard">
                <div className="dashboard-card-list">
                    <div className="dashboard-card-item">
                        <Card>
                            <CardHeading title="Products" classValue="dashboard-card-heading"/>
                            <Divider/>
                            <div className="dashboard-inventory-detail">
                                <Tree
                                    showIcon
                                    defaultExpandedKeys={['0-0']}
                                    onSelect={this.onSelect}
                                >
                                    <TreeNode title={<b>Machines</b>} key="0-0">
                                        <TreeNode icon={<img className="ray-icon" alt=""/>} title={`Ray (${rayCount})`} key="0-0-0-0" />
                                        <TreeNode icon={<img className="halo-icon" alt=""/>} title={`Halo (${haloCount})`} key="0-0-0-1" />
                                        <TreeNode icon={<img className="pentagram-icon" alt=""/>} title={`Pentagram (${pentagramCount})`} key="0-0-0-2" />
                                    </TreeNode>
                                </Tree>
                            </div>
                        </Card>
                    </div>
                    <div className="dashboard-card-item">
                        <Card>
                            <AnalogClock />
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        userComapny: state.Users.company
    }
}

function mapDispatchToProps (dispatch) {
    return {
        dispatchUserCompany: (data) => {
            dispatch({
                type: actionType.USER_COMPANY,
                value: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)