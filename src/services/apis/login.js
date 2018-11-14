import axios from '../axios/axios'

const login = (callback, data) => {
    axios.post('/user/login', data)
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

export default login