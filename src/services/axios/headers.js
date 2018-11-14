import { GetToken } from '../../helpers/token'

const headers = {
    "x-auth": GetToken() ? GetToken() : '',
};

export default headers