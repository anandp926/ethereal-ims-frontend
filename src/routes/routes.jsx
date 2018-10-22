import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../login/login'

class MainRouting extends Component {

    state = {
        loginType: '',
    }

    login = (value) => {
        console.log(value)
        this.setState({
            loginType: value 
        })
    }

    render(){
        console.log(this.state.loginType)
        return(
            <Switch>
                <Route path="/" render={() => (
                    <Login typeCheck={this.login}/>
                )}/>
                
            </Switch>
        )
    }
}

export default MainRouting