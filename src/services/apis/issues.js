import axios from '../axios/axios';

// (user id)
export const createIssue = (callback, data, token) => {
    axios.post(`/issues`, data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

// get issues
export const getIssues = (callback, token) => {
    axios.get('/issues', {headers:{"x-auth": token}})
    .then((res) => {
        callback(res)
    }).catch(err => callback(err))
}