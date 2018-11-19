import axios from '../axios/axios'

const createProfile = (callback, data, token) => {
    axios.post(`/user/profile`, data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch(err => callback(err))
}

export default createProfile