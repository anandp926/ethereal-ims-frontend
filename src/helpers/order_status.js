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