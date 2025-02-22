import React, {useEffect, useRef, useState} from "react";

interface DynamicTextWithBoxProps {
    text?: string; // Текст, который мы выводим
    strokeColor?: string; // Цвет рамки
    strokeWidth?: number; // Толщина линии рамки
    padding?: number; // Отступы внутри рамки
}

export const DynamicTextWithBox: React.FC<DynamicTextWithBoxProps> = ({
                                                                   text = "  ",
                                                                   strokeColor = "rgba(255,69,0,0.56)", // Значение по умолчанию для цвета рамки
                                                                   strokeWidth = 2, // Значение по умолчанию для толщины линии рамки
                                                                   padding = 10, // Отступ внутри рамки
                                                               }) => {
    const textRef = useRef<HTMLSpanElement>(null); // Ссылка на элемент текста
    const [textSize, setTextSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    }); // Состояние для размеров текста

    // Хук для получения размеров текста
    useEffect(() => {
        if (textRef.current) {
            let { width, height } = textRef.current.getBoundingClientRect(); // Получаем ширину и высоту текста
            if(width <= 20){
                [width, height] = [20, 20];
            }
            setTextSize({ width, height }); // Сохраняем размеры в состояние
        }
    }, [text]); // Срабатывает при изменении текста

    // Ширина и высота рамки с учётом отступов
    const rectWidth = textSize.width + padding * 2 - 20;
    const rectHeight = textSize.height + padding * 2 - 10;

    return (
        <span className={`relative inline text-center`}>
            {/* SVG для рамки */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={rectWidth} // Ширина SVG равна ширине рамки
                height={rectHeight} // Высота SVG равна высоте рамки
                className="absolute"
                style={{
                    top: `-${padding - 10}px `, // Смещение SVG вверх на размер отступа
                    left: 0, // Смещение SVG влево на размер отступа
                }}
            >
                <rect
                    x={strokeWidth / 2} // Учитываем толщину линии, чтобы рамка не обрезалась
                    y={strokeWidth / 2}
                    width={rectWidth - strokeWidth} // Уменьшаем ширину на толщину линии с двух сторон
                    height={rectHeight - strokeWidth} // Уменьшаем высоту на толщину линии с двух сторон
                    fill="none" // Убираем заливку
                    stroke={strokeColor} // Цвет рамки
                    strokeWidth={strokeWidth} // Толщина рамки
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
