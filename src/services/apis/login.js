/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import axios from '../axios/axios'

export const login = (callback, data) => {
    axios.post('/user/login', data)
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

export const tokenVerify = (callback, token) => {
    axios.post(`/user/token-verify`, null, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch((err) => callback(err))
}