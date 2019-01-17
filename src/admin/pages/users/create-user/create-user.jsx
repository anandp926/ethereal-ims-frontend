import React, {Component} from 'react';
import {connect} from 'react-redux'
import Modal from '../../../../components/layout/modal/modal';
import Heading from '../../../../components/form/heading/heading';
import CreateComapny from './create-company/create-company';
import CreateUserForm from './create-user-form/create-user-form'
import {GetToken} from '../../../../helpers/token'
import Loader from '../../../../components/ui/loader/loader'
//api
import getCompanylist from '../../../../services/apis/get-company'
import * as actionType from '../../../../store/actions/action-type'

class CreateUser extends Component {

    state = {
        visible: false,
        showLoader: true,
        gToken: GetToken()
    }

    callback = (data) => {
        if(data.status === 200){
            this.props.getCompany(data.data);
            this.setState({showLoader: false})
        }else {
            console.log(data.response);
        }
    }

    componentDidMount(){
        const {gToken} = this.state;
        if(gToken){
            getCompanylist(this.callback, gToken);
        } 
    }

    openModal = (bool) => {
        this.setState({visible: bool})
    }
    
    // close modal
    cancelClick = (bool) => {
        if(bool === false){
            this.setState({visible: false});
        }else{
            this.setState({visible: false})
        }
    }

    render(){

        if(this.state.showLoader && !this.props.companies){
            return <Loader/>
        }else if(this.props.companies){
            return(
                <div className="container">
                    <div className="issue-form">
                        <Modal 
                            heading="Create Company"
                            showModal={this.state.visible}
                            cancelClick={this.cancelClick}
                            footer={null}
                        >
                            <CreateComapny cancelClick={this.cancelClick} />
                        </Modal>
                        <Heading heading={"Create New User"}/>
                        <CreateUserForm openModal={this.openModal} companies={this.props.companies}/>
                    </div>
                </div>
            )
        }else {
            return null
        }
        
    }
}

function mapStateToProps(state) {
    return{
        companies: state.Company.company
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getCompany: (data) => {
            dispatch({
                type: actionType.COMPANY,
                value: data
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)