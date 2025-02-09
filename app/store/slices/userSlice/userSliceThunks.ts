import {createApiThunk} from "@/app/lib/utils";
import {authAPI, AuthFormValues} from "@/app/api/user.api";
import {AuthResponse} from "@/app/store/slices/userSlice/userSlice.types";

/**
 * Thunk for user authorization
 */
export const userSliceThunks = {
    loginUser: createApiThunk<AuthResponse, AuthFormValues>(
        'user/login',
        async (credentials) => authAPI.login(credentials)
    ),

    registerUser: createApiThunk(
        'user/register',
        async (credentials: AuthFormValues) => authAPI.register(credentials)
    )
}
