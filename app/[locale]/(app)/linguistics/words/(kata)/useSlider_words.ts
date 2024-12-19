"use client"
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import React, {useCallback, useEffect, useState} from "react";
import {
    Loading,
    loadWordsForCarousel,
    updateWordToCarousel,
    WordCarousel,
    WordCarouselUpdate
} from "@/app/store/slices/linguisticsSlice";


export default function useSlider_words(): ReturnType{
    const dispatch = useAppDispatch();
    const { wordsCarousel, loading, error } = useAppSelector((state) => state.linguistics);
    const [currentPage, setPage] = useState(1); // Текущая страница
    const itemsPerPage = 10; // Количество записей на странице
    const pageCount = Math.ceil(wordsCarousel.length / itemsPerPage)


    useEffect(() => {
        dispatch(loadWordsForCarousel()); // Загружаем слова при монтировании
    }, []);

    // Определяем текущие элементы для отображения
    const currentItems = wordsCarousel.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Обработчик изменения страницы
    const handleChange = useCallback((
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    }, [setPage]);

   /* const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(loadWordsForCarousel({ page: value })); // Передаём номер страницы
    }, [dispatch]); !!!Настройка пагинации на сервере!!! level 2*/

    // Обработчик изменения страницы
    const handleWordChange = useCallback((
        value: WordCarouselUpdate
    ) => {
        dispatch(updateWordToCarousel({
            ...value
        }))
    }, [dispatch]);

    return {
        pagination: {
            pageCount,
            currentPage,
            handleChange,
        },
        data: {
            currentItems,
            loading,
            error,
        },
        actions: {
            handleWordChange,
        },
    }
}



//-------------------------------------------------- Types ---------------------------------------

interface Pagination {
    pageCount: number,
    currentPage: number,
    handleChange: (event: React.ChangeEvent<unknown>, value: number) => void,
}

interface Data  {
    currentItems: WordCarousel[],
    loading: Loading,
    error: string | null,
}

interface Actions {
    handleWordChange: (value: WordCarouselUpdate) => void,
}

interface ReturnType {
    pagination: Pagination
    data: Data,
    actions: Actions
}