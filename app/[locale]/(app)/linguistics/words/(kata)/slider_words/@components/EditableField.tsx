import React, { useState } from "react";
import { Input } from "@mui/material";

interface EditableFieldProps {
    label?: string; // Заголовок, который выводится перед полем
    value: string; // Текущее значение
    onSubmit: (value: string) => void; // Коллбэк для сохранения изменений
    multiline?: boolean; // Разрешить многострочное поле
    className?: string; // Дополнительные классы
    placeholder?: string; // Плейсхолдер
}

export const EditableField: React.FC<EditableFieldProps> = ({
                                                                label,
                                                                value,
                                                                onSubmit,
                                                                multiline = false,
                                                                className = "",
                                                                placeholder = "",
                                                            }) => {
    const [editing, setEditing] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);

    const handleBlur = () => {
        setEditing(false);
        if (currentValue !== value) {
            onSubmit(currentValue); // Сохранить изменения только при изменении значения
        }
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter" && !multiline) {
            handleBlur();
        }
    };

    return (
        <div className={className}>
            {label && <span className="font-bold text-purple-600">{label}: </span>}
            {editing ? (
                <Input
                    className="paragraph_base"
                    fullWidth
                    multiline={multiline}
                    value={currentValue}
                    onChange={(e) => setCurrentValue(e.currentTarget.value)}
                    onBlur={handleBlur}
                    onKeyUp={handleKeyUp}
                    autoFocus
                    placeholder={placeholder}
                />
            ) : (
                <span
                    className="italic cursor-pointer inline-block "
                    onDoubleClick={() => setEditing(true)}
                >
          {value || placeholder}
        </span>
            )}
        </div>
    );
};