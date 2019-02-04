/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001'
})

export default instance;