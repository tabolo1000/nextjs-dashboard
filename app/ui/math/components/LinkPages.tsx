"use client"
import { useState } from 'react';
import Link from 'next/link';

// Функция для статического чтения файлов

// Компонент для отображения на клиенте с поиском
export function Link_pages({ directories }: { directories: string[] }) {
    // Состояние для ввода поискового запроса
    const [searchTerm, setSearchTerm] = useState('');

    // Фильтруем список слов в зависимости от поискового запроса
    const filteredDirectories = directories.filter((dir) =>
        dir.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2 className="header_h1">
                Explore the World of Words
            </h2>

            {/* Поле поиска */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search words..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="dark:bg-gray-900 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                />
            </div>

            {/* Сетка карточек с фильтрацией */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDirectories.length ? (
                    filteredDirectories.map((dir) => (
                        <Link
                            href={`/linguistics/words/${dir}`}
                            key={dir}
                            className="dark:bg-dark-card group relative bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"
                            ></div>

                            <h3 className="header_h4">
                                {dir.replace(/_/g, ' ')}
                            </h3>

                            <p className="dark:text-gray-400 text-gray-600">
                                Dive into the meaning and etymology of "{dir.replace(/_/g, ' ')}".
                            </p>

                            <div className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium transition-colors">
                                Learn More →
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="text-lg text-gray-500">No words found matching "{searchTerm}".</div>
                )}
            </div>
        </div>
    );
}