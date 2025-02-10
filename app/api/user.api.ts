import api from "@/app/api/config";
import {AuthResponse} from "@/app/store/slices/userSlice/userSlice.types";
import {setCookie} from "cookies-next";

/**
 * Authentication API
 */
export const authAPI = {
    login: (credentials: AuthFormValues) =>
        api.post<AuthResponse>("login", credentials).then(response => {
            const { access_token } = response.data;

            setCookie("access_token", access_token, {
                maxAge: 60 * 60 * 24 * 7, // 7 дней // 604800 сек
                path: "/",
                secure: process.env.NODE_ENV === "production",
            });

            return response.data;
        }),
    register: (credentials: AuthFormValues) =>
        api.post<AuthResponse>("register", credentials).then(response => response.data),

    checkAuth: () =>
        api.get<AuthResponse>("check", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }).then(response => response.data)
};

export type AuthFormValues = Record<"username" | "password", string>


