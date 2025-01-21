"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress, Avatar, Button, Alert } from "@mui/material";

export default function Profile() {
    const [data, setData] = useState(null); // Состояние для хранения данных профиля
    const [error, setError] = useState(null); // Состояние для хранения ошибок
    const [loading, setLoading] = useState(true); // Состояние для индикатора загрузки

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // Получаем токен из localStorage
                const token = localStorage.getItem("access_token");

                if (!token) {
                    throw new Error("Токен отсутствует. Пожалуйста, войдите в систему.");
                }

                // Делаем GET запрос к API с заголовком Authorization
                const response = await axios.get("http://localhost:3001/auth/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`, // Передаём токен в формате Bearer
                    },
                });

                // Сохраняем данные профиля в состояние
                setData(response.data);
            } catch (err) {
                // Если произошла ошибка, сохраняем её в состояние
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false); // Убираем индикатор загрузки
            }
        };

        fetchProfile(); // Вызываем функцию для получения данных
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CircularProgress size={60} color="primary" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Alert severity="error" className="w-3/4">
                    {error}
                </Alert>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="bg-opacity-100 shadow-lg rounded-lg p-6">
                {/* Заголовок */}
                <div className="flex items-center space-x-4">
                    <Avatar
                        src={data.avatar || "https://via.placeholder.com/150"}
                        alt={data.name}
                        sx={{ width: 80, height: 80 }}
                    />
                    <div>
                        <h1 className="text-2xl font-bold">{data.name || "Имя не указано"}</h1>
                        <p className="text-gray-600">{data.email || "Email не указан"}</p>
                    </div>
                </div>

                {/* Информация профиля */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">Информация</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-500">Телефон:</p>
                            <p className="text-lg">{data.phone || "Не указан"}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Роль:</p>
                            <p className="text-lg">{data.role || "Не указана"}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Дата регистрации:</p>
                            <p className="text-lg">{data.registrationDate || "Не указана"}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Адрес:</p>
                            <p className="text-lg">{data.address || "Не указан"}</p>
                        </div>
                    </div>
                </div>

                {/* Кнопки действий */}
                <div className="mt-6 flex space-x-4">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => alert("Функция редактирования профиля")}
                    >
                        Редактировать профиль
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => alert("Функция выхода из системы")}
                    >
                        Выйти
                    </Button>
                </div>
            </div>
        </div>
    );
}