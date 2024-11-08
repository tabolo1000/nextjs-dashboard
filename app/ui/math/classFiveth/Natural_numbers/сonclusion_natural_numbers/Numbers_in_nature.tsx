"use client"

/*import { useState } from 'react';
import Link from 'next/link';*/

import {number} from "yup";
import {Base_form} from "@/app/ui/math/components/Base_form";
import {Audio_button} from "@/app/ui/math/components/audio_player/Audio_button";
import NavigateButton from "@/app/ui/math/components/Navigate_button";

export default function Numbers_in_nature({nextExercise} : Props) {
    /*const [objects, setObjects] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');*/


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
            <h1 className="header_h1">Задание 3: Натуральные числа в природе</h1>
            <p className={"condition_task"}>Введите название объекта (например, деревья) и количество:</p>


            <Base_form validate = {validationSchema} nextExercise = {nextExercise} />
            <Audio_button path={"/math/class_fifth/lesson_first/natural_numbers/hunter_1.1.1"}/>
            <NavigateButton to={{
                nextTask: "./",
                localNavigationSecondButton: nextExercise,
            }}/>
            {/*<form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    value={objects}
                    onChange={(e) => setObjects(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="Название объекта"
                />
                <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="Количество"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Подтвердить
                </button>
            </form>*/}

          {/*  {message && <p className="mt-4">{message}</p>}*/}

           {/* <Link href="/" className="mt-4 block text-blue-500 underline">
                Вернуться на главную
            </Link>*/}
        </div>
    );
}

interface Props {
    nextExercise: ()=> void
}