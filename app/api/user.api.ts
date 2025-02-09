import api from "@/app/api/config";

/**
 * Authentication API
 */
export const authAPI = {
    login: (credentials: AuthFormValues) => api.post("login", credentials),
    register: (credentials: AuthFormValues) => api.post("register", credentials),
    checkAuth: () => api.get(`check`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
};

export type AuthFormValues = Record<"username" | "password", string>


