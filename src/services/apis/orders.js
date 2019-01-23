import axios from '../axios/axios'

export const addVendor = (callback, data, token) => {
    axios.post('/order/add-vendor', data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

// (order id)
export const addProduct = (callback, id, data, token) => {
    axios.patch(`/order/add-product/${id}`, data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

// (order id)
export const removeProduct = (callback, id, data, token) => {
    axios.delete(`/order/remove-product/${id}`, {data, headers: {"x-auth": token}})
        .then((res) => {
            callback(res, data.machineSRN, data._id)
        }).catch((err) => callback(err));
}

// (order id)
export const checkout = (callback, id, token) => {
    axios.patch(`/order/checkout/${id}`, null, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

// (order id)
export const changeStatus = (callback, id, data, token) => {
    axios.patch(`/order/change-order-status/${id}`, data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res, data.status);
        }).catch((err) => callback(err));
};

// get orders
export const getOrders = (callback, token) => {
    axios.get('/orders', {headers:{"x-auth": token}})
    .then((res) => {
        callback(res)
    }).catch(err => callback(err))
}