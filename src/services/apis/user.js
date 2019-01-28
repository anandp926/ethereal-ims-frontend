import axios from '../axios/axios';

// get issues
export const getUserCompany = (callback, token) => {
    axios.get('/user-company', {headers:{"x-auth": token}})
    .then((res) => {
        callback(res)
    }).catch(err => callback(err))
}