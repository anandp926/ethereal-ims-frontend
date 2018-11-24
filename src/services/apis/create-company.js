import axios from '../axios/axios'

const createCompany = (callback, data, token) => {
    axios.post(`/user/company`, data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch(err => callback(err))
}

export default createCompany