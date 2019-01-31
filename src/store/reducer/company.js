import * as actionType from '../actions/action-type'

const reducer = (state= {company: []}, action) => {
    switch(action.type) {
        case actionType.COMPANY:
            return {
                ...state,
                company: action.value
            }
        case actionType.ADD_COMPANY:
            return {
                ...state,
                company: [
                    ...state.company.filter((comp) => comp._id !== action.value._id).concat([action.value])
                ]
            }
        case actionType.ADD_VENDOR_PRODUCTS:
        return Object.assign({}, state, {
            company: state.company.map((vendor) => {
                if(vendor._id !== action.value._id){
                    return vendor
                }

                var newMachine = action.value.products.filter(newMachine =>
                    {
                    return !vendor.products.some(machine => {
                        return newMachine._id === machine._id;
                    });
                });
                
                return Object.assign({}, vendor, {
                    products: vendor.products.concat(newMachine)
                })
            })
        })
        default:
            return state
    }
};

export default reducer