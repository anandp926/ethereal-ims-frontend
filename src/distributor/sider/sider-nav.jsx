import React from 'react'
import Sider from '../../components/layout/sider'
import Menu from '../../components/layout/menus/menu'
import MenuItem from '../../components/layout/menus/menu-item/menu-item'
import SubMenu from '../../components/layout/menus/submenu/sub-menu'

const siderNav = (props) => {
    return(
            <Sider {...props}>
                <Menu themetype="dark" modetype="inline" selectedkey={"/dashboard"}>
                    <MenuItem menutitle="Dashboard" path="/dashboard" icontype="dashboard"/>
                    <SubMenu submenutitle="Issues" subkey="issue" icontype="exclamation-circle">
                        <MenuItem menutitle="Create New" path="/issues/new" icontype="plus-circle"/>
                        <MenuItem menutitle="Pending" path="/issues/pending" icontype="warning"/>
                        <MenuItem menutitle="Resolved" path="/issues/resolved" icontype="issues-close"/>
                    </SubMenu>
                    <MenuItem menutitle="Inventory" path="/inventory" icontype="shopping-cart"/>
                    <MenuItem menutitle="Shopping" path="/shopping" icontype="shopping"/>
                    <MenuItem menutitle="FAQ" path="/faqs" icontype="read"/>
                </Menu>
            </Sider>
        )
}

export default siderNav