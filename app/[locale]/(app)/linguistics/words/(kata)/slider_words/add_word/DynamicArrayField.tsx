import React from "react";
import { Field, FieldArray, ErrorMessage } from "formik";
import { Box, Button, IconButton, Typography, Input } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

interface DynamicArrayFieldProps {
    name: string; // Имя массива в Formik
    label: string; // Заголовок блока
    placeholder: string; // Плейсхолдер для полей ввода
    minItems?: number; // Минимальное количество элементов
    allowMultiline?: boolean; // Разрешить многострочный ввод
}

export const DynamicArrayField: React.FC<DynamicArrayFieldProps> = ({
                                                                        name,
                                                                        label,
                                                                        placeholder,
                                                                        minItems = 1,
                                                                        allowMultiline = false,
                                                                    }) => {

    return (
        <Box mb={3}>
            <Typography variant="subtitle1">{label}</Typography>
            <FieldArray name={name}>
                {({ remove, push, form }) => {
                    debugger
                    const values = form.values.morpheme[name.split(".")[1]] || [""]; // Получение массива значений

                    return (
                        <>
                            {
                                values.map((_: string, index: number) => {
                                    debugger
                                    return (
                                    <Box display="flex" alignItems="center" key={index} mb={2}>
                                        <Field name={`${name}[${index}]`}>
                                            {({ field }: any) => (
                                                <Input
                                                    className={"paragraph_base"}
                                                    {...field}
                                                    fullWidth
                                                    placeholder={`${placeholder} ${index + 1}`}
                                                    multiline={allowMultiline}
                                                   // rows={allowMultiline ? 3 : 1}
                                                />
                                            )}
                                        </Field>
                                        <IconButton
                                            onClick={() => remove(index)}
                                            disabled={values.length <= minItems} // Отключить удаление, если достигнут минимум
                                            aria-label="удалить"
                                            color="error"
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                )})}
                            <Button
                                variant="contained"
                                startIcon={<Add />}
                                onClick={() => push("")} // Добавить новый элемент
                            >
                                Добавить {label.toLowerCase()}
                            </Button>
                        </>
                    );
                }}
            </FieldArray>
        </Box>
    );
};