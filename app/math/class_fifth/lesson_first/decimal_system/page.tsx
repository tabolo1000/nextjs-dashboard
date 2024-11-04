import NavigateButton from "@/app/ui/math/components/Navigate_button";
import {Audio_button} from "@/app/ui/math/components/Audio_button";


export default function DecimalSystem () {
    return <div className="mb-8">
        <Audio_button path={"/math/class_fifth/lesson_first/decimal_system/decimal_system_record"}/><h1 className="header_h1">Десятичная система счисления</h1>
        <p className="mb-2">
            <strong>Десятичная система счисления</strong> — это основная система, которую мы используем для записи
            чисел.
            В этой системе используется <strong>10 цифр</strong>:
        </p>
        <p className="italic mb-4">0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p>
        <p className="mb-4">Каждая цифра в числе имеет определённое <strong>разрядное значение</strong>, которое зависит
            от её положения внутри числа.</p>
        <h3 className="text-xl font-semibold mb-2">Основные понятия:</h3>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Цифры</strong> — это символы, с помощью которых записываются числа.</li>
            <li>Десятичная система является <strong>позиционной</strong>, то есть значение цифры зависит от её позиции
                (разряда).
            </li>
        </ul>
        <p className="font-semibold mb-2">Пример:</p>
        <p className="mb-4">
            В числе <strong>345</strong>, цифра <strong>3</strong> занимает разряд сотен, <strong>4</strong> — разряд
            десятков, а <strong>5</strong> — разряд единиц, то есть:
        </p>
        <p className="italic mb-4">345 = (3 × 100) + (4 × 10) + (5 × 1)</p>
        <NavigateButton to = {{
            nextTask: "./natural_numbers_sequence",
            nextExercise: "./natural_numbers/exercise",
        }}/>
    </div>
}
//<NavigateButton setTopic = {setTopic} />

