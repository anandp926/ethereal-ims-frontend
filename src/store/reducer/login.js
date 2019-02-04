/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import * as actionType from '../actions/action-type'
import {GetToken} from '../../helpers/token'

const initialState = {
    isLogedIn: !!GetToken(),
    redirect: '/dashboard'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.LOGIN: 
            return {
                isLogedIn: !!GetToken(),
                redirect: action.value
            }
        case actionType.LOGOUT:
            return {
                isLogedIn: false
            }
        default:
            return state
    }
};

export default reducer;