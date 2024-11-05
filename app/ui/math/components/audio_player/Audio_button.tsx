"use client"

import {Slider} from "@mui/material";
import {useAudioPlayer} from "@/app/ui/math/components/audio_player/useAudioPlayer";
import {formatTime} from "@/app/lib/utils";


export const Audio_button = ({path}: Props)=> {
    const {
        audioRef,
        duration,
        position,
        isPlaying,
        handleSliderChange,
        handleAudioReplay,
        } = useAudioPlayer()


    return <div
        className="w-full flex justify-center items-center h-20"
    >
        <button
            onClick={handleAudioReplay}
        >
            <div
                className="relative w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg flex items-center justify-center  mr-3">
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
        <div
            className="w-full relative "
        >
            <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(e) => handleSliderChange(e as unknown as Event, Number(e.target?.value))}
                className="w-full h-1 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div
                className="absolute"
            >{formatTime(Math.floor(position))}
            </div>
            <div
                className="absolute right-0"
            >{formatTime(Math.floor(duration ))}
            </div>
        </div>
    </div>;


}


//------------------Types-----------------------------------

interface Props {
    path: string,
}