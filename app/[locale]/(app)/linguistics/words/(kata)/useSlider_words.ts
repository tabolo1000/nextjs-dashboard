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

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import React, { useCallback, useEffect, useState } from "react";
import {
    deleteWordToCarousel,
    loadWordsForCarousel,
    updateWordToCarousel,
} from "@/app/store/slices/wordsSliderSlice/wordsSliderSliceThunks";
import {Loading, WordCarousel, WordCarouselUpdate} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";



export default function useSlider_words(endPoints: Array<string>): ReturnType {
    const dispatch = useAppDispatch();
    const { wordsCarousel, loading, error } = useAppSelector((state) => state.linguistics);

    const [currentPage, setPage] = useState(1);
    const [isSettingsActive, setIsSettingsActive] = useState(false);
    const [editingFrom, setEditingForm] = useState<boolean>(false);
    const [isSearch, setSearch] = useState<boolean>(false);

    const itemsPerPage = 20;
    const pageCount = Math.ceil(wordsCarousel.length / itemsPerPage);
    const currentItems = wordsCarousel.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        dispatch(loadWordsForCarousel(endPoints));
    }, [dispatch, endPoints]);

    const handleLoadWords = useCallback(() => {
        dispatch(loadWordsForCarousel(endPoints));
    }, []);

    const handleChangePage = useCallback((_: unknown, value: number) => {
        setPage(value);
    }, []);
    const handleWordChange = useCallback((value: WordCarouselUpdate) => {
            dispatch(updateWordToCarousel(value));
        },
        [dispatch]
    );
    const handleWordDelete = useCallback((id: string) => {
            dispatch(deleteWordToCarousel(id));
        },
        [dispatch]
    );
    const toggleSettings = () => setIsSettingsActive((prev) => !prev);

    return {
        pagination: {
            pageCount,
            currentPage,
            handleChangePage,
        },
        data: {
            currentItems,
            loading,
            error,
            editingFrom,
            isSearch
        },
        actions: {
            handleLoadWords,
            handleWordChange,
            handleWordDelete,
            setEditingForm,
            toggleSettings,
            isSettingsActive,
            setSearch
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
    currentItems: WordCarousel[];
    loading: Loading;
    error: string | null;
    editingFrom: boolean;
    isSearch: boolean
}

export interface Actions {
    handleWordChange: (value: WordCarouselUpdate) => void;
    handleWordDelete: (id: string) => void;
    setEditingForm: (active: boolean) => void;
    setSearch: (isSearch: boolean) => void;
    toggleSettings: () => void;
    isSettingsActive: boolean;
    handleLoadWords: () => void;
}

interface ReturnType {
    pagination: Pagination;
    data: Data;
    actions: Actions;
}