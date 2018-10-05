import React, { Component } from 'react'
import HaloImage from '../assets/halo/halo.png'
import './shopping-detail.css'
import Button from '../../../../components/form/button/button'
import InputType from '../../../../components/form/form-controls/input'

class ShoppingDetail extends Component {

    state = {
        qty: 1,
        errMsg: ''
    }

    onConfirm = () => {
        if(this.validate()){
            this.setState({
                errMsg: ''
            })
        }else{
            this.setState({
                errMsg: 'quantity should be more than 0'
            })
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    validate = () => {
        const { qty } = this.state
        return  qty >= 1 && qty !== ''
    }

    render() {
        return(
            <div className="shopping-details">
                <div className="shopping-details-upper">
                    <div className="shopping-details-img">
                        <img src={HaloImage} alt="ray" className="shopping-details-image"/>
                    </div>
                    <div className="shopping-details-desc">
                        <h1>Ethereal Halo</h1>
                        <h5>A smart dual extruder printer for your everyday 3D printing needs!</h5>
                        <h2 className="price">&#8377; 14,99,999</h2>
                    </div>
                    <div className="shopping-detail-buy">
                        <Button isType="primary" isBlock={true} classValue="confirm-btn" onClick={this.onConfirm}>Confirm</Button>
                        <InputType 
                            type="number"
                            value={this.state.qty}
                            name="qty" 
                            labelName="qty"
                            placeholder="qty"
                            onInputChange={this.onInputChange}
                            isRequired={true}
                            classValue="order-qty"
                            defValue="1"
                        />
                        {
                            this.state.errMsg
                            ?
                            <p>
                                <strong style={{color: 'red'}}>error:&nbsp;</strong><strong>{this.state.errMsg}</strong>
                            </p>
                            :null
                        }
                    </div>
                </div>
                <div className="shopping-details-lower">
                    <div className="shopping-details-lower-left">
                        <h1>Specifications</h1>
                        <div className="shopping-details-specification">
                            <div className="shopping-details-specification-row">
                                <div className="speci-col-1">Print Volume</div>
                                <div className="speci-col-2">250 X 200 X 200 mm</div>
                            </div>
                            <div className="shopping-details-specification-row">
                                <div className="speci-col-1">Printer Dimension</div>
                                <div className="speci-col-2">480 X 435 X 425 mm</div>
                            </div>
                            <div className="shopping-details-specification-row">
                                <div className="speci-col-1">Weight</div>
                                <div className="speci-col-2">20 kgs</div>
                            </div>
                            <div className="shopping-details-specification-row">
                                <div className="speci-col-1">Accuracy</div>
                                <div className="speci-col-2">X-Axis, Y-Axis: 12.5 microns <br/> Z-Axis: 2 microns</div>
                            </div>
                            <div className="shopping-details-specification-row">
                                <div className="speci-col-1">Nozzle Size</div>
                                <div className="speci-col-2">{`< 2 mins`}</div>
                            </div>
                            <div className="shopping-details-specification-row">
                                <div className="speci-col-1">Input Power</div>
                                <div className="speci-col-2">110-240 VAC, 4A</div>
                            </div>
                        </div>
                    </div>
                    <div className="shopping-details-lower-right">
                        <h1>Description</h1>
                        <p>
                            The Ethereal Ray is a smart device built to unbridle the designer and engineer in you. Equipped with two nozzles, the Ray helps you achieve prints with multiple materials and dual colours.

                            Print seamlessly via Wi-Fi. Slice on the cloud. Monitor through your phone. Save prints on the cloud.

                            User experience takes top priority at Ethereal Machines. The Ray dons a 5" capacitive touchscreen and LEDs that signal various stages of a print to enhance user experience.

                            The Ethereal Ray is poised to provide a makeover to your desktop and is your tool to take your ideas from design to prototype stage.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
} 

export default ShoppingDetail