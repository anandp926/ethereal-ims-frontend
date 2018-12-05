import * as actionType from "../actions/action-type";

const reducer = (state= {users: [], profile: []}, action) => {
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
        case actionType.APPROVE_USER:
            return Object.assign({}, state, {
                users: state.users.map((user) => {
                    if(user._id !== action.value._id){
                        return user
                    }

                    return Object.assign({}, user, {
                        approval: action.value.approval
                    })
                })
            })
        case actionType.USER_PROFILE:
            return {
                ...state,
                profile: action.value
            }
        default:
            return state
    }
}

export default reducer