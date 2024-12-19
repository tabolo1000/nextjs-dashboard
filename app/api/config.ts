import axios from 'axios';

const api = axios.create({
    baseURL: (process.env.NEXT_PUBLIC_API_URL) ? process.env.NEXT_PUBLIC_API_URL.trim() : 'http://localhost:3001',
    timeout: 10000, // Таймаут для запросов
    headers: {
        'Content-Type': 'application/json',
    },
});

// Интерсептор для обработки ошибок (опционально)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Произошла ошибка:', error);
        return Promise.reject(error.response?.data || error.message);
    }
);

export default api;