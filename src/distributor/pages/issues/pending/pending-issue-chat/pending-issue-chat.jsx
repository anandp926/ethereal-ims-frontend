import React, { Component } from 'react'
import Button from '../../../../../components/form/button/button'
import CardHeading from '../../../../../components/ui/card/card-heading/card-heading'
import Divider from '../../../../../components/ui/divider/divider'
import MsgBox from '../../../../../components/ui/user-msg/user-msg-box'
import Form from '../../../../../components/form/form'
import TextArea from '../../../../../components/form/form-controls/text-area'
import LeftChat from '../../../../../components/ui/chat-box/chat-left/chat-left'
import RightChat from '../../../../../components/ui/chat-box/chat-right/chat-right'
import Modal from '../../../../../components/layout/modal/modal'
import './pending-issue-chat.css'

class PendingIssueChat extends Component {

    state = {
        message:'',
        messageWarn: false,
        showModal: false,
        okBType: 'primary',
        cancelBType: 'default',
        heading: '',
        modalContent:''
    }

    openResolveModal = () => {
        this.setState({
            showModal: true,
            heading: 'Confirmation',
            okBType:'primary',
            modalContent: 'Are you sure the issue is resolved?'
        })
    }

    openDeleteModal = () => {
        this.setState({
            showModal: true, 
            okBType:'danger',
            heading: 'Are you sure to delete?',
            modalContent:''
        })
    }

    okClick = () => {
        this.setState({showModal: false})
    }

    cancelClick = () => {
        this.setState({showModal: false})
    }

    onFormSubmit =(e)=> {
        e.preventDefault()
        if(this.validate()){
            this.outlineColor()
            console.log(this.state.message)
        }else{
            this.outlineColor()
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    outlineColor = () => { 
        if(!this.state.message){
            this.setState({messageWarn: true})
        }else{
            this.setState({messageWarn: false})
        }
    }

    validate = () => {
        const { message } = this.state
        return  message !== ''
    }

    render(){
        return(
            <div className="container flex-column">
                <Modal 
                    heading={this.state.heading}
                    showModal={this.state.showModal}
                    okClick={this.okClick}
                    cancelClick={this.cancelClick}
                    okBType={this.state.okBType}
                    cancelBType={this.state.cancelBType}
                >
                    {this.state.modalContent}
                </Modal>
                <div className="chat-box">
                    <CardHeading
                        title="Ray Mising Wing not[Pending]"
                        subtitle={
                            <div>
                                <span>27 Sep 2018</span>
                                <span >
                                    <Button isType='primary' htmlTypes='submit' isSize="small" classValue="chip">
                                        Edit
                                    </Button>
                                </span>
                                <span>
                                    <Button isType='danger' htmlTypes='submit' isSize="small" classValue="chip" onClick={this.openDeleteModal}>
                                        Delete
                                    </Button>
                                </span>
                                <span>
                                    <Button isType='ghost' htmlTypes='submit' isSize="small" classValue="chip" onClick={this.openResolveModal}>
                                        Resolved
                                    </Button>
                                </span>
                            </div>
                        }
                    />
                    <Divider/>
                    <div className="msg-list">
                        <LeftChat
                            isURL="for user image"
                            message={
                                <MsgBox 
                                    title="John Deo"
                                    subtitle="5:30PM, 27 Sep 2018"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                                    Urna cursus eget nunc scelerisque viverra mauris in aliquam sem."
                                />
                            }
                        />
                        <RightChat
                            isURL="for user image"
                            message={
                                <MsgBox 
                                    title="John Deo"
                                    subtitle="5:30PM, 27 Sep 2018"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                                    Urna cursus eget nunc scelerisque viverra mauris in aliquam sem."
                                />
                            }
                        />
                        <LeftChat
                            isURL="for user image"
                            message={
                                <MsgBox 
                                    title="John Deo"
                                    subtitle="5:30PM, 27 Sep 2018"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                                    Urna cursus eget nunc scelerisque viverra mauris in aliquam sem."
                                />
                            }
                        />
                        <RightChat
                            isURL="for user image"
                            message={
                                <MsgBox 
                                    title="John Deo"
                                    subtitle="5:30PM, 27 Sep 2018"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                                    Urna cursus eget nunc scelerisque viverra mauris in aliquam sem."
                                />
                            }
                        />
                    </div>
                </div>
                <div className="pending-issue-chat-form">
                    <div className="pending-issue-chat-form-box">
                        <Form onSubmitHandler={this.onFormSubmit}>
                            <TextArea 
                                name="message"
                                labelName="Message" 
                                placeholder="Write message..." 
                                value={this.state.message} 
                                onInputChange={this.onInputChange} 
                                isRequired={true}
                                classValue={this.state.messageWarn ? 'inputField-outline' : null}
                            />
                            <div className="pending-issue-form-button" >
                                <Button isType='primary' htmlTypes='submit'>Submit</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PendingIssueChat