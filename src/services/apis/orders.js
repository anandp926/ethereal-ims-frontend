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
export const checkout = (callback, id, data, token) => {
    axios.patch(`/order/checkout/${id}`, data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

// (order id)
export const changeOrderStatus = (callback, id, data, token) => {
    axios.patch(`/order/change-order-status/${id}`, data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

// get orders
export const getOrders = (callback, token) => {
    axios.get('/orders', {headers:{"x-auth": token}})
    .then((res) => {
        callback(res)
    }).catch(err => callback(err))
}

// get unproceed order
export const getUnproceedOrder = (callback, token) => {
    axios.get('/order/unproceed', {headers:{"x-auth": token}})
    .then((res) => {
        callback(res)
    }).catch(err => callback(err))
}