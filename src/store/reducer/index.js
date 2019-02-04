/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import { combineReducers } from 'redux';
import login from './login';
import basic from './basic';
import company from './company';
import users from './users';
import products from './product_catalog';
import orders from './orders'

const rootReducer = combineReducers({
    Login: login,
    Basic: basic,
    Company: company,
    Users: users,
    Products: products,
    Orders: orders
});

export default rootReducer