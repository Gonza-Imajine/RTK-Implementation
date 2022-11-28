import { request } from './helpers';

export const login = (params) => request('POST', '/auth/sign-in', params);

export const register = (params) => request('POST', '/auth/sign-up', params);

export const getProfile = () => request('GET', '/auth/me');