import React, { Component } from 'react'
import Button from '../../../../components/form/button/button'
import Card from '../../../../components/ui/card/card'
import CardHeading from '../../../../components/ui/card/card-heading/card-heading'
import Divider from '../../../../components/ui/divider/divider'
import MsgBox from '../../../../components/ui/user-msg/user-msg-box'
import { Link } from 'react-router-dom'
import './pending-issue.css'

class PendingIssue extends Component {

    render(){
        return(
            <div className="container flex-column">
                <div className="issue-list">
                    <Card>
                        <CardHeading 
                            title="v9530: Ray Mising Wing not[Pending]"
                            subtitle={
                                <div>
                                    <span>27 Sep 2018</span>
                                    <span>
                                        <Button isType='danger' htmlTypes='submit' isSize="small" classValue="chip">
                                            Delete
                                        </Button>
                                    </span>
                                    <span>
                                        <Button isType='default' htmlTypes='submit' isSize="small" classValue="chip">
                                            <Link to="pending/1">More</Link>
                                        </Button>
                                    </span>
                                </div>
                            }
                        />
                        <Divider/>
                        <MsgBox 
                            title="John Deo"
                            subtitle="5:30PM, 27 Sep 2018"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                            Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Scelerisque eu ultrices vitae auctor eu. 
                            Tristique senectus et netus et malesuada fames ac. Orci ac auctor augue mauris augue neque gravida in fermentum. 
                            In metus vulputate eu scelerisque felis imperdiet proin. Vel pretium lectus quam id leo in vitae. 
                            Ac tortor dignissim convallis aenean et tortor at."
                        />
                    </Card>
                </div>
                <div className="issue-list">
                <Card>
                        <CardHeading 
                            title="v9530: Ray Mising Wing not[Pending]"
                            subtitle={
                                <div>
                                    <span>27 Sep 2018</span>
                                    <span>
                                        <Button isType='danger' htmlTypes='submit' isSize="small" classValue="chip">
                                            Delete
                                        </Button>
                                    </span>
                                    <span>
                                        <Button isType='default' htmlTypes='submit' isSize="small" classValue="chip">
                                            <Link to="pending/2">More</Link>
                                        </Button>
                                    </span>
                                </div>
                            }
                        />
                        <Divider classValue="divider"/>
                        <MsgBox 
                            title="John Deo"
                            subtitle="5:30PM, 27 Sep 2018"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Tellus in metus vulputate eu scelerisque felis imperdiet. Quis vel eros donec ac odio tempor orci dapibus ultrices. 
                            Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Scelerisque eu ultrices vitae auctor eu. 
                            Tristique senectus et netus et malesuada fames ac. Orci ac auctor augue mauris augue neque gravida in fermentum. 
                            In metus vulputate eu scelerisque felis imperdiet proin. Vel pretium lectus quam id leo in vitae. 
                            Ac tortor dignissim convallis aenean et tortor at."
                        />
                    </Card>
                </div>
            </div>
        )
    }
}

export default PendingIssue