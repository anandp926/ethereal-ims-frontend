import React, { Component } from 'react'
import Card from '../../../components/ui/card/card'
import './shopping.css'
import HaloImage from './assets/halo/halo.png'
import RayImage from './assets/ray/ray.png'
import PentagramImage from './assets/pentagram/pentagram.png'
import Button from '../../../components/form/button/button'
import InputType from '../../../components/form/form-controls/input'


class Shopping extends Component {

    state = {
        qty:''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render(){
        return(
            <div>
                <Card>
                    <div className="shopping-card-content">
                        <div className="shopping-card-img">
                            <img src={HaloImage} alt="halo" className="shopping-card-image"/>
                        </div>
                        <div className="shopping-card-detail">
                            <h2>Ethereal Halo</h2>
                            <h5>The Dawn of Hybrid Manufacturing</h5>
                            <h2 className="price">&#8377; 14,99,999</h2>
                            <p className="know-more ">Know more?</p>
                        </div>
                        <div className="shopping-card-buy">
                            <Button isType="danger" >Buy Now</Button>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="shopping-card-content">
                        <div className="shopping-card-img">
                            <img src={RayImage} alt="ray" className="shopping-card-image"/>
                        </div>
                        <div className="shopping-card-detail">
                            <h2>Ethereal ray</h2>
                            <h5>A smart dual extruder printer for your everyday 3D printing needs!</h5>
                            <h2 className="price">&#8377; 14,99,999</h2>
                            <p className="know-more ">Know more?</p>
                        </div>
                        <div className="shopping-card-buy">
                            <Button isType="danger" >Buy Now</Button>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="shopping-card-content">
                        <div className="shopping-card-img">
                            <img src={PentagramImage} alt="pentagram" className="shopping-card-image"/>
                        </div>
                        <div className="shopping-card-detail">
                            <h2>Ethereal Pentagram</h2>
                            <h5>Desktop Simultaneous 5 Axis CNC Machine</h5>
                            <h2 className="price">&#8377; 14,99,999</h2>
                            <p className="know-more ">Know more?</p>
                        </div>
                        <div className="shopping-card-buy">
                            <Button isType="danger" >Buy Now</Button>
                            <InputType 
                                type="number"
                                value={this.state.qty}
                                name="qty" 
                                labelName="qty"
                                placeholder="qty"
                                onInputChange={this.onInputChange}
                                isRequired={true}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Shopping