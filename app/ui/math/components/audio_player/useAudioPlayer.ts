import {useEffect, useRef, useState} from "react";


export const useAudioPlayer = () => {
    //const {} = useAudioPlayer()

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false); // Управление состоянием воспроизведения аудио
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState<number>(0);


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


    const handleAudioReplay = () => {
        if(isPlaying) {
            setIsPlaying(false);
            audioRef.current?.pause(); // Запустить аудио снова
            return
        }
        if (audioRef.current) {
            //audioRef.current.currentTime = 0; // Перемотать аудио на начало
            audioRef.current.play(); // Запустить аудио снова
            setIsPlaying(true); // Установить состояние "воспроизведение"\
            return
        }
    };
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (audioRef.current) {
            const newPosition = newValue as number;
            audioRef.current.currentTime = newPosition;
            setPosition(newPosition);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            // Обновляем продолжительность аудио
            audioRef.current.addEventListener("loadedmetadata", () => {
                setDuration(audioRef.current?.duration || 0);
            });

            // Обновляем позицию слайдера во время воспроизведения
            audioRef.current.addEventListener("timeupdate", () => {
                setPosition(audioRef.current?.currentTime || 0);
            });
        }
    }, []);

    return {handleAudioReplay, audioRef, isPlaying, position, handleSliderChange, duration}
}

