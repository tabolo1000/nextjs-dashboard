import React, {memo, Suspense, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Field, Form, Formik} from "formik";
import ShowWords from "@/app/[locale]/(app)/linguistics/words/(kata)/@components/showWords/ShowWords";
import {LoaderScreen} from "@/app/[locale]/(app)/@components/LoaderScreen";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorScreen} from "@/app/[locale]/(app)/@components/ErrorScreen";
import {
    useSearch,
    useSliderHandlers
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";

/**
 * Does word search by first letters
 * despite case and spaces based
 * on regular expression.
 * default limit = 4
 */
const SearchWords = memo(function SearchWords() {
    const isSearchActive = useSearch();
    const {setCurrentWindow} = useSliderHandlers()

    const [searchTerm, setSearchTerm] = useState<string>("")
    /**
     * !!Crutch!!. Background window fix.
     */
    useEffect(() => {
        if (isSearchActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isSearchActive]);

    return (
        <AnimatePresence>
            {isSearchActive && (
                <motion.div
                    className="fixed pt-5 inset-0 bg-black bg-opacity-70 z-50 flex items-start justify-center overflow-auto"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <motion.div
                        className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg pt-9 w-full max-w-3xl relative"
                        initial={{scale: 0.9}}
                        animate={{scale: 1}}
                        exit={{scale: 0.9}}
                    >
                        {/* The button closes the modal  */}
                        <button
                            onClick={() => setCurrentWindow("reset")}
                            className="absolute top-4 right-6 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none"
                        >
                            ✖
                        </button>

                        {/* Header defining the modal window  */}
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                            Поиск слов
                        </h1>

                        {/* Collects the substring */}
                        <Formik
                            initialValues={{text: ""}}
                            onSubmit={() => {
                            }}
                        >
                            {({setFieldValue}) => (
                                <Form className="w-full flex flex-col space-y-4">
                                    <div>
                                        <Field
                                            name="text"
                                            type="text"
                                            placeholder="Введите слово..."
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const value = e.target.value;
                                                setFieldValue!("text", value);
                                                setSearchTerm(value);
                                            }}
                                            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <ErrorBoundary
                                        fallback={<ErrorScreen message={{ru: "Ошибка!", en: "Error"}} onRetry={() => {
                                        }}/>}
                                    >
                                        <Suspense fallback={<LoaderScreen
                                            message={{ru: "Идет загрузка!", en: "Loading..."}}/>}>
                                            <ShowWords searchTerm={searchTerm}/>
                                        </Suspense>
                                    </ErrorBoundary>
                                </Form>
                            )}
                        </Formik>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
})

export default SearchWords

