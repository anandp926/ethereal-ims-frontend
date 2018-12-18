import * as actonType from '../actions/action-type'


const reducer = (state= {products: []}, action) => {
    switch(action.type) {
        case actonType.PRODUCTS:
            return {
                ...state,
                products: action.value
            }
        case actonType.ADD_PRODUCTS:
            return {
                ...state,
                products: state.products.filter((product) => product._id !== action.value._id).concat([action.value])
            }
        default:
            return state
    };
};

export default reducer