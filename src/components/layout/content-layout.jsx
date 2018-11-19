import React from 'react'
import { Layout } from 'antd'

const { Content, Footer } = Layout

const contentLayout = (props) => {
    return(
        <Layout className={props.contentslide ? "content-pull-left" : "content-pull-right"}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                {props.children}
            </Content>
            <Footer style={{ textAlign: 'center'}}>
                Copyright © 2018. Ethereal Machines Pvt Ltd. All rights reserved.
            </Footer>
        </Layout>
    )
}

export default contentLayout