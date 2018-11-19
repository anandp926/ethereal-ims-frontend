import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Layout} from 'antd'
import Header from '../components/header/header'
import Modal from '../components/layout/modal/modal'
import PrivacyPolicy from './privacy-policy'
import ProfileForm from './profile-form/profile-form'
import {GetToken} from '../helpers/token'
import PendingComponent from './pending-component/pending-component'
// api
import createProfile from '../services/apis/create-profile'


const { Content, Footer } = Layout;

class CreateProfile extends Component {

    state = {
        visible: false,
        termCondition: false,
        errorMsg: '',
        userData: '',
        showLoader: false,
        pendingComponent: false
    }

    openModal = (bool) => {
        this.setState({visible: bool})
    }

    callback = (data) => {
        if(data.status === 200) {
            this.setState({
                visible: false,
                showLoader: false,
                userData: '',
                termCondition: false,
                pendingComponent: true
            })
            console.log(data.data)
        }else if(data.response) {
            this.setState({showLoader: false, errorMsg: data.response.data.message})
        }else {
            this.setState({errorMsg: 'Something went wrong. Please try again latter!'})
        }
    }

    okClick = () => {
        const token = GetToken();
        if(this.state.termCondition && this.state.userData){
            this.setState({errorMsg: '', showLoader: true})
            this.state.userData['termCondition'] = this.state.termCondition;
            if(token){
                createProfile(this.callback, this.state.userData, token)
            }
        }else{
            this.setState({errorMsg: 'Please accept term & condition'})
        }
    }
    
    cancelClick = () => {
        this.setState({visible: false})
    }
    
    formData = (data) => {
        this.setState({userData: data})
    }

    onAccept = (e) => {
        this.setState({termCondition: e.target.checked})
    }

    render(){
        return(
            <Layout>
                <Header/>
                <Layout style={{marginTop: 64, }}>
                    <Modal 
                        heading="Terms & Conditions"
                        showModal={this.state.visible}
                        okClick={this.okClick}
                        cancelClick={this.cancelClick}
                        okText='SUBMIT'
                    >
                        <PrivacyPolicy onAccept={this.onAccept} errorMsg={this.state.errorMsg} showLoader={this.state.showLoader}/>
                    </Modal>
                {
                    this.state.pendingComponent || this.props.basic.approval === 'pending'
                    ? <PendingComponent/>
                    :
                    <Content className="login">
                        <ProfileForm 
                            openModal={this.openModal} 
                            user={this.props.basic} 
                            formData={this.formData}
                            userId={this.props.basic._id}
                        />
                    </Content>
                    
                }
                    <Footer style={{ textAlign: 'center'}}>
                        Copyright © 2018. Ethereal Machines Pvt Ltd. All rights reserved.
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return{
        basic: state.Basic.basic
    }
}

export default connect(mapStateToProps)(CreateProfile)
