"use client";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import React, { useCallback, useEffect, useState } from "react";
import {
    deleteWordToCarousel,
    loadWordsForCarousel,
    updateWordToCarousel,
    WordCarousel,
    WordCarouselUpdate,
    Loading,
} from "@/app/store/slices/linguisticsSlice";
import {SliderSettingsType} from "@/app/ui/math/components/slider/SliderSettings";

export default function useSlider_words(endPoints: Array<string>): ReturnType {
    const dispatch = useAppDispatch();
    const { wordsCarousel, loading, error } = useAppSelector((state) => state.linguistics);

    const [currentPage, setPage] = useState(1);
    const [isSettingsActive, setIsSettingsActive] = useState(false);
    const [editingFrom, setEditingForm] = useState<boolean>(false);

    const itemsPerPage = 20; // Количество записей на странице
    const pageCount = Math.ceil(wordsCarousel.length / itemsPerPage);

    useEffect(() => {
        dispatch(loadWordsForCarousel(endPoints));
    }, [dispatch, endPoints]);

    const currentItems = wordsCarousel.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleChangePage = useCallback((_: unknown, value: number) => {
        setPage(value);
    }, []);

    const handleWordChange = useCallback(
        (value: WordCarouselUpdate) => {
            dispatch(updateWordToCarousel(value));
        },
        [dispatch]
    );

    const handleWordDelete = useCallback(
        (id: string) => {
            dispatch(deleteWordToCarousel(id));
        },
        [dispatch]
    );

    const [settings, setSettings] = useState<SliderSettingsType>({
        loop: true,
        delay: 10000,
        slidesPerView: 1,
        autoplay: true,
    });

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
            settings,

        },
        actions: {
            handleWordChange,
            handleWordDelete,
            setEditingForm,
            toggleSettings,
            isSettingsActive,
            setSettings,
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
    settings: SliderSettingsType

}

interface Actions {
    handleWordChange: (value: WordCarouselUpdate) => void;
    handleWordDelete: (id: string) => void;
    setEditingForm: (active: boolean) => void;
    toggleSettings: () => void;
    isSettingsActive: boolean;
    setSettings: (settings: SliderSettingsType) => void;
}

interface ReturnType {
    pagination: Pagination;
    data: Data;
    actions: Actions;
}