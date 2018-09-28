import React from 'react'
import { Menu } from 'antd'

const menus = (props) => {
    return(
        <Menu theme={props.themetype} mode={props.modetype} defaultSelectedKeys={[props.selectedkey]} {...props}>
            {props.children}
        </Menu>
    )
}

export default menus