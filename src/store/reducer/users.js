/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import * as actionType from "../actions/action-type";

const reducer = (state= {users: [], profile: [], company: [], firstRun: true}, action) => {
    switch(action.type){
        case actionType.USERS:
            return {
                ...state,
                users: action.value
            }
        case actionType.UPDATE_FIRST_RUN_USERS:
            return {
                ...state,
                firstRun: action.value
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
        case actionType.USER_COMPANY:
            return {
                ...state,
                company: action.value
            }
        default:
            return state
    }
}

export default reducer