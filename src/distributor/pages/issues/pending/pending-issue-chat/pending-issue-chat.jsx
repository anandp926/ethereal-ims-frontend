import React, { Component } from 'react'
import Button from '../../../../../components/form/button/button'
import CardHeading from '../../../../../components/ui/card/card-heading/card-heading'
import Divider from '../../../../../components/ui/divider/divider'
import MsgBox from '../../../../../components/ui/user-msg/user-msg-box'
import './pending-issue-chat.css'

class PendingIssueChat extends Component {
    render(){
        return(
            <div className="container">
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
                                    <Button isType='danger' htmlTypes='submit' isSize="small" classValue="chip">
                                        Delete
                                    </Button>
                                </span>
                                <span>
                                    <Button isType='ghost' htmlTypes='submit' isSize="small" classValue="chip">
                                        Resolved
                                    </Button>
                                </span>
                            </div>
                        }
                    />
                    <Divider/>
                    <div className="msg-list">
                        <div className="chat-left">
                            <div className="arrow_box_right">
                                <MsgBox 
                                    title="John Deo"
                                    subtitle="5:30PM, 27 Sep 2018"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                                    Urna cursus eget nunc scelerisque viverra mauris in aliquam sem."
                                />
                            </div>
                            <div className="circle"/>
                        </div>
                        <div className="chat-right">
                            <div className="circle"/>
                            <div className="arrow_box_left">
                                <MsgBox 
                                    title="John Deo"
                                    subtitle="5:30PM, 27 Sep 2018"
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                                    Urna cursus eget nunc scelerisque viverra mauris in aliquam sem."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PendingIssueChat