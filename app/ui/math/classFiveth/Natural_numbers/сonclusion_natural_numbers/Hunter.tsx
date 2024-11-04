"use client"

import {useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Audio_button} from "@/app/ui/math/components/Audio_button";

export const Hunter = () => {

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





    return (
        <div className="container p-8 flex flex-col justify-center place-items-center">
            <h1 className="text-2xl font-bold mb-4">Задание 1: Охота за числами</h1>

            <p className="p-2.5 text-xl">
                <Audio_button path={"/math/class_fifth/lesson_first/natural_numbers/hunter_1.1.1"}/>
                Найдите предметы вокруг себя или используйте изображение, затем введите их количество:
            </p>

            <Image src="/table_for_hunter.jpeg" alt="table_of_hunter" width={400} height={400}/>

            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="Введите количество предметов"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Подтвердить
                </button>
            </form>

            {(!message && +message > 0)
                ? <p className="mt-4 text-3xl text-green-600">{message}</p>
                : <p className="mt-4 text-3xl text-green-500">{message}</p>}


            <Link href="./" className="mt-4 block text-blue-500 underline">
                Вернуться на главную
            </Link>
        </div>
    );
};