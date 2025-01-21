'use client'
import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function MicroCalculator() {

    return (
        <>
            {/* Микрокалькулятор */}
            <Section title="Микрокалькулятор" parity>
                <p className="paragraph_base">
                    <Highlight>Микрокалькулятор</Highlight> — это компактное устройство или приложение,
                    предназначенное для выполнения различных математических операций. Он помогает
                    быстро и точно выполнять сложение, вычитание, умножение, деление, а также более
                    сложные вычисления, такие как проценты, корни, степени и тригонометрические функции.
                </p>

                <h3 className="header_h3">Применение:</h3>
                <p className="paragraph_base">
                    Калькуляторы используются в повседневной жизни, на уроках математики, в бухгалтерии,
                    инженерных расчетах и многих других сферах. Однако важно помнить, что калькулятор — это
                    инструмент, а не замена вашего мышления. Его цель — ускорить и упростить вычисления,
                    но логика решения задач должна оставаться вашей.
                </p>

                <h3 className="header_h3">Пример вычислений:</h3>
                <ul className="unordered_list">
                    <li>
                        Чтобы найти <Highlight>25% от 200</Highlight>, введите:
                        <Highlight>200 × 0,25 = 50</Highlight>.
                    </li>
                    <li>
                        Для вычисления квадратного корня из <Highlight>81</Highlight>, используйте функцию
                        корня: <Highlight>√81 = 9</Highlight>.
                    </li>
                    <li>
                        Если требуется разделить <Highlight>72</Highlight> на <Highlight>8</Highlight>,
                        просто введите: <Highlight>72 ÷ 8 = 9</Highlight>.
                    </li>
                </ul>

                <h3 className="header_h3">Советы по использованию:</h3>
                <ul className="unordered_list">
                    <li>Проверьте, правильно ли введены числа и операции.</li>
                    <li>Используйте скобки для расчётов с несколькими действиями.</li>
                    <li>Не забывайте округлять результат, если требуется точность.</li>
                </ul>

                <p className="paragraph_base">
                    Использование калькулятора в повседневной жизни экономит время и снижает вероятность
                    ошибок при сложных вычислениях. Однако развивайте навыки устного счета — это улучшает
                    концентрацию и помогает лучше понимать числа.
                </p>
            </Section>
        </>
    );
}

export default MicroCalculator;




/*'use client'

import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
    Chat,
    Channel,
    ChannelHeader,
    MessageList,
    MessageInput,
    Thread,
    Window,
} from 'stream-chat-react';
//import '@stream-io/react-sdk/dist/css/index.css';

const serverClient = StreamChat.getInstance('9wgc2csfy6b5', 'dcuyxdzdps7as46rk53w9hsjv3cfvfnvufwhdfszqdynkq6v4avemmz7m7ayzwp5'); // Замените на ваши API ключи

export async function POST(req) {
    const { userId } = await req.json();

    if (!userId) {
        return new Response(JSON.stringify({ error: 'User ID is required' }), {
            status: 400,
        });
    }

    // Создаем токен для пользователя
    const token = serverClient.createToken(userId);

    // Опционально: Регистрируем пользователя на сервере Stream
    await serverClient.upsertUser({
        id: userId,
        name: `User ${userId}`,
    });

    return new Response(JSON.stringify({ token }), { status: 200 });
}



const API_URL = '/api/token'; // Путь к вашему API для токенов
const client = StreamChat.getInstance('1360182'); // Замените на ваш API Key

export default function ChatPage() {
    const [userId, setUserId] = useState('');
    const [channel, setChannel] = useState(null);
    const [isChatVisible, setIsChatVisible] = useState(true);

    const connectUser = async () => {
        if (!userId) return;

        // Запрос токена с API
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId }),
        });

        const { token } = await response.json();

        // Подключаем пользователя к Stream Chat
        await client.connectUser(
            {
                id: userId,
                name: `User ${userId}`,
            },
            token
        );

        // Создаем или подключаемся к каналу
        const channel = client.channel('messaging', 'general', {
            name: 'General Chat',
        });

        await channel.watch();
        setChannel(channel);
    };

    useEffect(() => {
        return () => {
            client.disconnectUser();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Stream Chat Example</h1>

            {!channel ? (
                <div className="w-full max-w-md p-4 bg-white shadow-md rounded-md">
                    <input
                        type="text"
                        placeholder="Введите ваш User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <button
                        onClick={connectUser}
                        className="w-full p-2 bg-blue-500 text-white rounded"
                    >
                        Войти в чат
                    </button>
                </div>
            ) : (
                <div className="fixed bottom-4 right-4">
                    {isChatVisible ? (
                        <div className="w-full max-w-md h-[500px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                            <div className="flex justify-between items-center p-2 bg-blue-500 text-white">
                                <h2 className="text-lg">General Chat</h2>
                                <button
                                    onClick={() => setIsChatVisible(false)}
                                    className="text-white"
                                >
                                    Свернуть
                                </button>
                            </div>
                            <Chat client={client} theme="messaging light">
                                <Channel channel={channel}>
                                    <Window>
                                        <ChannelHeader />
                                        <MessageList />
                                        <MessageInput />
                                    </Window>
                                    <Thread />
                                </Channel>
                            </Chat>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsChatVisible(true)}
                            className="p-2 bg-blue-500 text-white rounded"
                        >
                            Открыть чат
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}*/

/*import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Ваш бэкенд NestJS

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Слушаем сообщения от сервера
        socket.on('message', (data) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const sendMessage = () => {
        if (user && message) {
            socket.emit('message', { user, message });
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-4 bg-white shadow-md rounded-md">
                <h1 className="text-xl font-bold text-center mb-4">WebSocket Chat</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className="w-full p-2 mb-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Введите сообщение"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <button
                        onClick={sendMessage}
                        className="w-full mt-2 p-2 bg-blue-500 text-white rounded"
                    >
                        Отправить
                    </button>
                </div>
                <div className="h-64 overflow-y-scroll border rounded p-2">
                    {messages.map((msg, index) => (
                        <div key={index} className="mb-2">
                            <strong>{msg.user}: </strong>
                            {msg.message}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}*/








