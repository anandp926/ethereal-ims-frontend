import axios from '../axios/axios';

const deleteToken = (callback, token) => {
    axios.delete(`/user/token`, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch((err) => callback(err));
}

export default deleteToken