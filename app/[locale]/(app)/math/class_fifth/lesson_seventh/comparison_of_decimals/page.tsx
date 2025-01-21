import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Сomparison_of_decimals() {
    return (
        <>
            {/* Сравнение десятичных дробей */}
            <Section title="Сравнение десятичных дробей" parity>
                <p className="paragraph_base">
                    Чтобы сравнить две десятичные дроби, нужно сравнивать их цифры слева направо, начиная с целой части. Если целые части равны, сравниваются дробные части поочерёдно.
                </p>
                <h3 className="header_h3">Пример 1: Сравнение дробей с одинаковым количеством знаков</h3>
                <p className="paragraph_example">
                    Сравним <Highlight>0,4</Highlight> и <Highlight>0,35</Highlight>:
                </p>
                <ul className="unordered_list">
                    <li>
                        Целые части: у <Highlight>0,4</Highlight> целая часть равна <Highlight>0</Highlight>, и у <Highlight>0,35</Highlight> тоже равна <Highlight>0</Highlight>. Они равны.
                    </li>
                    <li>
                        Сравниваем дробные части: первая цифра после запятой у <Highlight>0,4</Highlight> — это <Highlight>4</Highlight>, а у <Highlight>0,35</Highlight> — это <Highlight>3</Highlight>.
                    </li>
                    <li>
                        Так как <Highlight>4 {" > "} 3</Highlight>, то <Highlight>0,4 {" > "} 0,35</Highlight>.
                    </li>
                </ul>

                <h3 className="header_h3">Пример 2: Дроби с разным количеством знаков</h3>
                <p className="paragraph_base">
                    Если десятичные дроби имеют разное количество знаков после запятой, можно дописать нули, чтобы уравнять длину дробной части, не изменяя значение. Например:
                </p>
                <p className="paragraph_example">
                    Сравним <Highlight>0,4</Highlight> и <Highlight>0,45</Highlight>:
                </p>
                <ul className="unordered_list">
                    <li>
                        Дописываем ноль к <Highlight>0,4</Highlight>, чтобы длина дробной части была одинаковой: <Highlight>0,40</Highlight>.
                    </li>
                    <li>
                        Теперь сравниваем: <Highlight>0,40 {" < "} 0,45</Highlight>, так как во второй дроби вторая цифра после запятой больше.
                    </li>
                </ul>

                <h3 className="header_h3">Пример 3: Сравнение отрицательных дробей</h3>
                <p className="paragraph_base">
                    При сравнении отрицательных дробей нужно помнить, что чем меньше абсолютное значение дроби, тем больше она по значению. Например:
                </p>
                <p className="paragraph_example">
                    Сравним <Highlight>-0,3</Highlight> и <Highlight>-0,25</Highlight>:
                </p>
                <ul className="unordered_list">
                    <li>
                        Абсолютные значения: <Highlight>|-0,3| = 0,3</Highlight> и <Highlight>|-0,25| = 0,25</Highlight>. Так как <Highlight>0,3 {" > "} 0,25</Highlight>, то <Highlight>-0,3 {" < "} -0,25</Highlight>.
                    </li>
                </ul>

                <h3 className="header_h3">Совет:</h3>
                <p className="paragraph_base">
                    Всегда проверяйте, чтобы дроби были записаны в одинаковом формате, и при необходимости дополняйте нулями. Это упрощает сравнение и исключает ошибки.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_seventh/addition_and_subtraction_of_decimals",
                nextExercise: "/math/class_fifth/lesson_seventh",
            }}/>
        </>
    );
}

export default Сomparison_of_decimals;
