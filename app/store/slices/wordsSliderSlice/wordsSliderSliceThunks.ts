import {createApiThunk} from "@/app/lib/utils";

import {
    createWord,
    deleteWord,
    fetchCollectionWordsCarousel,
    fetchWordsCarousel,
    updateWord
} from "@/app/api/linguistics";
import {
    AddWordCarouselUpdate,
    WordCarousel,
    WordCarouselUpdate
} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";

/**
 * A download of all the words.
 */
export const loadWordsForCarousel = createApiThunk<WordCarousel[], Array<string>>(
    'linguistics/loadWords',
    async (collection) => {
        return fetchWordsCarousel(collection);
    }
);
/**
 * Downloading a collection of words.
 */
export const loadCollectionWordsForCarousel = createApiThunk<WordCarousel[], Array<string>>(
    'linguistics/loadCollectionWords',
    async (collection) => {
        return fetchCollectionWordsCarousel(collection);
    }
);
/**
 * Adding a new word to the carousel
 */
export const addWordToCarousel = createApiThunk<WordCarousel, AddWordCarouselUpdate>(
    'linguistics/addWord',
    async (newWord) => {
        return createWord(newWord);
    }
);
/**
 * Updating the word in the carousel
 */
export const updateWordToCarousel = createApiThunk<WordCarousel, WordCarouselUpdate>(
    'linguistics/updateWord',
    async (newWord) => {
        return updateWord(newWord);
    }
);
/**
 * Deleting a word in the carousel
 */
export const deleteWordToCarousel = createApiThunk<WordCarousel, string>(
    'linguistics/deleteWord',
    async (id) => {
        return deleteWord(id);
    }
);