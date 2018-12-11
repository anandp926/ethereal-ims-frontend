import React, {Component } from 'react'
import { Tabs, Icon } from 'antd';
import Description from './description/description'

const TabPane = Tabs.TabPane;


class Manuals extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" size='large' tabBarGutter={100}>
                <TabPane tab={<span><Icon type="solution" />User</span>} key="1" >
                    <Description/>
                </TabPane>
                <TabPane tab={<span><Icon type="tool" />Machines</span>} key="2">
                    <Description/>
                </TabPane>
            </Tabs>
        )
    }
}



export default Manuals