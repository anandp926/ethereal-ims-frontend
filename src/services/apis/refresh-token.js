import axios from '../axios/axios';
import headers from '../axios/headers'

const refreshToken = (callback, data) => {
    axios.post('/user/refresh/token', data, {headers:{...headers}})
        .then((res) => {
            callback(res)
        }).catch((err) => callback(err));
}

export default refreshToken