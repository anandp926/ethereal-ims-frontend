import axios from '../axios/axios';

// get issues
export const getUserCompany = (callback, token) => {
    axios.get('/user-company', {headers:{"x-auth": token}})
    .then((res) => {
        callback(res)
    }).catch(err => callback(err))
}

// forgot password
export const forgotPassword = (callback, data) => {
    axios.patch('/user/forgot-password', data)
    .then((res) => {
        callback(res)
    }).catch((err) => callback(err))
}