"use client"

import {Hunter} from "@/app/ui/math/classFiveth/Natural_numbers/сonclusion_natural_numbers/Hunter";
import {useState} from "react";



export default function Natural_numbers() {
    let [lesson, setNameLesson] = useState<Natural_numbers_exercise>("hunter");
    return (
        <div>
            {(lesson === "hunter")? <Hunter/> : "" }
        </div>
    );
}



type Natural_numbers_exercise = "hunter"