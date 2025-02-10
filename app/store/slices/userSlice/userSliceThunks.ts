import {createApiThunk, createApiThunkWithStorage, createStorageThunk, removeCookiesThunk} from "@/app/lib/utils";
import {authAPI, AuthFormValues} from "@/app/api/user.api";
import {AuthResponse} from "@/app/store/slices/userSlice/userSlice.types";
import {getUserData, logout} from "@/app/store/slices/userSlice/userSlice";

/**
 * Thunk for user authorization
 */


export const getUserDataFromStorage = createStorageThunk<{id: string}>(
    "user",
    getUserData
);

export const removeCookies = removeCookiesThunk(
    "access_token",
    "user",
    logout
);

export const userSliceThunks = {
 /*   loginUser: createApiThunk<AuthResponse, AuthFormValues>(
        'user/login',
        async (credentials) => authAPI.login(credentials),
        {key: "user"}
    ),*/

    loginUser: createApiThunkWithStorage<AuthResponse, AuthFormValues>(
        'user/login',
        async (credentials) => authAPI.login(credentials),
        'user'
    ),

    registerUser: createApiThunk(
        'user/register',
        async (credentials: AuthFormValues) => authAPI.register(credentials)
    ),

    checkAuthUser: createApiThunk(
        'user/checkAuthUser',
        async (): Promise<AuthResponse> => authAPI.checkAuth()
    )
}
