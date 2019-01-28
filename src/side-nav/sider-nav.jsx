import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { withRouter, Link } from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderNav = (props) => {
    // For open submenu when active
    var currentPath = props.location.pathname;
    var subPath = currentPath.split('/');
    var subKey = {'issues': 'sub1', 'resources': 'sub2', 'users': 'sub11'};
    
    if( props.roleType === 'user'){
        return(
            <Sider 
                breakpoint="md"
                collapsedWidth="0"
                onCollapse={(collapsed) => {props.content_slider(collapsed)}}
                className="sider"
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.location.pathname]} defaultOpenKeys={[subKey[subPath[1]]]}>
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
                    </SubMenu>
                    <SubMenu
                    key='sub2'
                    title={<span><Icon type="folder" /><span>Resources</span></span>}
                    >
                        <Menu.Item key="/resources/certificate">
                            <Link to="/resources/certificate">
                            <Icon type="safety-certificate" />
                            <span className="nav-text">Certificate</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/resources/aggrement">
                            <Link to="/resources/aggrement">
                            <Icon type="file-protect" />
                            <span className="nav-text">Aggrement</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/resources/videos">
                            <Link to="/resources/videos">
                            <Icon type="video-camera" />
                            <span className="nav-text">Videos</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/resources/manuals">
                            <Link to="/resources/manuals">
                            <Icon type="book" />
                            <span className="nav-text">Manuals</span>
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
                    <Menu.Item key={"/logout"} onClick={props.logout()}>
                        <Icon type="logout" />
                        <span className="nav-text">Logout</span>
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.location.pathname]} defaultOpenKeys={[subKey[subPath[1]]]}>
                    <Menu.Item key={"/dashboard"}>
                        <Link to="/dashboard">
                            <Icon type="dashboard" />
                            <span className="nav-text">Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                    key={'sub11'}
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
                    <Menu.Item key={"/vendors"}>
                        <Link to='/vendors'>
                            <Icon type='shop' />
                            <span className="nav-text">Vendors</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"/orders"}>
                        <Link to='/orders'>
                            <Icon type="shopping-cart" />
                            <span className="nav-text">Orders</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/product-catalog">
                        <Link to='/product-catalog'>
                            <Icon type="setting" />
                            <span className="nav-text">Product Catalogue</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"/logout"} onClick={props.logout()}>
                        <Icon type="logout" />
                        <span className="nav-text">Logout</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(SiderNav)
