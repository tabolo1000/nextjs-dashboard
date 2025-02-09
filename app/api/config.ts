import axios from 'axios';
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

export default api;