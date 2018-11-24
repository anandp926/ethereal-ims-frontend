import React, {Component} from 'react';
import Modal from '../../../../components/layout/modal/modal';
import Heading from '../../../../components/form/heading/heading';
import CreateComapny from './create-company/create-company';
import CreateUserForm from './create-user-form/create-user-form'

class CreateUser extends Component {

    state = {
        visible: false
    }

    openModal = (bool) => {
        this.setState({visible: bool})
    }
    
    cancelClick = () => {
        this.setState({visible: false})
    }

    render(){
        return(
            <div className="container">
                <div className="issue-form">
                    <Modal 
                        heading="Create Company"
                        showModal={this.state.visible}
                        cancelClick={this.cancelClick}
                        footer={null}
                    >
                        <CreateComapny okClick={this.okClick}/>
                    </Modal>
                    <Heading heading={"Create New User"}/>
                    <CreateUserForm openModal={this.openModal}/>
                </div>
            </div>
        )
    }
}

export default CreateUser