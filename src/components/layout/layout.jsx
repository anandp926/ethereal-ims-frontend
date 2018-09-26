import React from 'react'
import { Layout } from 'antd'

const layout = (props) => {
    return(
        <Layout style={{marginTop: 64,}} {...props}>
            {props.children}
        </Layout>
    )
}

export default layout