"use client";

import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Input ,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import axios from "axios";

// Типы данных
interface CodexFormValues {
  title: string;
  morpheme: {
    root: string[];
  };
  description: string;
  icon: string;
  quote: string;
  annotation: string;
  joke: string;
  derivatives: string[];
}

// Начальные значения формы
const initialValues: CodexFormValues = {
  title: "",
  morpheme: {
    root: [""],
  },
  description: "",
  icon: "",
  quote: "",
  annotation: "",
  joke: "",
  derivatives: [""],
};

// Схема валидации
const validationSchema = Yup.object({
  title: Yup.string().required("Обязательное поле"),
  morpheme: Yup.object({
    root: Yup.array()
        .of(Yup.string().required("Введите корень"))
        .min(1, "Укажите хотя бы один корень"),
  }),
  description: Yup.string().required("Введите описание"),
  icon: Yup.string().required("Введите иконку"),
  quote: Yup.string().required("Введите цитату"),
  annotation: Yup.string().required("Введите аннотацию"),
  joke: Yup.string().required("Введите шутку"),
  derivatives: Yup.array()
      .of(Yup.string().required("Введите производное"))
      .min(1, "Укажите хотя бы одно производное"),
});

const instance = axios.create({
  baseURL: "http://localhost:3001/words",
});

export const CodexForm: React.FC = () => {
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
                <Box mb={3}>
                  <Typography variant="subtitle1">Загрузить данные (JSON):</Typography>
                  <Input
                      className={"paragraph_base"}
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder='{"title": "Пример", "description": "Описание", "morpheme": {"root": ["корень1"]}, "icon": "🌟", "quote": "Цитата", "annotation": "Аннотация", "joke": "Шутка", "derivatives": ["производное1"]}'
                      onBlur={(e) => {
                        const jsonString = e.target.value;
                        try {
                          const parsedData = JSON.parse(jsonString);

                          // Проверяем, что объект соответствует структуре формы
                          if (typeof parsedData === "object" && parsedData !== null) {
                            setValues({ ...values, ...parsedData }); // Обновляем значения формы
                          } else {
                            alert("Некорректный формат JSON");
                          }
                        } catch (error) {
                          alert("Ошибка парсинга JSON: " + error.message);
                        }
                      }}
                  />
                  <Typography className={""} variant="caption" color="textSecondary">
                    Вставьте JSON-строку, чтобы заполнить все поля формы.
                  </Typography>
                </Box>

                {/* Заголовок */}
                <Box mb={3}>
                  <Field name="title">
                    {({ field }: any) => (
                        <Input className={"paragraph_base"}
                            {...field}
                            fullWidth
                               multiline
                            label="Заголовок"
                            variant="outlined"
                            error={!!ErrorMessage}
                            helperText={<ErrorMessage name="title" />}
                               placeholder={"Введите ваш заголовок."}
                        />
                    )}
                  </Field>
                </Box>

                {/* Корни */}
                <Box mb={3}>
                  <Typography variant="subtitle1">Корни:</Typography>
                  <FieldArray name="morpheme.root">
                    {({ remove, push }) => (
                        <>
                          {values.morpheme.root.map((root, index) => (
                              <Box display="flex" alignItems="center" key={index} mb={2}>
                                <Field name={`morpheme.root[${index}]`}>
                                  {({ field }: any) => (
                                      <Input className={"paragraph_base"}
                                             placeholder={"Введите ваш корень."}
                                          {...field}
                                          fullWidth
                                             multiline
                                          label={`Корень ${index + 1}`}
                                          variant="outlined"
                                          error={!!ErrorMessage}
                                          helperText={
                                            <ErrorMessage name={`morpheme.root[${index}]`} />
                                          }
                                      />
                                  )}
                                </Field>
                                <IconButton
                                    onClick={() => remove(index)}
                                    disabled={values.morpheme.root.length === 1}
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
                            Добавить корень
                          </Button>
                        </>
                    )}
                  </FieldArray>
                </Box>

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
              </Form>
          )}
        </Formik>
      </Box>
  );
};