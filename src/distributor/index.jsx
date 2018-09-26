import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../components/header/header'
import Sider from './sider/sider-nav'
import Routes from './routes/routes'
import Layouts from '../components/layout/layout'
import ContentLayout from '../components/layout/content-layout'

class Distributor extends Component {

    state = {
        contentSlide: false
    }

    contentSlider = (data) => {
        this.setState({
            contentSlide:data
        })
    }

    render(){
        return(
            <Layout>
                <Header/>
                <Layouts>
                    <Sider content_slider={this.contentSlider}/>
                    <ContentLayout contentslide={this.state.contentSlide}>
                        <Routes/>
                    </ContentLayout>
                </Layouts>
            </Layout>
        )
    }
}

export default Distributor