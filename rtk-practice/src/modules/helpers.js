import axios from 'axios';
import { store } from '../redux/store';

const BASE_URL = 'http://localhost:8080/api';

export const request = (method, path, data = {}) => {
    const url = `${BASE_URL}/${path}`;
    const token = store.getState().auth.token;
    return axios({
        method,
        url,
        params: data.params,
        data,
        baseURL: BASE_URL,
        headers: { jwt: token },
    });
};
