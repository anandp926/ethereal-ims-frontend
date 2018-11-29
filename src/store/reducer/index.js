import { combineReducers } from 'redux'
import login from './login'
import basic from './basic'
import company from './company'

const rootReducer = combineReducers({
    Login: login,
    Basic: basic,
    Company: company
});

export default rootReducer