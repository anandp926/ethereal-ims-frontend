/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'
import { Layout } from 'antd'

const layout = (props) => {
    return(
        <Layout style={{marginTop: 64}} {...props}>
            {props.children}
        </Layout>
    )
}

export default layout