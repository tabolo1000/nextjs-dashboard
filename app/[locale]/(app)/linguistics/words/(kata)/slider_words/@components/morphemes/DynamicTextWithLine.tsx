import React, {useEffect, useRef, useState} from "react";

interface DynamicTextWithLineProps {
    text: string; // The text we output
    strokeColor?: string; // Line color
    strokeWidth?: number; // Line thickness
    lineHeight?: number; // Height of vertical line
}

export const DynamicTextWithLine: React.FC<DynamicTextWithLineProps> = ({
                                                                     text,
                                                                     strokeColor = "#008000",
                                                                     strokeWidth = 4,
                                                                     lineHeight = 20,
                                                                 }) => {
    const textRef = useRef<HTMLSpanElement>(null);
    const [textSize, setTextSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    });

    // Хук для получения размеров текста
    useEffect(() => {
        if (textRef.current) {
            const { width, height } = textRef.current.getBoundingClientRect(); // Получаем ширину и высоту текста

            setTextSize({ width, height });
        }
    }, [text]);

    // Формируем путь: горизонтальная линия + вертикальная черта
    const linePath = `
    M 0,${-lineHeight} 
    H ${textSize.width} 
    M ${textSize.width},${-lineHeight - 20} 
    V 0
  `;
    // M: Начальная точка (слева от текста, на высоте -lineHeight)
    // H: Горизонтальная линия от начальной точки до конца текста
    // M: Начальная точка вертикальной линии (правый конец)
    // V: Вертикальная линия вниз

    return (
        <span className="relative inline text-center">
            {/* SVG для линии */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={textSize.width} // Ширина SVG равна ширине текста
                height={lineHeight + textSize.height} // Высота SVG включает текст и линию
                viewBox={`0 -${lineHeight} ${textSize.width} ${lineHeight + textSize.height}`}
                className="absolute"
                style={{
                    top: `-${lineHeight - 15}px`, // Смещение SVG вверх на высоту линии
                    left: "0px", // Выравнивание SVG по левому краю
                }}
            >
                <path
                    d={linePath} // Путь для линии
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