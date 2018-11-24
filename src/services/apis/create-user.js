import axios from '../axios/axios'

const createUser = (callback, data, token) => {
    axios.post(`/user`, data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch(err => callback(err))
}

export default createUser