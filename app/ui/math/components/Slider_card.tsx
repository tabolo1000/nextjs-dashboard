"use client";

import {Box, Button, CardContent, Input, Typography} from "@mui/material";
import { Morpheme } from "@/app/ui/math/components/Morpheme";
import React, { useState } from "react";
import { WordCarousel, WordCarouselUpdate } from "@/app/store/slices/linguisticsSlice";
import {AddBoxOutlined, ChangeCircleOutlined, DeleteOutline} from "@mui/icons-material";


export function Slider_card({
                                id,
                                handleWordChange,
                                handleWordDelete,
                                isEditingForm,
                                morpheme,
                                title,
                                description,
                                icon,
                                quote,
                                annotation,
                                joke,
                                derivatives,

                            }: WordCarousel & {
    handleWordChange: (value: WordCarouselUpdate) => void,
    handleWordDelete: (id: string) => void
                                isEditingForm: (active:  boolean) => void
                            },) {
    // Состояние для редактирования всех полей
    const [editableFields, setEditableFields] = useState<Partial<WordCarousel>>({
        title,
        description,
        quote,
        annotation,
        joke,
        derivatives,
    });
    const [editingField, setEditingField] = useState<string | null>(null); // Какое поле редактируется



    // Универсальная функция для обновления полей
    const handleFieldChange = (fieldName: string, value: string) => {
        setEditableFields((prev) => ({
            ...prev,
            [fieldName]: value,
        }));
    };

    // Обновление значения в глобальном состоянии через handleWordChange
    const handleFieldSubmit = (fieldName: keyof WordCarousel) => {
        if (editableFields[fieldName] !== undefined) {
            handleWordChange({
                id,
                [fieldName]: editableFields[fieldName],
            });
        }
        setEditingField(null); // Завершаем редактирование
    };

    // Обновление массива derivatives
    const handleArrayFieldChange = (index: number, value: string) => {
        if (!editableFields.derivatives) return;
        const updatedArray = [...editableFields.derivatives];
        updatedArray[index] = value;

        setEditableFields((prev) => ({
            ...prev,
            derivatives: updatedArray,
        }));
    };

    const handleArrayFieldSubmit = () => {
        handleWordChange({
            id,
            derivatives: editableFields.derivatives,
        });
        setEditingField(null);
    };
    return (
        <Box
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
            className="dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg"
        >
            {/* Card Content */}
            <CardContent className="space-y-4">
                <div className={"flex flex-row justify-end items-center gap-1 w-full "}>
                    <div className="border border-gray-400 p-2 rounded-lg bg-blue-50 dark:bg-opacity-10">
                        <Button className={"text-green-600"} onClick={()=> isEditingForm(true) }><AddBoxOutlined />Добавить</Button>
                        <Button className={"text-amber-600"} onClick={()=>handleWordDelete(id)}><ChangeCircleOutlined />Изменить</Button>
                        <Button className={"text-red-600"} onClick={()=>handleWordDelete(id)}><DeleteOutline />Удалить</Button>
                    </div>
                </div>

                {/* Title */}
                <Typography variant="h5" component="div" className="indent-4 header_h3 flex justify-right align-middle">
                    {icon}
                    {editingField === "title" ? (
                        <Input
                            className={"paragraph_base"}
                            multiline
                            fullWidth
                            value={editableFields.title || ""}
                            onChange={(e) => handleFieldChange("title", e.currentTarget.value)}
                            onBlur={() => handleFieldSubmit("title")}
                            autoFocus
                        />
                    ) : (
                        <span onDoubleClick={() => setEditingField("title")}>{editableFields.title}</span>
                    )}
                </Typography>

                <Morpheme {...morpheme} />

                {/* Description */}
                <Typography variant="body1" color="text.secondary" className="paragraph indent-4">
                    {editingField === "description" ? (
                        <Input
                            className={"paragraph_base"}
                            fullWidth
                            multiline
                            value={editableFields.description || ""}
                            onChange={(e) => handleFieldChange("description", e.currentTarget.value)}
                            onBlur={() => handleFieldSubmit("description")}
                            autoFocus
                        />
                    ) : (
                        <span onDoubleClick={() => setEditingField("description")}>
                            {editableFields.description}
                        </span>
                    )}
                </Typography>

                {/* Quote */}
                <Typography variant="body2" color="text.secondary" className="paragraph indent-4">
                    <blockquote
                        className="font-semibold italic mb-4 relative pl-8 before:content-['“'] before:absolute before:left-0 before:top-0 before:text-5xl before:font-bold before:text-indigo-300 after:content-['”'] after:text-5xl after:font-bold after:text-indigo-300"
                    >
                        {editingField === "quote" ? (
                            <Input
                                className={"paragraph_base"}
                                fullWidth
                                multiline
                                value={editableFields.quote || ""}
                                onChange={(e) => handleFieldChange("quote", e.currentTarget.value)}
                                onBlur={() => handleFieldSubmit("quote")}
                                autoFocus
                            />
                        ) : (
                            <span onDoubleClick={() => setEditingField("quote")}>{editableFields.quote}</span>
                        )}
                    </blockquote>
                </Typography>

                {/* Annotation */}
                <div className="annotation_card">
                    {editingField === "annotation" ? (
                        <Input
                            className={"paragraph_base"}
                            fullWidth
                            multiline
                            value={editableFields.annotation || ""}
                            onChange={(e) => handleFieldChange("annotation", e.currentTarget.value)}
                            onBlur={() => handleFieldSubmit("annotation")}
                            autoFocus
                        />
                    ) : (
                        <p className="italic" onDoubleClick={() => setEditingField("annotation")}>
                            <span className="font-bold text-purple-600">Аннотация:</span>{" "}
                            {editableFields.annotation}
                        </p>
                    )}
                </div>

                {/* Derivatives */}
                <div className="paragraph_base">
                    <span className="font-bold text-purple-600">Производные слова:</span>
                    {(editableFields.derivatives &&
                        editableFields.derivatives.map((e: string, i: number) => {
                            return editingField === `derivative-${i}` ? (
                                <Input
                                    key={i}
                                    className={"paragraph_base"}
                                    multiline
                                    fullWidth
                                    value={e}
                                    onChange={(event) => handleArrayFieldChange(i, event.currentTarget.value)}
                                    onBlur={handleArrayFieldSubmit}
                                    autoFocus
                                />
                            ) : (
                                <p
                                    className="italic"
                                    key={i}
                                    onDoubleClick={() => setEditingField(`derivative-${i}`)}
                                >
                                    <span className="font-bold text-purple-600">{i + 1}.</span> {e}
                                </p>
                            );
                        }))}
                </div>

                {/* Joke */}
                <div className="annotation_card">
                    {editingField === "joke" ? (
                        <Input
                            className={"paragraph_base"}
                            fullWidth
                            multiline
                            value={editableFields.joke || ""}
                            onChange={(e) => handleFieldChange("joke", e.currentTarget.value)}
                            onBlur={() => handleFieldSubmit("joke")}
                            autoFocus
                        />
                    ) : (
                        <p className="italic" onDoubleClick={() => setEditingField("joke")}>
                            <span className="font-bold text-purple-600">Joke:</span> {editableFields.joke}
                        </p>
                    )}
                </div>
            </CardContent>
        </Box>
    );
}