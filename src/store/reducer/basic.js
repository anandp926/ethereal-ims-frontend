import * as actionType from '../actions/action-type'

const reducer = (state= {basic: []}, action) => {
    switch(action.type) {
        case actionType.USER_BASIC:
            return {
                ...state,
                basic: action.value
            }
        default:
            return state
    }
};

export default reducer