"use client"

import {useCallback, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Audio_button} from "@/app/ui/math/components/audio_player/Audio_button";
import {useRouter} from "next/navigation";
import {Base_button} from "@/app/ui/math/components/Base_button";

export const Hunter = () => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const number = parseInt(inputValue, 10);
        if (!isNaN(number)) {
            setMessage(`Отлично! Вы нашли ${number} предметов.`);
        } else {
            setMessage('Пожалуйста, введите число.');
        }
    };
    const handlerToNextPage = useCallback(()=>{
        router.push("./")
    }, [router])


    return (
        <div className="container p-8 flex flex-col justify-center place-items-center">
            <h1 className="text-2xl font-bold mb-4">Задание 1: Охота за числами</h1>

            <p className="p-2.5 text-xl">
                Найдите предметы вокруг себя или используйте изображение, затем введите их количество:
            </p>

            <Image src="/table_for_hunter.jpeg" alt="table_of_hunter" width={400} height={400}/>

            <form onSubmit={handleSubmit} className="flex justify-center mt-4 w-full ">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 mr-2 w-1/2"
                    placeholder="Введите количество предметов"
                />
                <div
                className={"inline-block w-1/3"}>
                    <Base_button type='submit' onClick={handlerToNextPage} name="Подтвердить" classStyle="button_to bg-blue-500 hover:bg-blue-700 md-5" />
                </div>
                {/*<button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Подтвердить
                </button>*/}
            </form>

            {(!message && +message > 0)
                ? <p className="mt-4 text-3xl text-green-600">{message}</p>
                : <p className="mt-4 text-3xl text-green-500">{message}</p>}

            <Audio_button path={"/math/class_fifth/lesson_first/natural_numbers/hunter_1.1.1"}/>
            <div
                className={"w-full flex justify-center mt-5"}
            >
                <Base_button onClick={handlerToNextPage} name="Вернуться на главную" classStyle="w-1/2 button_to bg-blue-500 hover:bg-blue-700 mr-5" />
                <Base_button onClick={handlerToNextPage} name="Перейти к следующему упражнению" classStyle="w-1/2 button_to bg-green-500 hover:bg-green-600 mr-5" />
            </div>

        </div>
    );
};