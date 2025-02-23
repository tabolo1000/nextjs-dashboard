/**
 * useSlider_words Hook
 *
 * This hook manages the "word carousel" functionality in the application.
 * It includes pagination handling, data loading, word updating/deleting, and settings management.
 *
 * ------------------------------------------
 * **Pagination (pagination):**
 * - `pageCount` (number): Total number of pages.
 * - `currentPage` (number): Current page number.
 * - `handleChangePage` (function): Function to handle page change.
 *
 * ------------------------------------------
 * **Data (data):**
 * - `currentItems` (WordCarousel[]): Array of current items on the page.
 * - `loading` (Loading): Loading state (e.g., 'idle', 'pending', 'succeeded', 'failed').
 * - `error` (string | null): Error message if data loading fails.
 * - `editingFrom` (boolean): Indicates whether the edit form is active.
 *
 * ------------------------------------------
 * **Actions (actions):**
 * - `handleWordChange` (function): Function to update a word (`WordCarouselUpdate`).
 * - `handleWordDelete` (function): Function to delete a word by its `id`.
 * - `setEditingForm` (function): Toggles editing form state (`boolean`).
 * - `toggleSettings` (function): Toggles the settings panel visibility.
 * - `isSettingsActive` (boolean): Indicates if the settings panel is active.
 *
 * ------------------------------------------
 * **Return Value:**
 * - `pagination`: Object containing pagination-related data and functions.
 * - `data`: Object containing word carousel data and states.
 * - `actions`: Object containing event handlers and state setters.
 *
 */

"use client";

import React, {useCallback, useState} from "react";
import {ApolloError, FetchResult, useMutation, useSuspenseQuery} from "@apollo/client";
import {
    DeleteWordDocument,
    DeleteWordMutation,
    DeleteWordMutationVariables,
    GetWordsDocument,
    GetWordsQuery,
    GetWordsQueryVariables,
    UpdateWordDocument,
    UpdateWordInput,
    UpdateWordMutation,
    UpdateWordMutationVariables,
    WordFragment
} from "@/app/@graphql/@generated/graphql";
import {useTopics} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";


export default function useSlider_words(): ReturnSliderType {
    const topics = useTopics();


    const [changeWord, {}] = useMutation<UpdateWordMutation, UpdateWordMutationVariables>(UpdateWordDocument, {
        update(cache, {data}: FetchResult<UpdateWordMutation>) {
            const existingWords = cache.readQuery<GetWordsQuery>({
                query: GetWordsDocument,
            });
            if (existingWords && data?.updateWord) {
                cache.writeQuery<GetWordsQuery>({
                    query: GetWordsDocument,
                    data: {
                        words: [...existingWords.words, data?.updateWord],
                    },
                })
            }
        },
    });

    const [deleteWord] = useMutation<DeleteWordMutation, DeleteWordMutationVariables>(DeleteWordDocument, {
        update(cache, {data}: FetchResult<DeleteWordMutation>) {
            const existingWords = cache.readQuery<GetWordsQuery>({
                query: GetWordsDocument,
            });
            if (existingWords && data?.deleteWord) {
                cache.writeQuery<GetWordsQuery>({
                    query: GetWordsDocument,
                    data: {
                        words: existingWords.words.filter((el) => el._id !== data.deleteWord?._id),
                    },
                })
            }
        }
    })

    // Get the data and push it to the pages.
    const {data, error} = useSuspenseQuery<GetWordsQuery, GetWordsQueryVariables>(GetWordsDocument, {
        variables: {
            collectionName: topics[0],
        },
    });
    const wordsCarousel = data?.words || []
    // Getting pages
    const itemsPerPage = 20;
    const pageCount = Math.ceil(wordsCarousel.length / itemsPerPage);
    const [currentPage, setPage] = useState(1);
    const currentItems = wordsCarousel?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    /**
     * Conventional deletion by id
     * id-String-ObjectType(String!)
     */
    const handleWordDelete = useCallback(async (id: string) => {
            await deleteWord({
                variables: {
                    id
                }
            });
        },
        [deleteWord]
    );
    /**
     * Changing word fields
     * words {
     *     _id - Changing word fields
     *     title - Any field. For example, tittle.
     * }
     */
    const handleWordChange = useCallback(async (word: UpdateWordInput) => {
            debugger
            await changeWord({
                variables: {
                    word
                }
            })
        },
        [changeWord]
    );

    // !DEBUGGER! Page Definition.
    const handleChangePage = useCallback((_: unknown, value: number) => {
        setPage(value);
    }, []);

    return {
        pagination: {
            pageCount,
            currentPage,
            handleChangePage,
        },
        data: {
            currentItems,
            error,
        },
        actions: {
            handleWordChange,
            handleWordDelete,
        },
    };
}

//-------------------------------------------------- Types ---------------------------------------

export type TPageCountWordCarousel = number;
export type TCurrentPageWordCarousel = number;
export type THandlePaginationWordCarousel = (event: React.ChangeEvent<unknown>, value: number) => void;

interface Pagination {
    pageCount: TPageCountWordCarousel;
    currentPage: TCurrentPageWordCarousel;
    handleChangePage: THandlePaginationWordCarousel;
}

interface Data {
    currentItems: WordFragment[];
    error: ApolloError | undefined;
}

export interface Actions {
    handleWordChange: (value: UpdateWordInput) => void;
    handleWordDelete: (id: string) => void;
}

interface ReturnSliderType {
    pagination: Pagination;
    data: Data;
    actions: Actions;
}