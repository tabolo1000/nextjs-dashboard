import api from './config';
import {WordCarousel, WordCarouselUpdate} from '../store/slices/linguisticsSlice'; // Типы данных

// Получение всех слов для карусели
export const fetchWordsCarousel = async (): Promise<WordCarousel[]> => {
    const { data } = await api.get<WordCarousel[]>('/words');
    return data;
};

// Получение слова по ID
export const fetchWordById = async (id: string): Promise<WordCarousel> => {
    const { data } = await api.get<WordCarousel>(`/words-carousel/${id}`);
    return data;
};

// Добавление нового слова
export const createWord = async (word: WordCarousel): Promise<WordCarousel> => {
    const { data } = await api.post<WordCarousel>('/words', word);
    return data;
};

export const updateWord = async (word: WordCarouselUpdate): Promise<WordCarousel> => {
    const { data } = await api.put<WordCarousel>('/words', word);
    return data;
};

