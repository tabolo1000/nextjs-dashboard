import { createSlice } from '@reduxjs/toolkit';
import {createApiThunk} from "@/app/store/utils/apiThunk";
import {createWord, fetchWordsCarousel, updateWord} from "@/app/api/linguistics";

const initialState: LinguisticsState = {
    wordsCarousel: [
        {
            id: "",
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
                ]
       }
    ],
    loading: {
        status: false,
        message: null
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
        // Загрузка слов (loadWordsForCarousel)
        builder
            .addCase(loadWordsForCarousel.pending, (state) => {
                state.loading = {
                    status: true,
                    message: "Идет загрузка слов..."
                };
                state.error = null;
            })
            .addCase(loadWordsForCarousel.fulfilled, (state, action) => {
                state.loading = {
                    status: false,
                    message: "Слова успешно загружены"
                };
                state.wordsCarousel = action.payload;
            })
            .addCase(loadWordsForCarousel.rejected, (state, action) => {
                state.loading = {
                    status: false,
                    message: "Загрузка слов не удалась"
                };
                state.error = action.payload || 'Не удалось загрузить слова';
            });

        // Добавление слова (addWordToCarousel)
        builder
            .addCase(addWordToCarousel.pending, (state) => {
                state.loading = {
                    status: true,
                    message: "Идет добавление в базу данных..."
                };
                state.error = null;
            })
            .addCase(addWordToCarousel.fulfilled, (state, action) => {
                state.loading = {
                    status: false,
                    message: "Слова успешно добавлено!"
                };
                state.wordsCarousel.push(action.payload);
            })
            .addCase(addWordToCarousel.rejected, (state, action) => {
                state.loading = {
                    status: false,
                    message: "Загрузка слова не удалась!"
                };
                state.error = action.payload || 'Не удалось добавить слово';
            });
        // Обновление слова (updateWordToCarousel)
        builder
            .addCase(updateWordToCarousel.pending, (state) => {
                state.loading = {
                    status: true,
                    message: "Идет обновление в базе данных..."
                };
                state.error = null;
            })
            .addCase(updateWordToCarousel.fulfilled, (state, action) => {
                state.loading = {
                    status: false,
                    message: "Слово успешно обновлено!"
                };

                // Находим индекс элемента в массиве
                const index = state.wordsCarousel.findIndex((el) => el.id === action.payload.id);

                if (index !== -1) {
                    // Заменяем элемент по индексу на новый
                    state.wordsCarousel[index] = action.payload;
                }
            })
            .addCase(updateWordToCarousel.rejected, (state, action) => {
                state.loading = {
                    status: false,
                    message: "Обновление слова не удалась!"
                };
                state.error = action.payload || 'Не удалось обновить слово';
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

// Добавление нового слова в карусель
export const addWordToCarousel = createApiThunk<WordCarousel, WordCarousel>(
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

//--------------------------Types---------------------------------

export interface Loading {
    status: boolean,
    message: string | null,
}

export interface WordCarousel {
    id: string
    morpheme: WordCarouselMorpheme,
    title: string,
    description: string,
    icon: string,
    quote: string,
    annotation?: string,
    joke?: string,
    derivatives?: Array<string>
}

export interface WordCarouselUpdate {
    id: string;
    morpheme?: WordCarouselMorpheme,
    title?: string,
    description?: string,
    icon?: string,
    quote?: string,
    annotation?: string,
    joke?: string,
    derivatives?: Array<string>
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