"use client"

import Image from 'next/image';
import {Audio_button} from "@/app/ui/math/components/audio_player/Audio_button";
import NavigateButton from "@/app/ui/math/components/Navigate_button";
import {Base_form} from "@/app/ui/math/components/Base_form";
import {number} from "yup";

export const Hunter = ({
                           nextExercise,
                       }: Props) => {

    const validationSchema = {
        itemCount:
            number()
                .typeError('Количество предметов должно быть числом!')
                .required("Количество предметов обязательно!")
                .positive("Количество предметов должно быть положительным числом!")
                .integer("Количество предметов должно быть целым числом!")
    };

    return (
        <div className="main_block_task">
            <h1 className="header_h1">Задание 1: Охота за числами</h1>

            <p className="condition_task">
                Найдите предметы вокруг себя или используйте изображение, затем введите их количество:
            </p>

            <Image src="/table_for_hunter.jpeg" alt="table_of_hunter" width={400} height={400}/>

            <Base_form validate = {validationSchema} nextExercise = {nextExercise} />
            <Audio_button path={"/math/class_fifth/lesson_first/natural_numbers/hunter_1.1.1"}/>
            <NavigateButton to={{
                nextTask: "./",
                localNavigationSecondButton: nextExercise,
            }}
            />
        </div>
    );
}


interface Props {
    nextExercise: ()=> void
}