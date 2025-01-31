'use client';

import { ChatBubbleOutline, Videocam, VideocamOff } from '@mui/icons-material';
import React, { useState, useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';

// Типизация для сообщений
interface Message {
    user: string;
    message: string;
}

// Типизация для сокета
let socket: Socket | null = null;

export default function Chat() {
    const [isOpen, setIsOpen] = useState<boolean>(false); // Состояние открытия/закрытия чата
    const [messages, setMessages] = useState<Message[]>([]); // Список сообщений
    const [user, setUser] = useState<string>(''); // Имя пользователя
    const [message, setMessage] = useState<string>(''); // Текст сообщения
    const [isVideoCallActive, setIsVideoCallActive] = useState<boolean>(false); // Состояние видеозвонка

    const localVideoRef = useRef<HTMLVideoElement>(null);
    const remoteVideoRef = useRef<HTMLVideoElement>(null);
    const peerConnectionRef = useRef<RTCPeerConnection | null>(null);

    useEffect(() => {
        socket = io('http://localhost:3001'); // Подключение к серверу

        // Слушаем входящие сообщения
        socket.on('message', (data: Message) => {
            setMessages((prev) => [...prev, data]);
        });

        // Слушаем сигналы WebRTC
        socket.on('webrtc-offer', async (offer: RTCSessionDescriptionInit) => {
            if (!peerConnectionRef.current) createPeerConnection();

            await peerConnectionRef.current?.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await peerConnectionRef.current?.createAnswer();
            await peerConnectionRef.current?.setLocalDescription(answer);
            socket?.emit('webrtc-answer', answer);
        });

        socket.on('webrtc-answer', async (answer: RTCSessionDescriptionInit) => {
            await peerConnectionRef.current?.setRemoteDescription(new RTCSessionDescription(answer));
        });

        socket.on('webrtc-candidate', async (candidate: RTCIceCandidateInit) => {
            await peerConnectionRef.current?.addIceCandidate(new RTCIceCandidate(candidate));
        });

        return () => {
            socket?.disconnect();
        };
    }, []);

    // Функция для отправки сообщения
    const sendMessage = () => {
        if (user.trim() && message.trim()) {
            socket?.emit('message', { user, message });
            setMessages((prev) => [...prev, { user, message }]); // Добавляем сообщение локально
            setMessage(''); // Очищаем поле ввода
        }
    };

    // Включение видеозвонка
    const startVideoCall = async () => {
        setIsVideoCallActive(true);

        const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) localVideoRef.current.srcObject = localStream;

        const peerConnection = createPeerConnection();
        peerConnectionRef.current = peerConnection;

        localStream.getTracks().forEach((track) => peerConnection.addTrack(track, localStream));

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        socket?.emit('webrtc-offer', offer);
    };

    // Завершение видеозвонка
    const stopVideoCall = () => {
        setIsVideoCallActive(false);

        peerConnectionRef.current?.close();
        peerConnectionRef.current = null;

        if (localVideoRef.current) localVideoRef.current.srcObject = null;
        if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
    };

    // Создание PeerConnection
    const createPeerConnection = (): RTCPeerConnection => {
        const peerConnection = new RTCPeerConnection({
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302', // STUN-сервер для обхода NAT
                },
            ],
        });

        peerConnection.ontrack = (event) => {
            if (remoteVideoRef.current) remoteVideoRef.current.srcObject = event.streams[0];
        };

        peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                socket?.emit('webrtc-candidate', event.candidate);
            }
        };

        return peerConnection;
    };

    return (
        <div className="fixed z-50 bottom-20 right-4">
            {/* Иконка открытия */}
            {!isOpen && (
                <motion.button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                >
                    <ChatBubbleOutline fontSize="large" />
                </motion.button>
            )}

            {/* Развёрнутый чат */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="w-96 max-w-full h-[600px] bg-white shadow-lg rounded-lg flex flex-col"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Заголовок */}
                        <div className="bg-blue-500 text-white p-4 rounded-t-lg flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Chat Room</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Видеозвонок */}
                        <div className="relative bg-black h-48 flex items-center justify-center">
                            {isVideoCallActive ? (
                                <>
                                    <video ref={localVideoRef} autoPlay muted playsInline className="absolute top-2 left-2 w-24 h-24 rounded-lg border border-gray-300" />
                                    <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover" />
                                </>
                            ) : (
                                <p className="text-gray-500">Video call is not active</p>
                            )}
                            <div className="absolute bottom-2 right-2">
                                {isVideoCallActive ? (
                                    <button
                                        onClick={stopVideoCall}
                                        className="bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-all"
                                    >
                                        <VideocamOff />
                                    </button>
                                ) : (
                                    <button
                                        onClick={startVideoCall}
                                        className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-all"
                                    >
                                        <Videocam />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Список сообщений */}
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                            {messages.length > 0 ? (
                                messages.map((msg, index) => (
                                    <div key={index} className="mb-4">
                                        <p className="text-sm text-gray-500 font-medium">{msg.user}:</p>
                                        <p className="p-2 rounded-lg bg-gray-100 text-gray-800">{msg.message}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center mt-4">No messages yet. Start the conversation!</p>
                            )}
                        </div>

                        {/* Поле ввода */}
                        <div className="p-4 border-t bg-gray-100">
                            {!user ? (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (user.trim()) return;
                                    }}
                                    className="flex items-center"
                                >
                                    <input
                                        type="text"
                                        placeholder="Enter your name..."
                                        value={user}
                                        onChange={(e) => setUser(e.target.value)}
                                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <button
                                        type="submit"
                                        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                                    >
                                        Join
                                    </button>
                                </form>
                            ) : (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        sendMessage();
                                    }}
                                    className="flex items-center"
                                >
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 transition-all"
                                    >
                                        Send
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}