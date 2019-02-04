/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

export const status = (orderStatus) => {
    if(orderStatus.allocated && !orderStatus.packed && !orderStatus.shipped && !orderStatus.installed){
        return "allocated"
    }else if(orderStatus.allocated && orderStatus.packed && !orderStatus.shipped && !orderStatus.installed){
        return "packed"
    }else if(orderStatus.allocated && orderStatus.packed && orderStatus.shipped && !orderStatus.installed){
        return"shipped"
    }else if(orderStatus.allocated && orderStatus.packed && orderStatus.shipped && orderStatus.installed){
        return "installed"
    }
    return null
}