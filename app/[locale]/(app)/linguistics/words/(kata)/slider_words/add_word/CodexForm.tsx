"use client";

import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import {
  Input ,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import axios from "axios";
import {validationSchema} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/add_word/validationSchema";
import {DynamicArrayField} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/add_word/DynamicArrayField";
import {JsonUploader} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/add_word/JsonUploader";




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
};


const instance = axios.create({
  baseURL: "http://localhost:3001/linguistics/words/words_carousel",
});

export const CodexForm: React.FC<CodexFormProps> = ({
                                                      editingFrom,
    isEditingForm
                                    }) => {
  const handleSubmit = async (values: CodexFormValues) => {
    try {
      const response = await instance.post("", values);
      console.log("Данные успешно отправлены:", response.data);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
      <Box className={"border-2 border-gray-200 dark:border-gray-700"} maxWidth="md" mx="auto" p={4}>
        <Typography variant="h4" gutterBottom>
          Добавить новую запись
        </Typography>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, setValues }) => (
              <Form>
                {/* Поле для загрузки JSON */}
                <JsonUploader
                    placeholder='{
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
                          "derivatives": ["производное1"]
                       }'
                    onJsonParsed={(parsedData) => {
                      const updatedValues = {
                        ...values,
                        ...parsedData,
                        morpheme: {
                          ...values.morpheme,
                          ...parsedData.morpheme,
                        },
                      };
                      setValues(updatedValues);
                    }}
                />
                {/* Приставки */}
                <DynamicArrayField
                    name="morpheme.prefix"
                    label="Префиксы"
                    placeholder="Введите префикс"
                    minItems={1}
                    allowMultiline={true}
                />
                {/* Корни */}
                <DynamicArrayField
                    name="morpheme.root"
                    label="Корни"
                    placeholder="Введите корень"
                    minItems={1}
                    allowMultiline={true}
                />
                {/* Suffix */}
                  <DynamicArrayField
                      name="morpheme.suffix"
                      label="Суффиксы"
                      placeholder="Введите суффикс"
                      minItems={1}
                      allowMultiline={true}
                  />
                {/* End */}
                <DynamicArrayField
                    name="morpheme.end"
                    label="Окончания"
                    placeholder="Введите окончание"
                    minItems={1}
                    allowMultiline={true}
                />

                {/* Описание */}
                <Box mb={3}>
                  <Field name="description">
                    {({ field }: any) => (
                        <Input className={"paragraph_base"}
                            {...field}
                            fullWidth
                             placeholder={"Введите ваше описание."}
                            label="Описание"
                            variant="outlined"
                            multiline
                            rows={4}
                            error={!!ErrorMessage}
                            helperText={<ErrorMessage name="description" />}
                        />
                    )}
                  </Field>
                </Box>

                {/* Другие поля... */}
                {/* Производные */}
                <Box mb={3}>
                  <Typography variant="subtitle1">Производные:</Typography>
                  <FieldArray name="derivatives">
                    {({ remove, push }) => (
                        <>
                          {values.derivatives.map((derivative, index) => (
                              <Box display="flex" alignItems="center" key={index} mb={2}>
                                <Field name={`derivatives[${index}]`}>
                                  {({ field }: any) => (
                                      <Input className={"paragraph_base"}
                                          {...field}
                                          fullWidth
                                             placeholder={"Введите ваши производные."}
                                          label={`Производное ${index + 1}`}
                                          variant="outlined"
                                          error={!!ErrorMessage}
                                             multiline
                                          helperText={
                                            <ErrorMessage name={`derivatives[${index}]`} />
                                          }
                                      />
                                  )}
                                </Field>
                                <IconButton
                                    onClick={() => remove(index)}
                                    disabled={values.derivatives.length === 1}
                                    aria-label="удалить"
                                    color="error"
                                >
                                  <Delete />
                                </IconButton>
                              </Box>
                          ))}
                          <Button
                              variant="contained"
                              startIcon={<Add />}
                              onClick={() => push("")}
                          >
                            Добавить производное
                          </Button>
                        </>
                    )}
                  </FieldArray>
                </Box>

                {/* Кнопка отправки */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                  Добавить запись
                </Button>
                <Button
                    onClick={() => {isEditingForm(!editingFrom)}}
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
};


//------------------Types-----------------------------------


interface CodexFormProps {
  editingFrom: boolean
  isEditingForm (active:  boolean): void
}

interface CodexFormValues {
  title: string;
  morpheme: {
    prefix?: string[];
    root: string[];
    suffix?: string[];
    end?: string[];
  };
  description: string;
  icon: string;
  quote: string;
  annotation: string;
  joke: string;
  derivatives: string[];
}