import { combineReducers } from 'redux'
import login from './login'
import basic from './basic'

const rootReducer = combineReducers({
    Login: login,
    Basic: basic
});

export default rootReducer