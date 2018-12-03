import * as actionType from "../actions/action-type";

const reducer = (state= {users: []}, action) => {
    switch(action.type){
        case actionType.USERS:
            return {
                ...state,
                users: action.value
            }
        case actionType.ADD_USER:
            return {
                ...state,
                users: [
                    ...state.users.filter((user) => user._id !== action.value._id).concat([action.value])
                ]
            }
        default:
            return state
    }
}

export default reducer