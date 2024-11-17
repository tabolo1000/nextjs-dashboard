"use client"

import {Hunter} from "@/app/ui/math/classFiveth/Natural_numbers/сonclusion_natural_numbers/Hunter";
import {useState} from "react";
import {Number_stairs} from "@/app/ui/math/classFiveth/Natural_numbers/сonclusion_natural_numbers/Numbers_stairs";
import Numbers_in_nature from "@/app/ui/math/classFiveth/Natural_numbers/сonclusion_natural_numbers/Numbers_in_nature";



export default function Natural_numbers() {
    const [lesson, setExercise] = useState<Natural_numbers_exercise>("hunter");

    const handlerExercise = (exercise: Natural_numbers_exercise) => {
        setExercise(exercise)
    }

    switch(lesson) {
        case "hunter":
            return <Hunter nextExercise={ () => handlerExercise("number_stairs")}/>
        case "number_stairs":
            return <Number_stairs nextExercise={ () => handlerExercise("numbers_in_nature")} />
        case "numbers_in_nature":
            return <Numbers_in_nature nextExercise={ () => handlerExercise("hunter")} />

        default: new Error("Not one assignment is the same as the one requested!")
    }
}



export type Natural_numbers_exercise = "hunter" | "number_stairs" | "numbers_in_nature"