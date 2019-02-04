/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../components/ui/card/card'
import './shopping.css'
import HaloImage from './assets/halo/halo.png'
import RayImage from './assets/ray/ray.png'
import PentagramImage from './assets/pentagram/pentagram.png'
import Button from '../../../components/form/button/button'
import InputType from '../../../components/form/form-controls/input'
import Modal from '../../../components/layout/modal/modal'

class Shopping extends Component {

    render(){
        return(
            <div className="shopping-list">
                <div className="shopping-item">
                    <Card>
                        <div className="shopping-card-content">
                            <div className="shopping-card-img">
                                <img src={HaloImage} alt="halo" className="shopping-card-image"/>
                            </div>
                            <div className="shopping-card-detail">
                                <h3><b>Halo</b></h3>
                            </div>
                            <div className="shopping-card-buy">
                                <Link to="/shopping/details/1">
                                    <Button isType="danger">BUY</Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="shopping-item">
                    <Card>
                        <div className="shopping-card-content">
                            <div className="shopping-card-img">
                                <img src={RayImage} alt="ray" className="shopping-card-image"/>
                            </div>
                            <div className="shopping-card-detail">
                                <h3><b>Ray</b></h3>
                            </div>
                            <div className="shopping-card-buy">
                                <Link to="/shopping/details/2">
                                    <Button isType="danger">BUY</Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="shopping-item">
                    <Card>
                        <div className="shopping-card-content">
                            <div className="shopping-card-img">
                                <img src={PentagramImage} alt="pentagram" className="shopping-card-image"/>
                            </div>
                            <div className="shopping-card-detail">
                                <h3><b>Pentagram</b></h3>
                            </div>
                            <div className="shopping-card-buy">
                                <Link to="/shopping/details/3">
                                    <Button isType="danger">BUY</Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Shopping