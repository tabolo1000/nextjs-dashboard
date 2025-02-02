import React from "react";
import { Field, FieldArray } from "formik";
import { Box, IconButton, Typography, Input } from "@mui/material";
import {AddBoxOutlined, Delete} from "@mui/icons-material";
import {Base_button} from "@/app/ui/math/components/Base_button";

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
            <Typography variant="subtitle1" sx={{paddingLeft: "20px", paddingY: "5px"}}  >{label}</Typography>
            <FieldArray name={name}>
                {({ remove, push, form }) => {
                    const values = form.values.morpheme[name.split(".")[1]] || [""];

                    return (
                        <>
                            {
                                values.map((_: string, index: number) => {
                                    return (
                                    <Box display="flex" alignItems="center" key={index} mb={2}>
                                        <Field name={`${name}[${index}]:`}>
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
                            <Box className = {""} alignItems="right"  mb={2}>
                                <Base_button
                                    classStyle={"add_button"}
                                    onClick={() => push("")}
                                >
                                    <AddBoxOutlined className="text-3xl" />
                                    Добавить {" " + label.toLowerCase()}
                                </Base_button>
                            </Box>
                        </>
                    );
                }}
            </FieldArray>
        </Box>
    );
};