"use client"

import {useEffect, useRef, useState} from "react";


export const Audio_button = ({path}: Props)=> {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false); // Управление состоянием воспроизведения аудио

    useEffect(() => {
        // Автоматический запуск через 1 секунду
        const timer = setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.play();
                setIsPlaying(true); // Аудио играет
            }
        }, 1000);

        return () => clearTimeout(timer); // Очищаем таймер при размонтировании компонента
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('ended', () => {
                setIsPlaying(false); // Аудио завершилось
            });
        }
    }, []);

    const handleAudioReplay = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Перемотать аудио на начало
            audioRef.current.play(); // Запустить аудио снова
            setIsPlaying(true); // Установить состояние "воспроизведение"
        }
    };

    return <button
        onClick={handleAudioReplay}
    >
        <div
            className="relative w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg flex items-center justify-center translate-y-1/3 mr-3">
            <audio ref={audioRef} className="hidden">
                <source src={`/audio/${path}.mp3`} type="audio/mp3"/>
                Ваш браузер не поддерживает аудио.
            </audio>

            {/* Анимация: треугольник с кастомной анимацией */}
            <div className="absolute w-4 h-4 flex items-center justify-center">
                <div
                    className={`w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-purple-200 ${
                        isPlaying ? 'animate-custom-bounce' : ''
                    }`}
                ></div>
            </div>
        </div>
    </button>
}


//------------------Types-----------------------------------

interface Props {
    path: string,
}