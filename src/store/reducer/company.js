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
        default:
            return state
    }
};

export default reducer