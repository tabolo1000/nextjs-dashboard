"use client";

import { Box, CardContent, Typography } from "@mui/material";
import { Morpheme } from "@/app/ui/math/components/Morpheme";
import React, { useState } from "react";
import { WordCarousel, WordCarouselUpdate } from "@/app/store/slices/linguisticsSlice";

export function Slider_card({
                                id,
                                handleWordChange,
                                morpheme,
                                title,
                                description,
                                icon,
                                quote,
                                annotation,
                                joke,
                                derivatives,
                            }: WordCarousel & { handleWordChange: (value: WordCarouselUpdate) => void }) {
    // Состояние для редактирования всех полей
    const [editableFields, setEditableFields] = useState<{id: string;
        title: string,
        description: string,
        //icon?: string,
        quote: string,
        annotation?: string,
        joke?: string,
        derivatives?: Array<string>}>({
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
    const handleFieldSubmit = (fieldName: string) => {
        if (editableFields[fieldName] !== undefined) {
            handleWordChange({
                id,
                [fieldName]: editableFields[fieldName],
            });
        }
        setEditingField(null); // Завершаем редактирование
    };

    return (
        <Box
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
            className="dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg"
        >
            {/* Card Content */}
            <CardContent className="space-y-4">
                {/* Title */}
                <Typography variant="h5" component="div" className="indent-4 header_h3">
                    {icon}
                    {editingField === "title" ? (
                        <input
                            value={editableFields.title}
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
                        <textarea
                            value={editableFields.description}
                            onChange={(e) => handleFieldChange("description", e.currentTarget.value)}
                            onBlur={() => handleFieldSubmit("description")}
                            autoFocus
                        />
                    ) : (
                        <span onDoubleClick={() => setEditingField("description")}>{editableFields.description}</span>
                    )}
                </Typography>

                {/* Quote */}
                <Typography variant="body2" color="text.secondary" className="paragraph indent-4">
                    <blockquote
                        className="font-semibold italic mb-4 relative pl-8 before:content-['“'] before:absolute before:left-0 before:top-0 before:text-5xl before:font-bold before:text-indigo-300 after:content-['”'] after:text-5xl after:font-bold after:text-indigo-300"
                    >
                        {editingField === "quote" ? (
                            <textarea
                                value={editableFields.quote}
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
                        <textarea
                            value={editableFields.annotation}
                            onChange={(e) => handleFieldChange("annotation", e.currentTarget.value)}
                            onBlur={() => handleFieldSubmit("annotation")}
                            autoFocus
                        />
                    ) : (
                        <p className="italic" onDoubleClick={() => setEditingField("annotation")}>
                            <span className="font-bold text-purple-600">Аннотация:</span> {editableFields.annotation}
                        </p>
                    )}
                </div>

                {/* Derivatives */}
                <div className="annotation_card">
                    <span className="font-bold text-purple-600">Производные слова:</span>
                    {(editableFields.derivatives &&
                        editableFields.derivatives.map((e: string, i: number) => {
                            return editingField === `derivative-${i}` ? (
                                <input
                                    key={i}
                                    value={e}
                                    onChange={(event) => {
                                        const updatedDerivatives = [...editableFields.derivatives];
                                        updatedDerivatives[i] = event.currentTarget.value;
                                        handleFieldChange("derivatives", updatedDerivatives);
                                    }}
                                    onBlur={() => handleFieldSubmit("derivatives")}
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
                        <textarea
                            value={editableFields.joke}
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
