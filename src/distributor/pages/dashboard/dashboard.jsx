import React, { Component } from 'react'
import Card from '../../../components/ui/card/card'
import CardHeading from '../../../components/ui/card/card-heading/card-heading'
import Divider from '../../../components/ui/divider/divider'
import './dashboard.css'
import { Tree, Icon } from 'antd';

const TreeNode = Tree.TreeNode;

class Dashboard extends Component {

    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      }

    render(){
        return(
            <div className="dashboard">
                <div className="dashboard-card-list">
                    <div className="dashboard-card-item">
                        <Card>
                            <CardHeading title="Inventory" classValue="dashboard-card-heading"/>
                            <Divider/>
                            <div className="dashboard-inventory-detail">
                                <Tree
                                    showIcon
                                    defaultExpandedKeys={['0-0']}
                                    onSelect={this.onSelect}
                                >
                                    <TreeNode title={<b>Available Machines</b>} key="0-0">
                                        <TreeNode icon={<img className="ray-icon" />} title="Ray (3)" key="0-0-0-0" />
                                        <TreeNode icon={<img className="halo-icon" />} title="Halo (6)" key="0-0-0-1" />
                                        <TreeNode icon={<img className="pentagram-icon" />} title="Pentagram (1)" key="0-0-0-2" />
                                    </TreeNode>
                                    <TreeNode title={<b>Pending Orders</b>} key="0-1">
                                        <TreeNode icon={<img className="ray-icon" />} title="Ray (0)" key="0-0-1-0" />
                                        <TreeNode icon={<img className="halo-icon" />} title="Halo (12)" key="0-0-2-0" />
                                        <TreeNode icon={<img className="pentagram-icon" />} title="Pentagram (0)" key="0-0-2-1" />
                                    </TreeNode>
                                </Tree>
                            </div>
                        </Card>
                    </div>
                    <div className="dashboard-card-item">
                        <Card>
                            <CardHeading title="Sales" classValue="dashboard-card-heading" />
                            <Divider/>
                            <div className="dashboard-inventory-detail">
                                <Tree
                                    showIcon
                                    defaultExpandedKeys={['0-0']}
                                    onSelect={this.onSelect}
                                >
                                    <TreeNode title={<b>Toatl Purchased</b>} key="0-0">
                                        <TreeNode icon={<img className="ray-icon" />} title="Ray (3)" key="0-0-0-0" />
                                        <TreeNode icon={<img className="halo-icon" />} title="Halo (6)" key="0-0-0-1" />
                                        <TreeNode icon={<img className="pentagram-icon" />} title="Pentagram (1)" key="0-0-0-2" />
                                    </TreeNode>
                                    <TreeNode title={<b>Total Sold</b>} key="0-1">
                                        <TreeNode icon={<img className="ray-icon" />} title="Ray (0)" key="0-0-1-0" />
                                        <TreeNode icon={<img className="halo-icon" />} title="Halo (12)" key="0-0-2-0" />
                                        <TreeNode icon={<img className="pentagram-icon" />} title="Pentagram (0)" key="0-0-2-1" />
                                    </TreeNode>
                                </Tree>
                            </div>
                        </Card>
                    </div>
                    <div className="dashboard-card-item">
                        <Card>
                            <CardHeading title="Issues" classValue="dashboard-card-heading"/>
                            <Divider/>
                            <div className="dashboard-inventory-detail">
                                <Tree
                                    showIcon
                                    defaultExpandedKeys={['0-0']}
                                    onSelect={this.onSelect}
                                >
                                    <TreeNode title={<b>Total Issues</b>} key="0-0">
                                        <TreeNode icon={<img className="ray-icon" />} title="Ray (3)" key="0-0-0-0" />
                                        <TreeNode icon={<img className="halo-icon" />} title="Halo (6)" key="0-0-0-1" />
                                        <TreeNode icon={<img className="pentagram-icon" />} title="Pentagram (1)" key="0-0-0-2" />
                                    </TreeNode>
                                    <TreeNode title={<b>Pending Issues</b>} key="0-1">
                                        <TreeNode icon={<img className="ray-icon" />} title="Ray (0)" key="0-0-1-0" />
                                        <TreeNode icon={<img className="halo-icon" />} title="Halo (12)" key="0-0-2-0" />
                                        <TreeNode icon={<img className="pentagram-icon" />} title="Pentagram (0)" key="0-0-2-1" />
                                    </TreeNode>
                                </Tree>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard