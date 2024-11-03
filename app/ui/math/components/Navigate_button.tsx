"use client"

import {useRouter} from "next/navigation";
import {useCallback} from "react";

export default function NavigateButton({to}: Props) {
    const router = useRouter()

    const routerHandler = useCallback(()=>{
        router.push(to)
    },[router])

    return <div className="right-sidebar  bg-gray-100 p-4 border-l">
        <h2 className="text-xl font-bold mb-4 opacity-0 absolute">Навигация</h2>
        <div className="flex">
            {/* Карточка 2: Перейти к следующей теме */}
            <div
                className="flex w-1/2 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg cursor-pointer">
                <button onClick={routerHandler} className="text-lg w-full">Перейти к следующей теме</button>
            </div>
            {/* Карточка 1: Пройти практическое занятие */}
            <div
                className="flex w-1/2 items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg cursor-pointer">
                <button onClick={routerHandler}  className="text-lg w-full">Пройти практическое занятие</button>
            </div>
        </div>
    </div>
}



//--------------------------------------
interface Props {
    to: string;
}