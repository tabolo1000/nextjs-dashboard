import { configureStore } from '@reduxjs/toolkit';
import configureAppSlice from "@/app/store/slices/configureAppSlice/configureAppSlice";
import WordsSliderSlice from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";
import {authAPI} from "@/app/store/slices/userSlice/userSliceQuery";
/**
 * Status of main functions of the app
 */
export const store = configureStore({
    reducer: {
        /**
         * Working with the word slider
         */
        linguistics: WordsSliderSlice, // Состояние для math
        /**
         * Sets Settings for the entire appliance
         */
        mainSlice: configureAppSlice,
        /**
         * Log in, log out of the account work with users.
         */
        [authAPI.reducerPath]: authAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authAPI.middleware),
});
//-----------------------------------------Types----------------------------------------------------------

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


