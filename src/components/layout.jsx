import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class AppLayout extends Component{
    
    state = {
        contentSlide: false
    }

    render(){
        return(
        <Layout>
            <Header className="header">
                <div className="logo" />
            </Header>
            <Layout style={{marginTop: 64,}}>
                <Sider 
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={(collapsed) => {this.setState({contentSlide:collapsed})}}
                    className="sider"
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="dashboard" />
                            <span className="nav-text">Dashboard</span>
                        </Menu.Item>
                        <SubMenu
                        key="sub1"
                        title={<span><Icon type="exclamation-circle" /><span>Issues</span></span>}
                        >
                            <Menu.Item key="3">
                                <Icon type="plus-circle" />
                                <span className="nav-text">Create New</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="warning" />
                                <span className="nav-text">Pending</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="issues-close" />
                                <span className="nav-text">Resolved</span>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                        <Icon type="shopping-cart" />
                        <span className="nav-text">Inventory</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className={this.state.contentSlide ? "content-pull-left" : "content-pull-right"}>
                    {/* {
                        this.state.hamburg
                        ?
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            type="menu-fold"
                            onClick={this.toggle}
                            />
                        </Header>
                        : null
                    } */}
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
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
    }
}


export default AppLayout