import { createSlice } from '@reduxjs/toolkit';
import {languageMessage} from "@/i18n/languages";
import {
    addWordToCarousel,
    deleteWordToCarousel,
    loadCollectionWordsForCarousel,
    loadWordsForCarousel
} from "@/app/store/slices/wordsSliderSlice/wordsSliderSliceThunks";


export enum LoadingStatus {
    padding = "padding",
    fulfilled = "fulfilled",
    rejected = "rejected",
}

/**
 * Condition for working with slider words in the liguistics section
 */
const initialState: WordsSliderSliceState = {
    wordsCarousel: [],
    loading: {
            addWord: { status: LoadingStatus.fulfilled, message: null },
            deleteWord: { status: LoadingStatus.fulfilled, message: null },
            fetchWords: { status: LoadingStatus.fulfilled, message: null },
    },
    error: null,
};

const WordsSliderSlice = createSlice({
    name: 'linguistics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        /**
         * Loading words
         */
        builder
            .addCase(loadWordsForCarousel.pending, (state) => {
                state.loading.fetchWords = {
                    status: LoadingStatus.padding,
                    message: {
                        en: "Word download is in progress",
                        ru: "Идет загрузка слов"
                    },
                };
                state.error = null;
            })
            .addCase(loadWordsForCarousel.fulfilled, (state, action) => {
                state.loading.fetchWords = {
                    status: LoadingStatus.fulfilled,
                    message: "Слова успешно загружены!!!",
                };
                state.wordsCarousel = action.payload;
            })
            .addCase(loadWordsForCarousel.rejected, (state, action) => {
                state.loading.fetchWords = {

                    status: LoadingStatus.rejected,
                    message: {
                        ru: "Загрузка слов не удалась ⚠",
                        en: "Uploading words failed ⚠"
                    },
                };
                state.error = action.payload || "Не удалось загрузить слова";
            });
        /**
         * Loading the words of the collection
         */
        builder
            .addCase(loadCollectionWordsForCarousel.pending, (state) => {
                state.loading.fetchWords = {
                    status: LoadingStatus.padding,
                    message: "Идет загрузка слов...",
                };
                state.error = null;
            })
            .addCase(loadCollectionWordsForCarousel.fulfilled, (state, action) => {
                state.loading.fetchWords = {
                    status: LoadingStatus.fulfilled,
                    message: "Слова успешно загружены!!!",
                };
                state.wordsCarousel = action.payload;
            })
            .addCase(loadCollectionWordsForCarousel.rejected, (state, action) => {
                state.loading.fetchWords = {
                    status: LoadingStatus.rejected,
                    message: "Загрузка слов не удалась ⚠",
                };
                state.error = action.payload || "Не удалось загрузить слова";
            });
        /**
         * Adding a word
         */
        builder
            .addCase(addWordToCarousel.pending, (state) => {
                state.loading.addWord = {
                    status: LoadingStatus.padding,
                    message: "Идет добавление слова...",
                };
                state.error = null;
            })
            .addCase(addWordToCarousel.fulfilled, (state, action) => {
                state.loading.addWord = {
                    status: LoadingStatus.fulfilled,
                    message: "Слово успешно добавлено!!!",
                };
                state.wordsCarousel.push(action.payload);
            })
            .addCase(addWordToCarousel.rejected, (state, action) => {
                state.loading.addWord = {
                    status: LoadingStatus.rejected,
                    message: "Добавление слова не удалось :(",
                };
                state.error = action.payload || "Не удалось добавить слово";
            });
        /**
         * Word deletion
         */
        builder
            .addCase(deleteWordToCarousel.pending, (state) => {
                state.loading.deleteWord = {
                    status: LoadingStatus.padding,
                    message: "Идет удаление слова...",
                };
                state.error = null;
            })
            .addCase(deleteWordToCarousel.fulfilled, (state, action) => {
                state.loading.deleteWord = {
                    status: LoadingStatus.fulfilled,
                    message: "Слово успешно удалено!!!",
                };

                const index = state.wordsCarousel.findIndex(
                    (el) => el._id === action.payload._id
                );
                if (index !== -1) {
                    state.wordsCarousel.splice(index, 1);
                }
            })
            .addCase(deleteWordToCarousel.rejected, (state, action) => {
                state.loading.deleteWord = {
                    status: LoadingStatus.rejected,
                    message: "Удаление слова не удалось :(",
                };
                state.error = action.payload || "Не удалось удалить слово";
            });
    },
});

//------------------------- Export LinguisticsState -------------------------------------------------

export default WordsSliderSlice.reducer;
//------------------------------------------- Types ---------------------------------------------------

type ActionLoading = {
    status: LoadingStatus;
    message: string | null | languageMessage
}

export interface Loading {
    addWord: ActionLoading;
    deleteWord: ActionLoading;
    fetchWords: ActionLoading;
}

export interface WordCarousel {
    _id: string
    morpheme: WordCarouselMorpheme,
    title: string,
    description: string,
    icon: string,
    quote: string,
    annotation?: string,
    joke?: string,
    derivatives?: Array<string>
    collections?: string[],
}

export interface WordCarouselUpdate {
    _id: string;
    morpheme?: WordCarouselMorpheme,
    title?: string,
    description?: string,
    icon?: string,
    quote?: string,
    annotation?: string,
    joke?: string,
    derivatives?: Array<string>
    collections?: string[],
}

export interface AddWordCarouselUpdate {
    morpheme: WordCarouselMorpheme,
    title: string,
    description: string,
    icon: string,
    quote: string,
    annotation: string,
    joke: string,
    derivatives: Array<string>
    collections?: string[],
}

interface WordCarouselMorpheme {
    prefix?: Array<string>;
    root: Array<string>;
    suffix?: Array<string>;
    end?: Array<string>;
}

interface WordsSliderSliceState {
    wordsCarousel: WordCarousel[],
    loading: Loading;
    error: string | null;
}