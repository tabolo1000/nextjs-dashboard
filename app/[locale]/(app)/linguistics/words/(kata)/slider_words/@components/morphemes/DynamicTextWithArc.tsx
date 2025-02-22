import React, {useEffect, useRef, useState} from "react";

interface DynamicTextWithArcProps {
    text: string; // Текст, который мы выводим
    strokeColor?: string; // Цвет дуги
    strokeWidth?: number; // Толщина линии дуги
}

export const DynamicTextWithArc: React.FC<DynamicTextWithArcProps> = ({
                                                                   text,
                                                                   strokeColor = "#bc4d61", // Значение по умолчанию для цвета дуги
                                                                   strokeWidth = 2, // Значение по умолчанию для толщины дуги
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

    // Формируем путь для дуги
    const arcPath = `
    M 0,${textSize.height} 
    Q ${textSize.width / 2},${-textSize.height + 18} 
    ${textSize.width},${textSize.height}
  `;
    // M: Начальная точка
    // Q: Контрольная точка для кривой Безье (центральная)
    // Конечная точка: справа от текста

    return (
        <span className={`relative inline text-center`}>
            {/* SVG для дуги */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={textSize.width} // Ширина SVG равна ширине текста
                height={textSize.height * 1.5} // Высота SVG больше текста, чтобы разместить дугу
                viewBox={`0 0 ${textSize.width} ${textSize.height * 1.5}`}
                className="absolute"
                style={{
                    top: `-${textSize.height * 0.75}px`, // Смещение SVG вверх
                    left: "0", // Выравнивание SVG по левому краю
                }}
            >
                <path
                    d={arcPath} // Путь для дуги
                    fill="none" // Убираем заливку
                    stroke={strokeColor} // Цвет линии дуги
                    strokeWidth={strokeWidth} // Толщина линии дуги
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
            {/* Подчеркивание (если нужно, раскомментировать) */}
            {/* <hr
        className={`w-full border-t-${strokeWidth} border-solid`}
        style={{ borderColor: strokeColor }}
      /> */}
        </span>
    );
};