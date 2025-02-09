// authAPI.ts
import axios from 'axios';

const API_URL = 'http://localhost:3001/auth';

export const authAPI = {
    login: (credentials: { username: string; password: string }) =>
        axios.post(`${API_URL}/login`, credentials),

    register: (credentials: { username: string; password: string }) =>
        axios.post(`${API_URL}/register`, credentials),

    checkAuth: () =>
        axios.get(`${API_URL}/check`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
};
