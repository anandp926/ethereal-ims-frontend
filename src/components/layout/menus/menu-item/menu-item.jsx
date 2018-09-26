import React from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

const menuItem = (props) => {
    return(
        <Menu.Item key={props.path} {...props}>
            <Link to={props.path}>
                {props.icontype ? <Icon type={props.icontype} /> : null}
                <span className="nav-text">{props.menutitle}</span>
            </Link>
        </Menu.Item>
    )
}

export default menuItem