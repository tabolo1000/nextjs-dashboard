"use client"

import { useState } from 'react';
import Link from 'next/link';

export function Number_stairs() {
    const [inputValue, setInputValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const number = parseInt(inputValue, 10);
        if (number === 4) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Задание 2: Числовая лестница</h1>
            <p>Заполните пропущенное число в последовательности: 2, __, 6, 8</p>

            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="Введите пропущенное число"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Подтвердить
                </button>
            </form>

            {isCorrect ? (
                <p className="mt-4 text-green-500">Правильно! Пропущенное число — 4.</p>
            ) : inputValue && (
                <p className="mt-4 text-red-500">Неправильно! Попробуйте снова.</p>
            )}

            <Link href="/" className="mt-4 block text-blue-500 underline">
                Вернуться на главную
            </Link>
        </div>
    );
}