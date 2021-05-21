import client from '../client';
import {SigninDto} from '~/shared/types/services';

const sigIn = (data: SigninDto) => {
    return client({
        url: 'signin',
        method: 'GET',
        data,
    });
}

export default {
    sigIn,
}