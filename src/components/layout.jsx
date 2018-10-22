import React, { Component } from 'react'
import Header from './header/header'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

class AppLayout extends Component{
    
    state = {
        contentSlide: false
    }

    render(){
        console.log(window.location.pathname)
        return(
        <Layout>
            <Header/>
            <Layout style={{marginTop: 64,}}>
                <Sider 
                    breakpoint="md"
                    collapsedWidth="0"
                    onCollapse={(collapsed) => {this.setState({contentSlide:collapsed})}}
                    className="sider"
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
                        <Menu.Item key={"/dashboard"}>
                            <a href="/dashboard">
                                <Icon type="dashboard" />
                                <span className="nav-text">Dashboard</span>
                            </a>
                        </Menu.Item>
                        <SubMenu
                        key="sub1"
                        title={<span><Icon type="exclamation-circle" /><span>Issues</span></span>}
                        >
                            <Menu.Item key="/new">
                                <a href="/new">
                                <Icon type="plus-circle" />
                                <span className="nav-text">Create New</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="/pending">
                                <a href="/pending">
                                <Icon type="warning" />
                                <span className="nav-text">Pending</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="/resolved">
                                <Icon type="issues-close" />
                                <span className="nav-text">Resolved</span>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="/inv">
                            <a href="/inv">
                            <Icon type="shopping-cart" />
                            <span className="nav-text">Inventory</span>
                            </a>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className={this.state.contentSlide ? "content-pull-left" : "content-pull-right"}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="dashboard">
                        ...
                        <br />
                        Really, HI this is Anand Singh fron India.
                        <br />...<br />...<br />...<br />
                        long
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />
                        content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Copyright © 2018. Ethereal Machines Pvt Ltd. All rights reserved.
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
    }
}


export default AppLayout