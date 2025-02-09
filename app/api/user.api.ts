import api from "@/app/api/config";
import {AuthResponse} from "@/app/store/slices/userSlice/userSlice.types";

/**
 * Authentication API
 */
export const authAPI = {
    login: (credentials: AuthFormValues) =>
        api.post<AuthResponse>("login", credentials).then(response => response.data),

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


