import React, {useEffect, useRef, useState} from "react";

interface DynamicTextWithPeakProps {
    text: string; // Текст, который мы выводим
    strokeColor?: string; // Цвет линии
    strokeWidth?: number; // Толщина линии
}

export const DynamicTextWithPeak: React.FC<DynamicTextWithPeakProps> = ({
                                                                     text,
                                                                     strokeColor = "#4546bc", // Значение по умолчанию для цвета линии
                                                                     strokeWidth = 2, // Значение по умолчанию для толщины линии
                                                                 }) => {
    const textRef = useRef<HTMLSpanElement>(null); // Ссылка на элемент текста
    const [textSize, setTextSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    }); // Состояние для размеров текста

    // Хук для получения размеров текста
    useEffect(() => {
        if (textRef.current) {
            const { width, height } = textRef.current.getBoundingClientRect(); // Получаем ширину и высоту текста
            setTextSize({ width, height }); // Сохраняем размеры в состояние
        }
    }, [text]); // Срабатывает при изменении текста

    // Формируем путь для "домика"
    const peakPath = `
    M 0,${textSize.height + 10} 
    L ${textSize.width / 2},${-textSize.height + 35} 
    L ${textSize.width},${textSize.height + 10}
  `;
    // M: Начальная точка (лево, низ текста)
    // L: Верхушка "домика" (центр, выше текста)
    // L: Конечная точка (право, низ текста)

    return (
        <span className={`relative inline text-center`}>
            {/* SVG для "домика" */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={textSize.width} // Ширина SVG равна ширине текста
                height={textSize.height * 2} // Высота SVG больше текста, чтобы разместить "домик"
                viewBox={`0 0 ${textSize.width} ${textSize.height * 2}`}
                className="absolute"
                style={{
                    top: `-${textSize.height}px`, // Смещение SVG вверх
                    left: "0px", // Выравнивание SVG по левому краю
                }}
            >
                <path
                    d={peakPath} // Путь для "домика"
                    fill="none" // Убираем заливку
                    stroke={strokeColor} // Цвет линии
                    strokeWidth={strokeWidth} // Толщина линии
                />
            </svg>
            {/* Сам текст */}
            <span
                ref={textRef} // Ссылка на текст
                className={`relative font-bold text-lg z-10`}
                style={{color: `${strokeColor}`}}
            >
        {text}
      </span>
        </span>
    );
};