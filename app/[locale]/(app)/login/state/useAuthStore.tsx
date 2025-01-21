'use client';

import { create } from 'zustand';
import axios from 'axios';
import {ErrorFromResponse} from "stream-chat";

// Типы для значений формы
interface AuthFormValues {
    username: string;
    password: string;
}

// Типы для действий Formik
interface FormikActions {
    setSubmitting: (isSubmitting: boolean) => void;
    resetForm: () => void;
    setErrors: (errors: Partial<AuthFormValues & { server?: string }>) => void;
}

// Типизация Zustand Store
interface AuthStore {
    isLogin: boolean;
    toggleMode: () => void;
    submitForm: (values: AuthFormValues, actions: FormikActions) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
    isLogin: true,
    toggleMode: () => set((state) => ({ isLogin: !state.isLogin })),

    // Обработчик отправки формы
    submitForm: async (values, actions) => {
        const { setSubmitting, resetForm, setErrors } = actions;
        const { isLogin } = useAuthStore.getState(); // Получаем текущий режим
        const endpoint = isLogin
            ? 'http://localhost:3001/auth/login'
            : 'http://localhost:3001/auth/register';

        try {
            const response = await axios.post(endpoint, {
                username: values.username,
                password: values.password,
            });

            console.log('Успешно:', response.data);
            debugger
            // Сохраняем токен в localStorage
            if (response.data?.access_token) {
                localStorage.setItem('access_token', response.data.access_token);
                console.log('Токен сохранён в localStorage:', response.data.access_token);
            }

            // Сброс формы после успешной отправки
            resetForm();
        } catch (error: unknown) {
            if(error instanceof ErrorFromResponse){
                console.error('Ошибка:', error.response?.data || error.message);
                setErrors({ server: error.response?.data?.message || 'Ошибка сервера' });
            }
        } finally {
            setSubmitting(false);
        }
    },
}));