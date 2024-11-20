"use client"


import {Audio_button} from "@/app/ui/math/components/audio_player/Audio_button";
import NavigateButton from "@/app/ui/math/components/Navigate_button";

export const Audio_Navigate = ({
                                path, to
                            }: Audio_Navigate_Props) => {
    return (
        <>
            <Audio_button path={path}/>
            <NavigateButton to = {to}/>
        </>
    )
}

interface Audio_Navigate_Props {
    path: string,
    to: {
        nextTask: string,
        nextExercise: string,
    }
}