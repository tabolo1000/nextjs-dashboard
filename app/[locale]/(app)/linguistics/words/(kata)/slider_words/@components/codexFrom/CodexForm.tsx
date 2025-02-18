"use client";

import React, {memo, useCallback, useMemo} from "react";
import {Field, FieldArray, FieldProps, Form, Formik} from "formik";
import {Box, Button, CircularProgress, IconButton, Input, Typography,} from "@mui/material";
import {AddBoxOutlined, Delete} from "@mui/icons-material";
import {
    validationSchema
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/codexFrom/validationSchema";
import {
    DynamicArrayField
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/DynamicArrayField";
import {
    JsonUploader
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/JsonUploader/JsonUploader";
import {useAppSelector} from "@/app/store/hooks";
import {Base_button} from "@/app/ui/math/components/Base_button";
import {LoadingStatus} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";
import {gql, useMutation} from "@apollo/client";
import {
    CreateWordDocument,
    CreateWordMutation,
    CreateWordMutationVariables,
    GetWordsDocument, GetWordsQuery
} from "@/app/@graphql/@generated/graphql";

// Типы
interface CodexFormProps {
    editingFrom: boolean;

    isEditingForm(active: boolean): void;
}

interface Morpheme {
    prefix?: string[];
    root: string[];
    suffix?: string[];
    end?: string[];
}

interface CodexFormValues {
    title: string;
    morpheme: Morpheme;
    description: string;
    icon: string;
    quote: string;
    annotation: string;
    joke: string;
    derivatives: string[];
    collections: string[];
}

// Начальные значения формы
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

// Пример JSON
const placeholder = `{
  "title": "Пример",
  "description": "Описание",
  "morpheme": {
    "prefix": ["пре"],
    "root": ["корень1"],
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

export const CodexForm: React.FC<CodexFormProps> = memo(function CodexForm({
                                                                               editingFrom,
                                                                               isEditingForm,
                                                                           }) {
    const {loading} = useAppSelector((state) => state.linguistics);
    const [addWordToCarousel] = useMutation<CreateWordMutation, CreateWordMutationVariables>(CreateWordDocument)


    // Обработка отправки формы
    const handleSubmit = useCallback(
        async (values: CodexFormValues, { resetForm }: { resetForm: () => void }) => {
            await addWordToCarousel({
                variables: {
                    word: values,
                },
                update(cache, { data: { createWord } }) {
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

    // Поля морфемы
    const morphemeFields = useMemo(
        () => [
            {name: "morpheme.prefix", label: "Префиксы", placeholder: "Введите префикс"},
            {name: "morpheme.root", label: "Корни", placeholder: "Введите корень"},
            {name: "morpheme.suffix", label: "Суффиксы", placeholder: "Введите суффикс"},
            {name: "morpheme.end", label: "Окончания", placeholder: "Введите окончание"},
        ],
        []
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
                {({values, setValues}) => (
                    <Form>
                        {/* Поле для загрузки JSON */}
                        <JsonUploader
                            placeholder={placeholder}
                            onJsonParsed={(parsedData) => {
                                const updatedValues = {
                                    ...values,
                                    ...parsedData,
                                    morpheme: {
                                        ...values.morpheme,
                                        ...parsedData.morpheme,
                                    },
                                };
                                void setValues(updatedValues);
                            }}
                        />

                        {/* Поля морфемы */}
                        <Box className="border-2 border-gray-200 dark:border-gray-700 p-2 my-2">
                            {morphemeFields.map((field) => (
                                <DynamicArrayField
                                    key={field.name}
                                    name={field.name}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                    minItems={1}
                                    allowMultiline={true}
                                />
                            ))}
                        </Box>

                        {/* Поле описания */}
                        <Box mb={3}>
                            <Field name="description">
                                {({field}: { field: FieldProps }) => (
                                    <Input
                                        {...field}
                                        fullWidth
                                        placeholder="Введите ваше описание."
                                        multiline
                                        rows={4}
                                        className="paragraph_base"
                                    />
                                )}
                            </Field>
                        </Box>

                        {/* Поле Collections */}
                        <Box mb={3}>
                            <Field name="collections">
                                {({field}: { field: FieldProps }) => (
                                    <Input
                                        {...field}
                                        fullWidth
                                        placeholder="Введите коллекции."
                                        multiline
                                        rows={4}
                                        className="paragraph_base"
                                    />
                                )}
                            </Field>
                        </Box>

                        {/* Производные */}
                        <Box mb={3}>
                            <Typography variant="subtitle1" sx={{paddingLeft: "20px", paddingY: "5px"}}>
                                Производные:
                            </Typography>
                            <FieldArray name="derivatives">
                                {({remove, push}) => (
                                    <>
                                        {values.derivatives.map((_, index) => (
                                            <Box display="flex" alignItems="center" key={index} mb={2}>
                                                <Field name={`derivatives[${index}]`}>
                                                    {({field}: { field: FieldProps }) => (
                                                        <Input
                                                            {...field}
                                                            fullWidth
                                                            placeholder="Введите производное."
                                                            className="paragraph_base"
                                                            multiline
                                                        />
                                                    )}
                                                </Field>
                                                <IconButton
                                                    onClick={() => remove(index)}
                                                    disabled={values.derivatives.length === 1}
                                                    color="error"
                                                >
                                                    <Delete/>
                                                </IconButton>
                                            </Box>
                                        ))}
                                        <Base_button
                                            classStyle={"add_button"}
                                            onClick={() => push("")}
                                        >
                                            <AddBoxOutlined className="text-3xl"/>
                                            Добавить производное
                                        </Base_button>
                                    </>
                                )}
                            </FieldArray>
                        </Box>

                        {/* Кнопка отправки */}
                        <Base_button
                            disabled={loading.addWord.status === LoadingStatus.padding}
                            classStyle="button_to bg-lesson-blue hover:bg-blue-500 dark:bg-blue-650 dark:hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-dark-card w-full"
                            type="submit"
                        >
                            {loading.addWord.status === LoadingStatus.padding ? (
                                <>
                                    <CircularProgress color="success" size={20} sx={{marginRight: 1}}/>
                                    {loading.addWord.message}
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