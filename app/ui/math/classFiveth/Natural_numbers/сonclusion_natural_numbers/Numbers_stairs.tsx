"use client"

import {Base_form} from "@/app/ui/math/components/Base_form";
import NavigateButton from "@/app/ui/math/components/Navigate_button";
import {Audio_button} from "@/app/ui/math/components/audio_player/Audio_button";
import {number} from "yup";

export function Number_stairs({
                                  nextExercise,
                              }: Props) {


    const validationSchema = {
        itemCount:
            number()
                .typeError('Количество предметов должно быть числом!')
                .required("Количество предметов обязательно!")
                .positive("Количество предметов должно быть положительным числом!")
                .integer("Количество предметов должно быть целым числом!")
                .min(2, "Ваше число слишком маленькое!")
                .max(2, "Ваше число слишком большое!")
    };

    return (
        <div className="main_block_task">
            <h1 className="header_h1">Задание 2: Числовая лестница</h1>
            <p className="condition_task">Заполните пропущенное число в последовательности: 2, __ , 6, 8</p>

            <Base_form validate={validationSchema}/>
            <Audio_button path="/math/class_fifth/lesson_first/natural_numbers/numbers_stairs_1.1.1"/>
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