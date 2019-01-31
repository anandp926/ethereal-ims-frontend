import * as actionType from '../actions/action-type'

const reducer = (state= {products: []}, action) => {
    switch(action.type) {
        case actionType.PRODUCTS:
            return {
                ...state,
                products: action.value
            }
        case actionType.ADD_PRODUCTS:
            return {
                ...state,
                products: state.products.filter((product) => product._id !== action.value._id).concat([action.value])
            }
        case actionType.ADD_VERSION:
            return Object.assign({}, state, {
                products: state.products.map((product) => {
                    if(product._id !== action.value._id){
                        return product
                    }

                    var newDetail = action.value.details.filter(detail =>
                         {
                        return !product.details.some(proDetail => {
                            return detail._id === proDetail._id;
                        });
                    });
                    
                    return Object.assign({}, product, {
                        details: product.details.concat(newDetail)
                    })
                })
            })
        case actionType.ADD_MACHINE:
            return Object.assign({}, state, {
                products: state.products.map((product) => {
                    if(product._id !== action.value._id){
                        return product
                    }

                    var newMachine = action.value.productList.filter(newMachine =>
                        {
                        return !product.productList.some(machine => {
                            return newMachine._id === machine._id;
                        });
                    });
                    
                    var updatedDetail = action.value.details.filter((detail) => {
                        return detail.version === newMachine[0].version
                    });
                    
                    return Object.assign({}, product, {
                        count: action.value.count,
                        sold: action.value.sold,
                        productList: product.productList.concat(newMachine),
                        details: product.details.map((detail) => {
                            if(detail.version !== newMachine[0].version){
                                return detail
                            }

                            return Object.assign({}, detail, {
                                count: updatedDetail[0].count
                            })
                        })
                    })
                })
            })
        case actionType.UPDATE_MACHINE_STATUS:
            return Object.assign({}, state, {
                products: state.products.map((product) => {
                    if(product._id !== action.value.data._id){
                        return product
                    }

                    var updatedStatus = action.value.data.productList.filter((machine) => {
                        return machine.serialNumber === action.value.serialNumber
                    });

                    return Object.assign({}, product, {
                        count: action.value.count,
                        sold: action.value.sold,
                        productList: product.productList.map((machine) => {
                            if(machine.serialNumber !== action.value.serialNumber){
                                return machine
                            }
                            
                            return Object.assign({}, machine, {
                                sold: updatedStatus[0].sold
                            })
                        })
                    })
                })
            })
        default:
            return state
    }
};

export default reducer