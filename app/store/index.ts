import { configureStore } from '@reduxjs/toolkit';
import configureAppSlice from "@/app/store/slices/configureAppSlice/configureAppSlice";
import WordsSliderSlice from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";
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
        mainSlice: configureAppSlice
    },
});
//-----------------------------------------Types----------------------------------------------------------

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


