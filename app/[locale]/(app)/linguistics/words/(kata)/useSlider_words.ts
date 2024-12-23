"use client"
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import React, {useCallback, useEffect, useState} from "react";
import {
    deleteWordToCarousel, loadCollectionWordsForCarousel,
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
    const [editingFrom, isEditingForm] = useState<boolean>(false);


    /*useEffect(() => {
        dispatch(loadWordsForCarousel()); // Загружаем слова при монтировании
    }, []);*/

    useEffect(() => {
        dispatch(loadCollectionWordsForCarousel(["conversation_topic_dream"])); // Загружаем слова при монтировании
    }, []);

   /* useEffect(() => {
        dispatch({type: 'linguistics/loadWords'}); // Загружаем слова при монтировании
    }, []);*/

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
        /*dispatch({type: 'linguistics/updateWord', payload: value});*/
    }, [dispatch]);

    const handleWordDelete = useCallback((
        id: string
    ) => {
        debugger
        dispatch(deleteWordToCarousel(id))
        //dispatch({type: 'linguistics/deleteWord', payload: id});
    }, [dispatch]);

    return {
        pagination: {
            pageCount,
            currentPage,
            handleChange,
        },
        data: {
            editingFrom,
            currentItems,
            loading,
            error,
        },
        actions: {
            handleWordChange,
            handleWordDelete,
            isEditingForm
        },
    }
}



//-------------------------------------------------- Types ---------------------------------------

export type TPageCountWordCarousel = number;
export type TCurrentPageWordCarousel = number;
export type THandlePaginationWordCarousel = (event: React.ChangeEvent<unknown>, value: number) => void;


interface Pagination {
    pageCount: TPageCountWordCarousel,
    currentPage: TCurrentPageWordCarousel,
    handleChange: THandlePaginationWordCarousel,
}

interface Data  {
    currentItems: WordCarousel[],
    loading: Loading,
    error: string | null,
    editingFrom: boolean
}

interface Actions {
    handleWordChange: (value: WordCarouselUpdate) => void,
    handleWordDelete: (id: string) => void,
    isEditingForm (active:  boolean): void
}

interface ReturnType {
    pagination: Pagination
    data: Data,
    actions: Actions
}