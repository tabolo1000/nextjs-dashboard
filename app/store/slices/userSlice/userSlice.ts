import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '@/app/store/slices/userSlice/userSlice.types';
import {userSliceThunks} from "@/app/store/slices/userSlice/userSliceThunks";

/**
 * A part of the user experience
 */
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
        // Logging out of account
        logout: (state) => {
            Object.assign(state, initialState);
        },
        getUserData: (state, action) => {
            const {id, username, email, avatarUrl, role,} = action.payload;
            debugger
            state.id = id;
            state.username = username;
            state.email = email;
            state.avatarUrl = avatarUrl || '/default-avatar.png';
            state.role = role;
            state.loggedIn = true;
            state.lastLogin = new Date().toISOString();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userSliceThunks.loginUser.fulfilled, (state, action) => {
                debugger
                const { user, access_token } = action.payload;
                const {id, username, email, avatarUrl, role,} = user
                state.id = id;
                state.username = username;
                state.email = email;
                state.avatarUrl = avatarUrl || '/default-avatar.png';
                state.role = role;
                state.loggedIn = true;
                state.lastLogin = new Date().toISOString();
            })
            .addCase(userSliceThunks.loginUser.rejected, (state) => {
                state.loggedIn = false;
                // Можно добавить обработку ошибок
            })
            .addCase(
                userSliceThunks.registerUser.fulfilled,
                (state, action) => {
                // Логика после успешной регистрации
            })
            .addCase(
                userSliceThunks.registerUser.rejected,
                (state, action) => {

                })
            .addCase(
                userSliceThunks.checkAuthUser.fulfilled,
                (state) => {
                    state.loggedIn = true
                })
            .addCase(
                userSliceThunks.checkAuthUser.rejected,
                (state) => {
                    state.loggedIn = false;
                })

    }
});

export const { logout, getUserData } = userSlice.actions;
export default userSlice.reducer;



/*updateProfile: (state, action: PayloadAction<{ /!* ... *!/ }>) => { /!* ... *!/ },*/