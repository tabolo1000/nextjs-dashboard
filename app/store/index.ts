import { configureStore } from '@reduxjs/toolkit';
//import userReducer from './slices/userSlice';
import linguisticsReducer from './slices/linguisticsSlice';
import configureApp from "@/app/store/slices/mainSlice/configureAppSlice";

export const store = configureStore({
    reducer: {
        //user: userReducer, // Состояние пользователя
        linguistics: linguisticsReducer, // Состояние для math
        /**
         * Sets Settings for the entire appliance
         */
        mainSlice: configureApp
    },
});

// Типизация для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


