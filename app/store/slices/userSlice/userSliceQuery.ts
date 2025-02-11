import {createApi} from "@reduxjs/toolkit/query/react";
import {deleteCookie, setCookie} from "cookies-next";
import {baseQuery} from "@/app/api/configQuery";
import {User} from "@/app/store/slices/userSlice/userSlice.types";
import {saveToLocalStorage} from "@/app/lib/utils";

/**
 * Work with api via RTK query
 */
export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        // Loginization followed by saving to cookies
        login: builder.mutation<AuthResponse, AuthFormValues>({
            query: (credentials) => ({
                url: "login",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(_, {queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;

                    // Save the token to a cookie
                    setCookie("access_token", data.access_token, {
                        maxAge: 60 * 60 * 24 * 7,
                        path: "/",
                        secure: process.env.NODE_ENV === "production",
                    });

                    // Save the user to localStorage
                    saveToLocalStorage<User>("user", data.user);
                } catch (error) {
                    console.error("Login error:", error);
                }
            }
        }),

        // Registration
        register: builder.mutation<AuthResponse, AuthFormValues>({
            query: (credentials) => ({
                url: "register",
                method: "POST",
                body: credentials,
            }),
        }),

        // Check authorization
        checkAuth: builder.query<{ isLogin: boolean }, void>({
            query: () => ({
                url: "check",
                method: "GET",
            }),
        }),
        // Get a user item from LocalStorage
        getUserDataFromStorage: builder.query<User | null, { key: string; value?: unknown }>({
            queryFn: async ({key, value}) => ({
                data: value !== undefined
                    ? (localStorage.setItem(key, JSON.stringify(value)), value as User)
                    : JSON.parse(localStorage.getItem(key) || "null"),
            }),
        }),
        // Log out of the account by deleting the token from the cookies
        removeCookies: builder.mutation<null | true, { key: string , cookiesKey: string }>({
            queryFn: async ({key, cookiesKey}) => {
                deleteCookie(cookiesKey);
                localStorage.removeItem(key);
                return {data: true};
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useRemoveCookiesMutation,
    useGetUserDataFromStorageQuery
} = authAPI;

//-----------------------------------------Types-------------------------------------

export type AuthFormValues = Record<"username" | "password" | "server", string>
export type AuthAccess_token = Record<"access_token", string>
export type AuthResponse = {
    access_token: AuthAccess_token
    user: User
}


//----------------------------------------------------------------------------------------------------
/*// Обертка для обработки ошибок (Аналог `interceptors.response`)
const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
    try {
        const result = await baseQuery(args, api, extraOptions);
        return result;
    } catch (error) {
        const errorData = {
            message: error.data?.message || error.error || "Unknown error",
            status: error.status || 500,
            url: args.url,
            timestamp: new Date().toISOString(),
        };

        console.error("API Error:", errorData);
        return { error: errorData };
    }
};


*/



