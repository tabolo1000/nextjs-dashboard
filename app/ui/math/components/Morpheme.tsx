"use client"

import React, { useRef, useEffect, useState } from "react";

export function Morpheme({prefix, root, suffix, end}: Morpheme_props){


    return <p className={"m-3 mr-10"}>
        {
            (prefix)
            ? prefix.map((el , index) => (
                <DynamicTextWithLine key = {index}  text={el}/>
            ))
            : ""
        }
        {
            (root)
            ? root.map((el , index) => (
                <DynamicTextWithArc key = {index}  text={el}/>
            ))
            : ""
        }
        {
            (suffix)
            ? suffix.map((el , index) => (
                <DynamicTextWithPeak key = {index}  text={el}/>
            ))
            : ""
        }
        {
            (end)
            ? end.map((el , index) => (
                <DynamicTextWithBox key = {index}  text={el}/>
            ))
            : <DynamicTextWithBox />
        }
    </p>
}





interface DynamicTextWithArcProps {
    text: string; // Текст, который мы выводим
    strokeColor?: string; // Цвет дуги
    strokeWidth?: number; // Толщина линии дуги
}

const DynamicTextWithArc: React.FC<DynamicTextWithArcProps> = ({
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



const DynamicTextWithPeak: React.FC<DynamicTextWithPeakProps> = ({
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





const DynamicTextWithBox: React.FC<DynamicTextWithBoxProps> = ({
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




const DynamicTextWithLine: React.FC<DynamicTextWithLineProps> = ({
                                                                     text,
                                                                     strokeColor = "#008000", // Значение по умолчанию для цвета линии
                                                                     strokeWidth = 4, // Значение по умолчанию для толщины линии
                                                                     lineHeight = 20, // Высота вертикальной черты
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





interface DynamicTextWithLineProps {
    text: string; // Текст, который мы выводим
    strokeColor?: string; // Цвет линии
    strokeWidth?: number; // Толщина линии
    lineHeight?: number; // Высота вертикальной линии
}


interface DynamicTextWithBoxProps {
    text?: string; // Текст, который мы выводим
    strokeColor?: string; // Цвет рамки
    strokeWidth?: number; // Толщина линии рамки
    padding?: number; // Отступы внутри рамки
}


interface DynamicTextWithPeakProps {
    text: string; // Текст, который мы выводим
    strokeColor?: string; // Цвет линии
    strokeWidth?: number; // Толщина линии
}

interface Morpheme_props {
    prefix?: string[]
    root: string[],
    suffix?: string[],
    end?: string[]
}