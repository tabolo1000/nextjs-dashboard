import api from './config';
import {AddWordCarouselUpdate, WordCarousel, WordCarouselUpdate} from '../store/slices/linguisticsSlice'; // Типы данных

// Получение всех слов для карусели
export const fetchWordsCarousel = async (collection: Array<string>): Promise<WordCarousel[]> => {
    //const queryString = qs.stringify({ collection }, { arrayFormat: 'repeat' });
    if(collection.length !== 0){
        const { data } = await api.get<WordCarousel[]>(`linguistics/words/words_carousel/${collection[0]}`);
        return data;
    }
    const { data } = await api.get<WordCarousel[]>(`linguistics/words/words_carousel`);
        return data;

};

export const fetchCollectionWordsCarousel = async (collection: Array<string>): Promise<WordCarousel[]> => {
    const { data } = await api.get<WordCarousel[]>(`linguistics/words/words_carousel/collection/${collection[0]}`);
    debugger
    return data;
};

export const deleteWord = async (_id: string): Promise<WordCarousel> => {
    const { data } = await api.delete<WordCarousel>(`linguistics/words/words_carousel/${_id}`);
    return data;
};

// Получение слова по ID
export const fetchWordById = async (id: string): Promise<WordCarousel> => {
    const { data } = await api.get<WordCarousel>(`linguistics/words/words_carousel/${id}`);
    return data;
};

// Добавление нового слова
export const createWord = async (word: AddWordCarouselUpdate): Promise<WordCarousel> => {
    const { data } = await api.post<WordCarousel>('linguistics/words/words_carousel', word);
    return data;
};

export const updateWord = async (word: WordCarouselUpdate): Promise<WordCarousel> => {
    const {_id, ...rest} = word
    const { data } = await api.put<WordCarousel>(`linguistics/words/words_carousel/${_id}`, rest);
    return data;
};



