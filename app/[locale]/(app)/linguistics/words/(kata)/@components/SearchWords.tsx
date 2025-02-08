import React, { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Field, Form, Formik } from "formik";
import {WordCarousel} from "@/app/store/slices/linguisticsSlice/wordsSliderSlice";

/*interface WordCarousel {
    title: string;
    description?: string;

}*/
/**
 * Does word search by first letters despite case and spaces based on regular expression.
 */
const SearchWords = ({
                         isModalSearchOpen,
                         setIsModalSearchOpen,
                     }: {
    isModalSearchOpen: boolean;
    setIsModalSearchOpen: (isModalSearchOpen: boolean) => void;
}) => {
    const [word, setWord] = useState<WordCarousel[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    /**
     * Automatically sends a request 2 seconds after text change
     */
    useEffect(() => {
        if (searchTerm.trim()) {
            const timeout = setTimeout(() => {
                fetchWords(searchTerm);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [searchTerm]);

    /**
     * Function for receiving data from the server
     */
    const fetchWords = async (query: string) => {
        setLoading(true);
        setError(null);
        setWord(null);

        try {
            const response = await axios.get(
                `http://localhost:3001/linguistics/words/words_carousel/searchWords?word=${query}`
            );
            setWord(response.data);
        } catch (err) {
            console.error("Ошибка при запросе:", err);
            setError("Не удалось загрузить данные. Попробуйте снова.");
        } finally {
            setLoading(false);
        }
    };

    // Управление блокировкой прокрутки заднего фона
    useEffect(() => {
        if (isModalSearchOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalSearchOpen]);

    return (
        <AnimatePresence>
            {isModalSearchOpen && (
                <motion.div
                    className="fixed pt-5 inset-0 bg-black bg-opacity-70 z-50 flex items-start justify-center overflow-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg pt-9 w-full max-w-3xl relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                    >
                        {/* Кнопка закрытия */}
                        <button
                            onClick={() => setIsModalSearchOpen(false)}
                            className="absolute top-4 right-6 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none"
                        >
                            ✖
                        </button>

                        {/* Заголовок */}
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                            Поиск слов
                        </h1>

                        {/* Форма поиска */}
                        <Formik initialValues={{ text: "" }} onSubmit={() => {}}>
                            {({ setFieldValue }) => (
                                <Form className="absolute w-full flex flex-col space-y-4">
                                    <div>
                                        <Field
                                            name="text"
                                            type="text"
                                            placeholder="Введите слово..."
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const value = e.target.value;
                                                setFieldValue("text", value);
                                                setSearchTerm(value); // Устанавливаем текст поиска
                                            }}
                                            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Индикатор загрузки */}
                                    {loading && (
                                        <div className="flex justify-center">
                                            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                                        </div>
                                    )}

                                    {/* Ошибка */}
                                    {error && (
                                        <p className="text-red-500 text-center">{error}</p>
                                    )}

                                    {/* Результаты поиска */}
                                    {word && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            {word.map((el, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow"
                                                >
                                                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                                                        {el.title}
                                                    </h2>
                                                    <p className="text-gray-600 dark:text-gray-300">
                                                        {el.morpheme.root || "Описание отсутствует"}
                                                    </p>
                                                    <p className="text-gray-600 dark:text-gray-300">
                                                        {el.description || "Описание отсутствует"}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};




export default SearchWords;


/*
const [word, setWord] = useState<WordCarousel[] | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [searchTerm, setSearchTerm] = useState<string>("");
*/
