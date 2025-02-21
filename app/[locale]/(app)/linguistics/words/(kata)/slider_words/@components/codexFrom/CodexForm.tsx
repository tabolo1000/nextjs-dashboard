"use client";

import React, {memo} from "react";
import {Form, Formik} from "formik";
import {Box, Button, CircularProgress, Typography,} from "@mui/material";
import {
    validationSchema
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/codexFrom/validationSchema";
import {
    JsonUploader
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/JsonUploader/JsonUploader";
import {Base_button} from "@/app/ui/math/components/Base_button";
import {CodexFormValues} from "@/app/[locale]/(app)/linguistics/words/(kata)/words.type";
import MorphemeFields from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/MorphemeFields";
import Derivatives
    from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/derivatives/Derivatives";
import {
    DynamicArrayField
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/dynamicArrayFields/DynamicArrayField";
import useCodexFrom
    from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/codexFrom/useCodexFrom";
import {
    useSliderHandlers
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";


// Initial value for the form
const initialValues: CodexFormValues = {
    title: "",
    morpheme: {
        prefix: [""],
        root: [""],
        suffix: [""],
        end: [""],
    },
    description: "",
    icon: "",
    quote: "",
    annotation: "",
    joke: "",
    derivatives: [""],
    collections: [""],
};
// Sample of filling out the form
const placeholder = `{
  "title": "Пример",
  "morpheme": {
    "prefix": ["пре"],
    "root": ["корень"],
    "suffix": ["суф"],
    "end": ["окончание"]
  },
  "icon": "🌟",
  "description": "Описание",
  "quote": "Цитата",
  "annotation": "Аннотация",
  "derivatives": ["производное"],
  "joke": "Шутка",
   "collections": ["conversation_topic_dream"]
}`; // morpheme.prefix[0]  === "пре" // name of Formik


export const CodexForm = memo(function CodexForm() {
    const {loading, handleSubmit} = useCodexFrom()
    const {setCurrentWindow} = useSliderHandlers()



    return (
        <Box
            className="border-2 border-gray-200 dark:border-gray-700 dark:text-gray-300 text-gray-600"
            mx="auto"
            p={4}
        >
            <Typography variant="h4" gutterBottom textAlign="center">
                Добавить новую запись:
            </Typography>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({
                      values,
                      setValues,
                  }) => (
                    <Form>
                        {/* Field for loading JSON */}
                        <JsonUploader
                            placeholder={placeholder}
                            onJsonParsed={(parsedData) => {
                                void setValues({
                                    ...values,
                                    ...parsedData,
                                    morpheme: {
                                        ...values.morpheme,
                                        ...parsedData.morpheme,
                                    },
                                });
                            }}
                        />

                        {/* Caption */}
                        <Box mb={3}>
                            <DynamicArrayField
                                key={"title"}
                                name={"title"}
                                label={"Заголовок"}
                                placeholder={"Введите ваш заголовок."}
                                minItems={4}
                                allowMultiline={true}
                            />
                        </Box>

                        {/* Morpheme fields */}
                        <MorphemeFields/>

                        {/* Icon fields */}
                        <Box mb={3}>
                            <DynamicArrayField
                                key={"icon"}
                                name={"icon"}
                                label={"Иконка"}
                                placeholder={"Вставьте иконку."}
                                allowMultiline={true}
                            />
                        </Box>

                        {/* Description Field. Using a custom component */}
                        <Box mb={3}>
                            <DynamicArrayField
                                key={"description"}
                                name={"description"}
                                label={"Описание"}
                                placeholder={"Введите описание."}
                                minItems={4}
                                allowMultiline={true}
                            />
                        </Box>

                        {/* Quote fields */}
                        <Box mb={3}>
                            <DynamicArrayField
                                key={"quote"}
                                name={"quote"}
                                label={"Цитата"}
                                placeholder={"Введите цитату."}
                                minItems={2}
                                allowMultiline={true}
                            />
                        </Box>

                        {/* Annotation fields */}

                        <Box mb={3}>
                            <DynamicArrayField
                                key={"annotation"}
                                name={"annotation"}
                                label={"Аннотация"}
                                placeholder={"Введите аннотацию."}
                                minItems={2}
                                allowMultiline={true}
                            />
                        </Box>

                        {/* Displays an array of derivative words */}
                        <Derivatives/>

                        {/* The Collections field */}
                        <Box mb={3}>
                            <DynamicArrayField
                                key={"collections"}
                                name={"collections"}
                                label={"Коллекция"}
                                placeholder={"Введите коллекции."}
                                minItems={4}
                                allowMultiline={true}
                            />
                        </Box>

                        {/* The joke field */}
                        <Box mb={3}>
                            <DynamicArrayField
                                key={"joke"}
                                name={"joke"}
                                label={"Шутка"}
                                placeholder={"Введите шутку."}
                                minItems={2}
                                allowMultiline={true}
                            />
                        </Box>


                        {/* Send button */}
                        <Base_button
                            disabled={loading}
                            classStyle="button_to bg-lesson-blue hover:bg-blue-500 dark:bg-blue-650 dark:hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-dark-card w-full"
                            type="submit"
                        >
                            {loading ? (
                                <>
                                    <CircularProgress color="success" size={20} sx={{marginRight: 1}}/>
                                    Подождите! Идет выгрузка записи в Базу данных...
                                </>
                            ) : (
                                "Добавить запись"
                            )}
                        </Base_button>

                        {/* Back button */}
                        <Button
                            onClick={() => setCurrentWindow("reset")}
                            variant="contained"
                            color="success"
                            fullWidth
                            size="large"
                        >
                            Назад
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
});


