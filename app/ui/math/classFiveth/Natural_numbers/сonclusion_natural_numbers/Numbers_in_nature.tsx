"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Numbers_in_nature() {
    const [objects, setObjects] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (objects && number) {
            setMessage(`Вы видите ${number} ${objects}.`);
        } else {
            setMessage('Пожалуйста, введите название объекта и количество.');
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Задание 3: Натуральные числа в природе</h1>
            <p>Введите название объекта (например, деревья) и количество:</p>

            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    value={objects}
                    onChange={(e) => setObjects(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="Название объекта"
                />
                <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="Количество"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Подтвердить
                </button>
            </form>

            {message && <p className="mt-4">{message}</p>}

            <Link href="/" className="mt-4 block text-blue-500 underline">
                Вернуться на главную
            </Link>
        </div>
    );
}