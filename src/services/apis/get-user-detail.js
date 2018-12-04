import axios from '../axios/axios'

const getUserProfile = (callback, id, token) => {
    axios.get(`/user/${id}`, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch(err => callback(err))
}


export  default getUserProfile