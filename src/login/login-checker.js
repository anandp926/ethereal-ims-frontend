import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Layout } from 'antd'
import {withRouter, Redirect} from 'react-router-dom';
import * as actionType from '../store/actions/action-type'
import Header from '../components/header/header'
import Layouts from '../components/layout/layout'
import ContentLayout from '../components/layout/content-layout'
import Sider from '../distributor/sider/sider-nav'
import refreshToken from '../services/apis/refresh-token'
import {GetToken, SetToken} from '../helpers/token'

class LoginChecker extends Component {
      state = {
        contentSlide: false
    }

    callback = (data) => {
      if(data.status === 200){
        SetToken(data.data.nToken, 5);
        this.props.basic(data.data.user);
      }else if(data.response){
        console.log(data.response)
      }
    }

    componentDidMount() {

        const {currentURL, isLoggedIn, history, setRedirectUrl } = this.props;
        const token = GetToken();

        if (!isLoggedIn) {
          // set the current url/path for future redirection (we use a Redux action)
          // then redirect (we use a React Router method)
          setRedirectUrl(currentURL);
          history.push('/');
        }else if(isLoggedIn && token){
          setRedirectUrl(currentURL);
          refreshToken(this.callback, {token:token}, token);
        }
    }

    contentSlider = (data) => {
      this.setState({
          contentSlide:data
      })
    }
    
    render() {
      const { isLoggedIn, isFirst, isApproved} = this.props;
      if (isLoggedIn && isFirst, isApproved === 'approved') {
        return (
          <Layout>
            <Header/>
            <Layouts>
              <Sider content_slider={this.contentSlider}/>
              <ContentLayout contentslide={this.state.contentSlide}>
                {this.props.children}
              </ContentLayout>
            </Layouts>
          </Layout>
        )
      } else if(!this.props.isFirst){
        return <Redirect to="/user/updatePassword" />
      } else if(this.props.isApproved === 'pending' || this.props.isApproved === null){
        return <Redirect to="user/profile" />
      }else {
        return null
      }
    }
}
    
    // Grab a reference to the current URL. If this is a web app and you are
    // using React Router, you can use `ownProps` to find the URL. Other
    // platforms (Native) or routing libraries have similar ways to find
    // the current position in the app.
    function mapStateToProps(state, ownProps) {
      return {
        isLoggedIn: state.Login.isLogedIn,
        userType: state.Basic.basic.group,
        isFirst: state.Basic.basic.firstTime,
        isApproved: state.Basic.basic.approval,
        currentURL: ownProps.location.pathname
      }
    }

    function mapDispatchToProps(dispatch) {
      return{
        setRedirectUrl: (data) => {
          dispatch({
            type: actionType.LOGIN,
            value: data
          })
        },
        basic: (data) => {
          dispatch({
            type: actionType.USER_BASIC,
            value: data
          })
        }
      }
    }
    
    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginChecker))