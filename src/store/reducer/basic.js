/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import * as actionType from '../actions/action-type'

const reducer = (state= {basic: []}, action) => {
    switch(action.type) {
        case actionType.USER_BASIC:
            return {
                ...state,
                basic: action.value
            }
        case actionType.FIRST_TIME: {
            return {
                ...state,
                basic: action.value
            }
        }
        default:
            return state
    }
};

export default reducer