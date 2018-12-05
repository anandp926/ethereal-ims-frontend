import axios from '../axios/axios'

const approveUser = (callback, id, token) => {
    axios.patch(`/user/${id}`, null,{headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch(err => callback(err))
}

export default approveUser