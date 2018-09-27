import React, { Component } from 'react'
import { Divider } from 'antd';
import Button from '../../../../components/form/button/button'
import './pending-issue.css'

class PendingIssue extends Component {
    render(){
        return(
            <div className="container flex-column">
                <div className="pending-issue-list">
                    <div className="card">
                        <div className="card-container">
                            <div className="card-heading">
                                <h4><b>v9530: Ray Mising Wing not[Pending]</b></h4> 
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
                            </div>
                            <Divider className="divider"/>
                            <div className="user-msg-box">
                                <div className="user-name">
                                    <h4><b>John Doe</b></h4>
                                    <p>5:30PM, 27 Sep 2018</p>
                                </div>
                                <div className="msg-box">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                                    Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Scelerisque eu ultrices vitae auctor eu. 
                                    Tristique senectus et netus et malesuada fames ac. Orci ac auctor augue mauris augue neque gravida in fermentum. 
                                    In metus vulputate eu scelerisque felis imperdiet proin. Vel pretium lectus quam id leo in vitae. 
                                    Ac tortor dignissim convallis aenean et tortor at.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pending-issue-list">
                    <div className="card">
                        <div className="card-container">
                            <div className="card-heading">
                                <h4><b>v9530: Ray Mising Wing not[Pending]</b></h4> 
                                <div>
                                    <span>27 Sep 2018</span>
                                    <span>
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
                            </div>
                            <Divider className="divider"/>
                            <div className="user-msg-box">
                                <div className="user-name">
                                    <h4><b>John Doe</b></h4>
                                    <p>5:30PM, 27 Sep 2018</p>
                                </div>
                                <div className="msg-box">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                                    Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Scelerisque eu ultrices vitae auctor eu. 
                                    Tristique senectus et netus et malesuada fames ac. Orci ac auctor augue mauris augue neque gravida in fermentum. 
                                    In metus vulputate eu scelerisque felis imperdiet proin. Vel pretium lectus quam id leo in vitae. 
                                    Ac tortor dignissim convallis aenean et tortor at.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PendingIssue