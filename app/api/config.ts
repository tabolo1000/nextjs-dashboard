import axios from 'axios';
import {getCookie } from "cookies-next";
/**
 * General settings for api.
 */
const api = axios.create({
    baseURL: (process.env.NEXT_PUBLIC_API_URL) ? process.env.NEXT_PUBLIC_API_URL.trim() : 'http://localhost:3001',
    timeout: 2000000,
    headers: {
        'Content-Type': 'application/json',
    },
});
/**
 * Intersepter for error handling
 */
api.interceptors.response.use(
    response => response,
    error => {
        const errorData = {
            message: error.response?.data?.message || error.message,
            status: error.response?.status || 500,
            url: error.config?.url,
            timestamp: new Date().toISOString()
        };

        console.error('API Error:', errorData);
        return Promise.reject(errorData);
    }
);

api.interceptors.request.use((config) => {
    if (typeof window === "undefined") {
        // Сервер: берем токен из cookies
        const token = getCookie("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    } else {
        // Клиент: берем токен из cookies (или localStorage, если нужно)
        const token = getCookie("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});

export default api;