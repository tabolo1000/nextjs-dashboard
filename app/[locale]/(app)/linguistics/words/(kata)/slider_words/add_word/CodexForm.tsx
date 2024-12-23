"use client";

import React, {memo, useCallback, useEffect} from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import {
  Input,
  Button,
  Box,
  Typography,
  IconButton, CircularProgress,
} from "@mui/material";
import {Add, Delete, ExitToAppTwoTone} from "@mui/icons-material";
import {validationSchema} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/add_word/validationSchema";
import {DynamicArrayField} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/add_word/DynamicArrayField";
import {JsonUploader} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/add_word/JsonUploader";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {addWordToCarousel, LoadingStatus} from "@/app/store/slices/linguisticsSlice";
import {Base_button} from "@/app/ui/math/components/Base_button";





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


export const CodexForm: React.FC<CodexFormProps> = memo(function CodexForm({
                                                           editingFrom,
                                                           isEditingForm
                                                         }) {

  const {loading}  = useAppSelector(state => state.linguistics)
  const dispatch = useAppDispatch();


  const handleSubmit = useCallback((values: CodexFormValues, { resetForm }: any) => {
        dispatch(addWordToCarousel(values))
      resetForm();
  }, [addWordToCarousel])






  return (

      <>
          <div className="relative right-0 flex justify-end">
              <Base_button
                  classStyle={"exit_button"}
                  onClick={() => isEditingForm(!editingFrom)}
                  >
                  <ExitToAppTwoTone className="text-3xl " />
              </Base_button>
          </div>
          <Box className={"border-2 border-gray-200 dark:border-gray-700"} mx="auto" p={4}>
              <Typography variant="h4" gutterBottom>
                  Добавить новую запись
              </Typography>
              {/*{loading.addWord.message && <p>{loading.addWord.message}</p>}*/}
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
                          <Base_button
                              disabled={(loading.addWord.status === LoadingStatus.padding)}
                              classStyle="button_to bg-lesson-blue hover:bg-blue-500 dark:bg-blue-650 dark:hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-dark-card"
                              type="submit"
                          >
                              {
                                  loading.addWord.status === LoadingStatus.padding
                                      ? <>
                                          <CircularProgress color="success" size={20} sx={{marginRight: 1}}/>
                                          {loading.addWord.message}
                                      </>
                                      : loading.addWord.status === LoadingStatus.fulfilled
                                          ? <>Добавить запись</>
                                          : <>Попробуйте добавить еще раз!!!</>
                              }

                          </Base_button>
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
      </>

  );
})


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