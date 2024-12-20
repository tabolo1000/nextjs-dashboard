import api from './config';
import {WordCarousel, WordCarouselUpdate} from '../store/slices/linguisticsSlice'; // Типы данных

// Получение всех слов для карусели
export const fetchWordsCarousel = async (): Promise<WordCarousel[]> => {
    const { data } = await api.get<WordCarousel[]>('linguistics/words/words_carousel');
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
export const createWord = async (word: WordCarousel): Promise<WordCarousel> => {
    const { data } = await api.post<WordCarousel>('linguistics/words/words_carousel', word);
    return data;
};

export const updateWord = async (word: WordCarouselUpdate): Promise<WordCarousel> => {
    const {_id, ...rest} = word
    const { data } = await api.put<WordCarousel>(`linguistics/words/words_carousel/${_id}`, rest);
    return data;
};



