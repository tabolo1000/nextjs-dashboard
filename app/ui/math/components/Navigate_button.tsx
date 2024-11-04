"use client"

import {useRouter} from "next/navigation";
import {useCallback} from "react";

export default function NavigateButton({to}: Props) {
    const router = useRouter()

    const routerHandler = useCallback((nextPage: string)=>{
        router.push(nextPage)
    }, [router])

    return <div className="right-sidebar  bg-gray-100 p-4 border-l">
        <h2 className="text-xl font-bold mb-4 opacity-0 absolute">Навигация</h2>
        <div className="flex">
            {/* Карточка 2: Перейти к следующей теме */}
            <div
                className="button_to bg-blue-500 hover:bg-blue-700 mr-5">
                <button onClick={(() => routerHandler(to.nextTask))} className="text-lg w-full">Перейти к следующей теме</button>
            </div>
            {/* Карточка 1: Пройти практическое занятие */}
            <div
                className="button_to bg-green-500 hover:bg-green-600">
                <button onClick={(() => routerHandler(to.nextExercise))}  className="text-lg w-full">Пройти практическое занятие</button>
            </div>
        </div>
    </div>
}



//--------------------------------------
interface Props {
    to: {
        nextTask: string,
        nextExercise: string,
    }
}