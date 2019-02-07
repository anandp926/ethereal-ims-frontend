/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import * as actionType from '../actions/action-type'

const reducer = (state= {orders: [], firstRun: true}, action) => {
    switch(action.type) {
        case actionType.ORDERS: 
            return {
                ...state,
                orders: action.value
            }
        case actionType.UPDATE_FIRST_RUN_ORDERS:
            return {
                ...state,
                firstRun: action.value
            }
        case actionType.ADD_UNPROCEED_ORDER:
            return {
                ...state,
                orders: state.orders.filter((order) => order._id !== action.value._id).concat([action.value])
            }
        case actionType.REMOVE_UNPROCEED_ORDER:
            return {
                ...state,
                orders: state.orders.filter((order) => order._id !== action.value._id)
            }
        case actionType.UNPROCEED_ADD_PRODUCT:
            return Object.assign({}, state, {
                orders: state.orders.map((order) => {

                    if(order._id !== action.value._id){
                        return order
                    }

                    var newProduct = action.value.products.filter(nproduct =>
                        {
                        return !order.products.some(oproduct => {
                            return nproduct._id === oproduct._id;
                        });
                    });

                    return Object.assign({}, order, {
                        products: order.products.concat(newProduct)
                    })
                })
            })
        case actionType.UNPROCEED_REMOVE_PRODUCT:
            return Object.assign({}, state, {
                orders: state.orders.map((order) => {

                    if(order._id !== action.value.data._id){
                        return order
                    }
                    
                    return Object.assign({}, order, {
                        products: order.products.filter((nProduct) => nProduct._id !== action.value.id)
                    })
                })
            })
        case actionType.UPDATE_ORDER_STATUS:
            return Object.assign({}, state, {
                orders: state.orders.map((order) => {
                    if(order._id !== action.value._id){
                        return order
                    }
                    
                    return Object.assign({}, order, {
                        orderStatus: {
                            allocated: action.value.orderStatus.allocated,
                            installed: action.value.orderStatus.installed,
                            packed: action.value.orderStatus.packed,
                            shipped: action.value.orderStatus.shipped
                        }
                    })
                })
            })
        default:
            return state
    }
}

export default reducer