import React from 'react'
import {Layout} from 'antd'
import logo from '../../logo.svg'

const { Header } = Layout;

const header = (props) =>{
    return(
        <Header className="header">
            <div>
                <img src={logo} className="logo" alt="logo"/>
            </div>
        </Header>
    )
}

export default header