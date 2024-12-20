import React from "react";
import { Box, Typography, Input } from "@mui/material";
import {WordCarousel} from "@/app/store/slices/linguisticsSlice";

interface JsonUploaderProps {
    onJsonParsed: (parsedData: WordCarousel) => void; // Коллбэк для передачи данных из JSON
    placeholder?: string; // Плейсхолдер для поля ввода
}

export const JsonUploader: React.FC<JsonUploaderProps> = ({
                                                              onJsonParsed,
                                                              placeholder,
                                                          }) => {
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const jsonString = e.target.value;
        try {
            const parsedData = JSON.parse(jsonString);

            if (typeof parsedData === "object" && parsedData !== null) {
                // Проверяем и инициализируем опциональные поля
                parsedData.morpheme = {
                    prefix: parsedData.morpheme?.prefix || [],
                    root: parsedData.morpheme?.root || [],
                    suffix: parsedData.morpheme?.suffix || [],
                    end: parsedData.morpheme?.end || [],
                };

                onJsonParsed(parsedData); // Передача данных в родительский компонент
            } else {
                alert("Некорректный формат JSON");
            }
        } catch (error: unknown) {
            if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                alert("Ошибка парсинга JSON: " + error.message);
            } else {
                alert("Неизвестная ошибка при парсинге JSON");
            }
        }
    };

    return (
        <Box mb={3}>
            <Typography variant="subtitle1">Загрузить данные (JSON):</Typography>
            <Input
                className={"paragraph_base"}
                fullWidth
                multiline
                rows={4}
                placeholder={placeholder}
                onBlur={handleBlur}
            />
        </Box>
    );
};