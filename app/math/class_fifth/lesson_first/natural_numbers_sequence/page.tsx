import NavigateButton from "@/app/ui/math/components/Navigate_button";
import {Audio_button} from "@/app/ui/math/components/Audio_button";


export default function Natural_numbers_sequence () {
    return <div className="mb-8">
        <Audio_button path={"/math/class_fifth/lesson_first/natural_numbers_sequence/natural_numbers_sequence_record"}/><h1 className="header_h1">Натуральный ряд</h1>
        <p className="mb-2">
            <strong>Натуральный ряд</strong> — это последовательность всех натуральных чисел, начиная с единицы:
        </p>
        <p className="italic mb-4">1, 2, 3, 4, 5, 6, …</p>
        <p className="mb-4">Этот ряд называется <strong>бесконечным</strong>, так как каждое число в нём имеет своего
            последователя, который больше его на единицу.</p>
        <h3 className="text-xl font-semibold mb-2">Свойства натурального ряда:</h3>
        <ul className="list-disc list-inside mb-4">
            <li>Натуральный ряд начинается с числа <strong>1</strong>.</li>
            <li>Каждое следующее число в ряду больше предыдущего на <strong>1</strong>.</li>
            <li>Натуральный ряд не имеет конца — можно продолжать добавлять числа бесконечно.</li>
        </ul>
        <NavigateButton to = {{
            nextTask: "./zero",
            nextExercise: "./natural_numbers/exercise",
        }}/>
    </div>

}