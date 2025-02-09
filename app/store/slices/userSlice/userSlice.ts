// userSlice.ts
import { createSlice} from '@reduxjs/toolkit';
import {authAPI, AuthFormValues} from "@/app/api/user.api";
import {AuthResponse, UserState} from '@/app/store/slices/userSlice/userSlice.types';
import {createApiThunk} from "@/app/lib/utils";


const initialState: UserState = {
    id: '',
    username: '',
    email: '',
    avatarUrl: '/default-avatar.png',
    loggedIn: false,
    role: 'guest',
    status: 'active',
    lastLogin: null,

    gameProfile: {
        progress: {
            level: 1,
            experience: 0,
            achievements: [],
        },
        inventory: [],
        currency: 0,
    },

    social: {
        friends: [],
        followers: [],
        following: [],
    },

    learningProgress: {
        completedCourses: [],
        currentCourses: [],
        skills: {},
    },

    preferences: {
        theme: 'light',
        notifications: {
            email: true,
            push: true,
            social: true,
        },
        privacy: {
            profileVisible: true,
            searchable: true,
        },
    },
};



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Синхронные редьюсеры (ваши существующие)
        logout: (state) => {
            Object.assign(state, initialState);
            localStorage.removeItem('access_token');
        },
        /*updateProfile: (state, action: PayloadAction<{ /!* ... *!/ }>) => { /!* ... *!/ },*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                const { id, username, email, avatarUrl, role, access_token } = action.payload;
                state.id = id;
                state.username = username;
                state.email = email;
                state.avatarUrl = avatarUrl || '/default-avatar.png';
                state.role = role;
                state.loggedIn = true;
                state.lastLogin = new Date().toISOString();
                localStorage.setItem('access_token', access_token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loggedIn = false;
                // Можно добавить обработку ошибок
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                // Логика после успешной регистрации
            });
    }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;


export const loginUser = createApiThunk(
    'user/login',
    async (credentials: AuthFormValues) => {
        return  authAPI.login(credentials);
    }
);
export const registerUser = createApiThunk(
    'user/register',
    async (credentials: AuthFormValues) => {
        return authAPI.register(credentials);
    }
);
/*
// Асинхронные Thunk-и
export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials: { username: string; password: string }, { rejectWithValue }) => {
        try {
            debugger
            const response = await authAPI.login(credentials);
            debugger

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Ошибка авторизации');
        }
    }
);

export const registerUser = createAsyncThunk(
    'user/register',
    async (credentials: { username: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await authAPI.register(credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Ошибка регистрации');
        }
    }
);*/
