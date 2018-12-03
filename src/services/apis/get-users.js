import axios from '../axios/axios'

const getUser = (callback, token) => {
    axios.get(`/user`, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch(err => callback(err))
}


export  default getUser