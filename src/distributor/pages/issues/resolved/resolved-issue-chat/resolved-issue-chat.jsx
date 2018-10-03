import React, { Component } from 'react'
import Button from '../../../../../components/form/button/button'
import CardHeading from '../../../../../components/ui/card/card-heading/card-heading'
import Divider from '../../../../../components/ui/divider/divider'
import MsgBox from '../../../../../components/ui/user-msg/user-msg-box'
import LeftChat from '../../../../../components/ui/chat-box/chat-left/chat-left'
import RightChat from '../../../../../components/ui/chat-box/chat-right/chat-right'
import Modal from '../../../../../components/layout/modal/modal'
import './resolved-issue-chat.css'

class ResolvedIssueChat extends Component {

    state = {
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
                        title="Ray Mising Wing not[resloved]"
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
            </div>
        )
    }
}

export default ResolvedIssueChat