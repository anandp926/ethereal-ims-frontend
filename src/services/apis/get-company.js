import axios from '../axios/axios'

const getCompany = (callback, token) => {
    axios.get(`/user/company`, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch(err => callback(err))
}

export default getCompany