import { configureStore } from '@reduxjs/toolkit';
//import userReducer from './slices/userSlice';
import linguisticsReducer from './slices/linguisticsSlice';
import mainSlice from "@/app/store/slices/mainSlice/mainSlice";

export const store = configureStore({
    reducer: {
        //user: userReducer, // Состояние пользователя
        linguistics: linguisticsReducer, // Состояние для math
        mainSlice: mainSlice
    },
});

// Типизация для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;