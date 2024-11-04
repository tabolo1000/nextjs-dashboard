import NavigateButton from "@/app/ui/math/components/Navigate_button";
import {Audio_button} from "@/app/ui/math/components/Audio_button";


export default function Place_values() {
    return <div className="mb-8">
        <Audio_button path={"/math/class_fifth/lesson_first/place_values/place_values_record"}/><h1 className="header_h1">Разряды и классы</h1>
        <p className="mb-4">
            <strong>Разряд</strong> — это позиция, которую занимает каждая цифра в числе. Разряды позволяют записывать
            большие числа, разделяя их на <strong>единицы</strong>, <strong>десятки</strong>, <strong>сотни</strong> и
            так далее.
        </p>
        <h3 className="text-xl font-semibold mb-2">Разряды:</h3>
        <p className="mb-4">
            В числе <strong>572</strong> цифра <strong>5</strong> находится в
            разряде <strong>сотен</strong>, <strong>7</strong> — в разряде <strong>десятков</strong>,
            а <strong>2</strong> — в разряде <strong>единиц</strong>:
        </p>
        <p className="italic mb-4">572 = (5 × 100) + (7 × 10) + (2 × 1)</p>
        <h3 className="text-xl font-semibold mb-2">Классы:</h3>
        <p className="mb-4">
            Числа можно разделить на <strong>классы</strong>, каждый из которых состоит из трёх разрядов. Например,
            число <strong>1 234 567</strong> состоит из двух классов:
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>Класс <strong>единиц</strong>: 567</li>
            <li>Класс <strong>тысяч</strong>: 234</li>
        </ul>

        <NavigateButton to = {{
            nextTask: "./single_and_Two_and_Multi_digit_numbers",
            nextExercise: "./natural_numbers/exercise",
        }}/>
    </div>
}