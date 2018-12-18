import axios from '../axios/axios'

export const createProduct = (callback, data, token) => {
    axios.post('/product', data, {headers: {'x-auth': token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

export const createVersion = (callback, id, data, token) => {
    axios.patch(`/product/version/${id}`, data, {headers: {'x-auth': token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

export const productEntry = (callback, id, data, token) => {
    axios.patch(`/product/version/entry/${id}`, data, {headers: {'x-auth': token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

export const getAllProduct = (callback, token) => {
    axios.get('/product', {headers: {'x-auth': token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};