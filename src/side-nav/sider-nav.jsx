import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { withRouter, Link } from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderNav = (props) => {
    if( props.roleType === 'user'){
        return(
            <Sider 
                breakpoint="md"
                collapsedWidth="0"
                onCollapse={(collapsed) => {props.content_slider(collapsed)}}
                className="sider"
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.location.pathname]}>
                    <Menu.Item key={"/dashboard"}>
                        <Link to="/dashboard">
                            <Icon type="dashboard" />
                            <span className="nav-text">Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                    key='sub1'
                    title={<span><Icon type="exclamation-circle" /><span>Issues</span></span>}
                    >
                        <Menu.Item key="/issues/new">
                            <Link to="/issues/new">
                            <Icon type="plus-circle" />
                            <span className="nav-text">Create New</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/issues/pending">
                            <Link to="/issues/pending">
                            <Icon type="warning" />
                            <span className="nav-text">Pending</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/issues/resolved">
                            <Link to="/issues/resolved">
                            <Icon type="issues-close" />
                            <span className="nav-text">Resolved</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/shopping">
                        <Link to="/shopping">
                        <Icon type="shopping-cart" />
                        <span className="nav-text">Shopping</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/faqs">
                        <Link to="/faqs">
                        <Icon type="read" />
                        <span className="nav-text">FAQ</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }else if(props.roleType === 'admin'){
        return(
            <Sider 
                breakpoint="md"
                collapsedWidth="0"
                onCollapse={(collapsed) => {props.content_slider(collapsed)}}
                className="sider"
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.location.pathname]}>
                    <Menu.Item key={"/dashboard"}>
                        <Link to="/dashboard">
                            <Icon type="dashboard" />
                            <span className="nav-text">Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                    key={'/issues'}
                    title={<span><Icon type="user" /><span>Users</span></span>}
                    >
                        <Menu.Item key="/users/new">
                            <Link to="/users/new">
                            <Icon type="user-add" />
                            <span className="nav-text">Create New</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/users/users-list">
                            <Link to="/users/users-list">
                            <Icon type="team" />
                            <span className="nav-text">User List</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(SiderNav)