"use client"

import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
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

let a = {
    "title": "Персистентность: англ. Persistence [pəˈsɪstəns], фр. Persistance [pɛʁ.si.stɑ̃s], нем. Persistenz [ˌpɛʁ.zɪˈstɛnt͡s], польск. Persystencja [pɛr.sɨsˈtɛn.t͡sja]",
    "icon": "🔄",
    "quote": "«Персистентность — это умение продолжать двигаться вперёд, несмотря на любые препятствия.»",
    "description": "Слово «персистентность» заимствовано из латинского *persistentia*, что означает «стойкость», «упорство» или «непрерывность». Корень *persistere* состоит из префикса *per-* («через», «до конца») и *sistere* («стоять», «оставаться»). Первоначально слово использовалось в значении «неизменное упорство», но с развитием науки и технологий приобрело более широкий спектр значений. Сегодня термин встречается в таких областях, как медицина (например, устойчивость вирусов), информатика (например, долговременное хранение данных), психология (упорство в достижении цели) и других дисциплинах. В русском языке термин появился в XX веке, особенно с ростом научной и технической литературы.",
    "morpheme": {
    "prefix": ["пер"],
      "root": ["систент"],
      "suffix": ["ность"]
  },
    "annotation": "Персистентность символизирует устойчивость и продолжительность, как в природе, так и в технологиях. Это качество, которое позволяет преодолевать изменения и сохранять целостность.",
    "joke": "Персистентность — это когда даже Wi-Fi в подвале упорно держит одну палочку связи.",
    "derivatives": [
    "Персистенция — устаревшая форма, обозначающая стойкость или долговременность.",
    "Персистентный — устойчивый, сохраняющий свои свойства, например, в биологии или химии.",
    "Суперпёрсистентный — с подчеркнутой долговременной устойчивостью (иногда иронично используется).",
    "Персистентное хранилище — в информатике: система для долговременного хранения данных.",
    "Неперсистентный — обратное понятие, обозначающее временность или нестабильность.",
    "Персистентный процесс — в программировании: процесс, который сохраняет состояние между запусками.",
    "Персистентная память — тип памяти, сохраняющий данные после отключения питания.",
    "Персистентная инфекция — хроническое заболевание, при котором вирус сохраняется в организме длительное время."
  ]
  }

const instance = axios.create({
    baseURL: "http://localhost:3001/words",
})

const CodexForm: React.FC = () => {



  const handleSubmit = async (values: CodexFormValues) => {
    try {
        debugger
      const response = await instance.post("", values);
      console.log("Данные успешно отправлены:", response.data);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };



  return (
    <Box maxWidth="md" mx="auto" p={4}>
      <Typography variant="h4" gutterBottom>
        Добавить новую запись
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {/* Заголовок */}
            <Box mb={3}>
              <Field name="title">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Заголовок"
                    variant="outlined"
                    error={!!ErrorMessage}
                    helperText={<ErrorMessage name="title" />}
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
                            <TextField
                              {...field}
                              fullWidth
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
                  <TextField
                    {...field}
                    fullWidth
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

            {/* Иконка */}
            <Box mb={3}>
              <Field name="icon">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Иконка"
                    variant="outlined"
                    error={!!ErrorMessage}
                    helperText={<ErrorMessage name="icon" />}
                  />
                )}
              </Field>
            </Box>

            {/* Цитата */}
            <Box mb={3}>
              <Field name="quote">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Цитата"
                    variant="outlined"
                    error={!!ErrorMessage}
                    helperText={<ErrorMessage name="quote" />}
                  />
                )}
              </Field>
            </Box>

            {/* Аннотация */}
            <Box mb={3}>
              <Field name="annotation">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Аннотация"
                    variant="outlined"
                    multiline
                    rows={2}
                    error={!!ErrorMessage}
                    helperText={<ErrorMessage name="annotation" />}
                  />
                )}
              </Field>
            </Box>

            {/* Шутка */}
            <Box mb={3}>
              <Field name="joke">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Шутка"
                    variant="outlined"
                    error={!!ErrorMessage}
                    helperText={<ErrorMessage name="joke" />}
                  />
                )}
              </Field>
            </Box>

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
                            <TextField
                              {...field}
                              fullWidth
                              label={`Производное ${index + 1}`}
                              variant="outlined"
                              error={!!ErrorMessage}
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

export default CodexForm;