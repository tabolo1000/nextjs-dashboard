import { createSlice } from '@reduxjs/toolkit';
import {createApiThunk} from "@/app/store/utils/apiThunk";
import {
    createWord,
    deleteWord,
    fetchCollectionWordsCarousel,
    fetchWordsCarousel,
    updateWord
} from "@/app/api/linguistics";

export enum LoadingStatus {
    padding = "padding",
    fulfilled = "fulfilled",
    rejected = "rejected",
}

const initialState: LinguisticsState = {
    wordsCarousel: [
        {
            "_id": "",
            "title": "Персистентность: англ. Persistence [pəˈsɪstəns], фр. Persistance [pɛʁ.si.stɑ̃s], нем. Persistenz [ˌpɛʁ.zɪˈstɛnt͡s], польск. Persystencja [pɛr.sɨsˈtɛn.t͡sja]",
            "icon": "🔄",
            "quote": "«Персистентность — это умение продолжать двигаться вперёд, несмотря на любые препятствия.»",
            "description": "Слово «персистентность» заимствовано из латинского *persistentia*, что означает «стойкость», «упорство» или «непрерывность». Корень *persistere* состоит из префикса *per-* («через», «до конца») и *sistere* («стоять», «оставаться»). Первоначально слово использовалось в значении «неизменное упорство», но с развитием науки и технологий приобрело более широкий спектр значений. Сегодня термин встречается в таких областях, как медицина (например, устойчивость вирусов), информатика (например, долговременное хранение данных), психология (упорство в достижении цели) и других дисциплинах. В русском языке термин появился в XX веке, особенно с ростом научной и технической литературы.",
            "morpheme": {
                "prefix": ["пер"],
                "root": ["систент"],
                "suffix": ["ность"]
            },
            "annotation": "Персистентность символизирует устойчивость и продолжительность, как в природе, так и в технологиях. Это качество, которое позволяет преодолевать изменения и сохранять целостность.",
            "joke": "Персистентность — это когда даже Wi-Fi в подвале упорно держит одну палочку связи.",
            "derivatives": [
                "Персистенция — устаревшая форма, обозначающая стойкость или долговременность.",
                ],
            "collections": [],
       }
    ],
    loading: {
            addWord: { status: LoadingStatus.fulfilled, message: null },
            deleteWord: { status: LoadingStatus.fulfilled, message: null },
            fetchWords: { status: LoadingStatus.fulfilled, message: null },
    },
    error: null,
};


// 1. Redux Toolkit uses the Immer library, which wraps state in a “proxy object”.

const linguisticsSlice = createSlice({
    name: 'linguistics',
    initialState,
    reducers: {
        /*
        loadingWordForCarousel(
            state: LinguisticsState,
            action: PayloadAction<WordCarousel[]>
        ){
            state.wordsCarousel.push(...action.payload)
        },
       */
    },
    extraReducers: (builder) => {
        // Загрузка слов
        builder
            .addCase(loadWordsForCarousel.pending, (state) => {
                state.loading.fetchWords = {
                    status: LoadingStatus.padding,
                    message: "Идет загрузка слов...",
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
                    message: "Загрузка слов не удалась :(",
                };
                state.error = action.payload || "Не удалось загрузить слова";
            });

        // Загрузка слов коллекции
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
                    message: "Загрузка слов не удалась :(",
                };
                state.error = action.payload || "Не удалось загрузить слова";
            });

        // Добавление слова
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

        // Удаление слова
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

//export const { createWordForCarousel } = linguisticsSlice.actions;
export default linguisticsSlice.reducer;




//-------------------------------------------------Thunks-----------------------------------------

export const loadWordsForCarousel = createApiThunk<WordCarousel[], void>(
    'linguistics/loadWords',
    async () => {
        return fetchWordsCarousel(); // Возвращаем список слов
    }
);

export const loadCollectionWordsForCarousel = createApiThunk<WordCarousel[], Array<string>>(
    'linguistics/loadCollectionWords',
    async (collection) => {
        return fetchCollectionWordsCarousel(collection); // Возвращаем список слов
    }
);

// Добавление нового слова в карусель
export const addWordToCarousel = createApiThunk<WordCarousel, AddWordCarouselUpdate>(
    'linguistics/addWord',
    async (newWord) => {
        return createWord(newWord); // Возвращаем добавленное слово
    }
);

// Обновление слова в карусели
export const updateWordToCarousel = createApiThunk<WordCarousel, WordCarouselUpdate>(
    'linguistics/updateWord',
    async (newWord) => {
        return updateWord(newWord); // Возвращаем обновленное слово
    }
);

// Удаление слова в карусели
export const deleteWordToCarousel = createApiThunk<WordCarousel, string>(
    'linguistics/deleteWord',
    async (id) => {
        return deleteWord(id); // Возвращаем удаленное слово
    }
);

//--------------------------Types---------------------------------

interface ActionLoading {
    status: LoadingStatus;
    message: string | null;
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

interface LinguisticsState {
    wordsCarousel: WordCarousel[],
    loading: Loading;
    error: string | null;
}