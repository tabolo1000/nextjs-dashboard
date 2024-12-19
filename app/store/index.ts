import { configureStore } from '@reduxjs/toolkit';
//import userReducer from './slices/userSlice';
import linguisticsReducer from './slices/linguisticsSlice';

export const store = configureStore({
    reducer: {
        //user: userReducer, // Состояние пользователя
        linguistics: linguisticsReducer, // Состояние для math
    },
});

// Типизация для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;