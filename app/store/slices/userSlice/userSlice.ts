import { createSlice} from '@reduxjs/toolkit';
import { UserState } from '@/app/store/slices/userSlice/userSlice.types';
import {userSliceThunks} from "@/app/store/slices/userSlice/userSliceThunks";

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
            .addCase(userSliceThunks.loginUser.fulfilled, (state, action) => {
                const { user, access_token } = action.payload;
                const {id, username, email, avatarUrl, role,} = user
                state.id = id;
                state.username = username;
                state.email = email;
                state.avatarUrl = avatarUrl || '/default-avatar.png';
                state.role = role;
                state.loggedIn = true;
                state.lastLogin = new Date().toISOString();
                localStorage.setItem('access_token', access_token);
            })
            .addCase(userSliceThunks.loginUser.rejected, (state) => {
                state.loggedIn = false;
                // Можно добавить обработку ошибок
            })
            .addCase(
                userSliceThunks.registerUser.fulfilled,
                (state, action) => {
                // Логика после успешной регистрации
            });
    }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

