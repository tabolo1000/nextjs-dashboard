"use client"


import {useRouter} from "next/navigation";
import {useCallback} from "react";

export default function NavigateButton({setTopic}: Props) {
    const toNextTaskHandler = useCallback(()=>{
        setTopic("Decimal_system")
    }, [setTopic])

    return <div className="right-sidebar  bg-gray-100 p-4 border-l">
        <h2 className="text-xl font-bold mb-4 opacity-0 absolute">Навигация</h2>
        <div className="flex">
            {/* Карточка 2: Перейти к следующей теме */}
            <div
                className="flex w-1/2 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg cursor-pointer">
                <button onClick={toNextTaskHandler} className="text-lg">Перейти к следующей теме</button>
            </div>
            {/* Карточка 1: Пройти практическое занятие */}
            <div
                className="flex w-1/2 items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg cursor-pointer">
                <button  className="text-lg">Пройти практическое занятие</button>
            </div>
        </div>
    </div>
}



//--------------------------------------
interface Props {
    setTopic: (topic: string) => void;
}