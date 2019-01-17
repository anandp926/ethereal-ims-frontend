import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from '../components/ui/loader/loader'
import { Layout } from 'antd'
import {withRouter, Redirect} from 'react-router-dom';
import * as actionType from '../store/actions/action-type'
import Header from '../components/header/header'
import Layouts from '../components/layout/layout'
import ContentLayout from '../components/layout/content-layout'
import Sider from '../side-nav/sider-nav'
import refreshToken from '../services/apis/refresh-token'
import deleteToken from '../services/apis/logout'
import {GetToken, SetToken, DeleteToken} from '../helpers/token'

class LoginChecker extends Component {
      state = {
        contentSlide: false,
        showLoader: false,
        gToken: GetToken()
    }

    callback = (data) => {
      if(data.status === 200){
        SetToken(data.data.nToken, 5);
        this.setState({gToken: data.data.nToken});
        this.props.basic(data.data.user);
      }else if(data.response){
        console.log(data.response)
      }
    }

    logoutCallback = (data) => {
      if(data.status === 200){
        DeleteToken();
        this.setState({showLoader: false});
        this.props.isLogout();
        this.props.history.push('/')
      }else{
        console.log(data.response);
      }
    }

    logout = () => {
      this.setState({showLoader: true})
      if(this.state.gToken){
        deleteToken(this.logoutCallback,this.state.gToken)
      }
    }

    componentDidMount() {
        const {currentURL, isLoggedIn, history, setRedirectUrl } = this.props;

        if (!isLoggedIn) {
          // set the current url/path for future redirection (we use a Redux action)
          // then redirect (we use a React Router method)
          setRedirectUrl(currentURL);
          history.push('/');
        }else if(isLoggedIn && this.state.gToken){
          setRedirectUrl(currentURL);
          refreshToken(this.callback, {token:this.state.gToken}, this.state.gToken);
        }
    }

    contentSlider = (data) => {
      this.setState({
          contentSlide:data
      })
    }
    
    render() {
      const { isLoggedIn, isFirst, isApproved} = this.props;
      if (isLoggedIn && isFirst && isApproved === 'approved') {
        return (
          <Layout>
            <Header/>
            <Layouts>
              <Sider content_slider={this.contentSlider} roleType={this.props.userType} logout={() => this.logout}/>
              <ContentLayout contentslide={this.state.contentSlide}>
                {this.state.showLoader ? <div className="container"><Loader>Processing...</Loader></div> :this.props.children}
              </ContentLayout>
            </Layouts>
          </Layout>
        )
      } else if(!this.props.isFirst){
        return <Redirect to="/user/updatePassword" />
      } else if(this.props.isApproved === 'pending' || this.props.isApproved === null){
        return <Redirect to="/user/profile" />
      } else{
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
        },
        isLogout: () => {
          dispatch({
            type: actionType.LOGOUT
          })
        }
      }
    }
    
    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginChecker))