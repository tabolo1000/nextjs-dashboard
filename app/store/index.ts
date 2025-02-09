import { configureStore } from '@reduxjs/toolkit';
import configureAppSlice from "@/app/store/slices/configureAppSlice/configureAppSlice";
import WordsSliderSlice from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";
import userSlice from "@/app/store/slices/userSlice/userSlice";
/**
 * Status of main functions of the app
 */
export const store = configureStore({
    reducer: {
        user: userSlice,
        /**
         * Working with the word slider
         */
        linguistics: WordsSliderSlice, // Состояние для math
        /**
         * Sets Settings for the entire appliance
         */
        mainSlice: configureAppSlice
    },
});
//-----------------------------------------Types----------------------------------------------------------

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


