"use client";

import React, {memo, useCallback} from "react";
import {Field, FieldProps, Form, Formik} from "formik";
import {Box, Button, CircularProgress, Input, Typography,} from "@mui/material";
import {
    validationSchema
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/codexFrom/validationSchema";
import {
    JsonUploader
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/JsonUploader/JsonUploader";
import {Base_button} from "@/app/ui/math/components/Base_button";
import {LoadingStatus} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";
import {useMutation} from "@apollo/client";
import {
    CreateWordDocument,
    CreateWordMutation,
    CreateWordMutationVariables,
    GetWordsDocument,
    GetWordsQuery
} from "@/app/@graphql/@generated/graphql";
import {CodexFormValues} from "@/app/[locale]/(app)/linguistics/words/(kata)/words.type";
import MorphemeFields from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/MorphemeFields";
import Derivatives from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/derivatives/Derivatives";


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
  "description": "Описание",
  "morpheme": {
    "prefix": ["пре"],
    "root": ["корень"],
    "suffix": ["суф"],
    "end": ["окончание"]
  },
  "icon": "🌟",
  "quote": "Цитата",
  "annotation": "Аннотация",
  "joke": "Шутка",
  "derivatives": ["производное1"],
  "collections": ["conversation_topic_dream"]
}`;

type CodexFormProps = {
    editingFrom: boolean;
    isEditingForm(active: boolean): void;
}

export const CodexForm: React.FC<CodexFormProps> = memo(function CodexForm({
                                                                               editingFrom,
                                                                               isEditingForm,
                                                                           }) {
    const [addWordToCarousel, {loading}] = useMutation<CreateWordMutation, CreateWordMutationVariables>(CreateWordDocument)

    // Form submission processing
    const handleSubmit = useCallback(
        async (values: CodexFormValues, {resetForm}: { resetForm: () => void }) => {
            await addWordToCarousel({
                variables: {
                    word: values,
                },
                update(cache, {data: {createWord}}) {
                    const existingWords = cache.readQuery<GetWordsQuery>({
                        query: GetWordsDocument,
                    });

                    if (existingWords && createWord) {
                        cache.writeQuery({
                            query: GetWordsDocument,
                            data: {
                                words: [...existingWords.words, createWord],
                            },
                        });
                    }
                },
            });
            resetForm();
        },
        [addWordToCarousel]
    );


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

                        {/* Morpheme fields */}
                        <MorphemeFields/>

                        {/* Description Field. Using a custom component */}
                        <Box mb={3}>
                            <Field name="description">
                                {( el: FieldProps ) => (
                                    <div>
                                        <Input
                                            {...el.field}
                                            error={el.meta.touched && !!el.meta.error}
                                            fullWidth
                                            placeholder="Введите ваше описание."
                                            multiline
                                            rows={4}
                                            className="paragraph_base"
                                        />
                                        {el.meta.touched && el.meta.error && (
                                            <div className={"text-error indent-4 pt-2"}>{el.meta.error}</div>
                                        )}
                                    </div>
                                    )
                                }
                            </Field>
                        </Box>

                        {/* The Collections field */}
                        <Box mb={3}>
                            <Field name="collections">
                                {(el: FieldProps) => (
                                    <div>
                                        <Input
                                        {...el.field}
                                        fullWidth
                                        placeholder="Введите коллекции."
                                        multiline
                                        rows={4}
                                        className="paragraph_base"
                                        />
                                        {el.meta.touched && el.meta.error && (
                                            <div>
                                                <div className={"text-error indent-4 pt-2"}>{el.meta.error}</div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </Field>
                        </Box>

                        {/* Displays an array of derivative words */}
                        <Derivatives values={values}/>

                        {/* Кнопка отправки */}
                        <Base_button
                            disabled={loading}
                            classStyle="button_to bg-lesson-blue hover:bg-blue-500 dark:bg-blue-650 dark:hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-dark-card w-full"
                            type="submit"
                        >
                            { loading ? (
                                <>
                                    <CircularProgress color="success" size={20} sx={{marginRight: 1}}/>
                                    Подождите! Идет выгрузка записи в Базу данных...
                                </>
                            ) : (
                                "Добавить запись"
                            )}
                        </Base_button>

                        {/* Кнопка назад */}
                        <Button
                            onClick={() => isEditingForm(!editingFrom)}
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


/*
type CodexFormValues2 = Partial<CodexFormValues>;
type RequiredUser = Required<Morpheme>
type UserNameAndAge = Pick<CodexFormValues, "title" | "morpheme">;
type UserWithoutAge = Omit<CodexFormValues, "title">;*/


