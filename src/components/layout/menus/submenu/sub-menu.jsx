import React from 'react'
import { Icon, Menu } from 'antd'
const { SubMenu } = Menu

const subMenu = (props) => {
    return(
        <SubMenu
        key={props.subkey}
        title={<span>{props.icontype ? <Icon type={props.icontype} /> : null}<span>{props.submenutitle}</span></span>}
        {...props}
        >
            {props.children}
        </SubMenu>
    )
}

export default subMenu