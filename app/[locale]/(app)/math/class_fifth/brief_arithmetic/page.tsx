import {Section} from "@/app/ui/math/components/Section";
import {Highlight} from "@/app/ui/math/components/Highlight";


export default function brief_arithmetic(){
    return (
        <>
            <Section title="Арифметика — основа математики" parity>
                <p className="paragraph_base">
                    Арифметика занимается числами и основными операциями с ними. Вот ключевые элементы:
                </p>
                <h3 className="header_h3">1. Числа</h3>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Натуральные числа</Highlight>: 1, 2, 3, …
                    </li>
                    <li>
                        <Highlight>Целые числа</Highlight>: …, −2, −1, 0, 1, 2, …
                    </li>
                    <li>
                        <Highlight>Рациональные числа</Highlight>: числа вида <Highlight>𝑎/𝑏</Highlight>, где <Highlight>𝑎</Highlight> и <Highlight>𝑏</Highlight> — целые числа, <Highlight>𝑏 ≠ 0</Highlight>.
                    </li>
                    <li>
                        <Highlight>Иррациональные числа</Highlight>: числа, которые нельзя представить в виде дроби (например, <Highlight>√2</Highlight>, <Highlight>π</Highlight>).
                    </li>
                    <li>
                        <Highlight>Действительные числа</Highlight>: объединение рациональных и иррациональных.
                    </li>
                    <li>
                        <Highlight>Комплексные числа</Highlight>: числа вида <Highlight>𝑎 + 𝑏𝑖</Highlight>, где <Highlight>𝑖² = −1</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">2. Основные операции</h3>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Сложение</Highlight> (<Highlight>+</Highlight>): объединение величин.
                        Пример: <Highlight>2 + 3 = 5</Highlight>.
                    </li>
                    <li>
                        <Highlight>Вычитание</Highlight> (<Highlight>−</Highlight>): удаление одной величины из другой.
                        Пример: <Highlight>5 − 3 = 2</Highlight>.
                    </li>
                    <li>
                        <Highlight>Умножение</Highlight> (<Highlight>⋅</Highlight>): повторяющееся сложение.
                        Пример: <Highlight>3 ⋅ 4 = 12</Highlight>.
                    </li>
                    <li>
                        <Highlight>Деление</Highlight> (<Highlight>/</Highlight>): распределение на равные части.
                        Пример: <Highlight>12 / 4 = 3</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">3. Свойства операций</h3>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Коммутативность</Highlight>: <Highlight>𝑎 + 𝑏 = 𝑏 + 𝑎</Highlight>, <Highlight>𝑎 ⋅ 𝑏 = 𝑏 ⋅ 𝑎</Highlight>.
                    </li>
                    <li>
                        <Highlight>Ассоциативность</Highlight>: <Highlight>(𝑎 + 𝑏) + 𝑐 = 𝑎 + (𝑏 + 𝑐)</Highlight>, <Highlight>(𝑎 ⋅ 𝑏) ⋅ 𝑐 = 𝑎 ⋅ (𝑏 ⋅ 𝑐)</Highlight>.
                    </li>
                    <li>
                        <Highlight>Распределительность</Highlight>: <Highlight>𝑎 ⋅ (𝑏 + 𝑐) = 𝑎 ⋅ 𝑏 + 𝑎 ⋅ 𝑐</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">4. Возведение в степень</h3>
                <p className="paragraph_base">
                    <Highlight>𝑎ⁿ = 𝑎 ⋅ 𝑎 ⋅ … ⋅ 𝑎</Highlight> (𝑛 раз).
                    Пример: <Highlight>2³ = 2 ⋅ 2 ⋅ 2 = 8</Highlight>.
                </p>
                <h3 className="header_h3">5. Корень</h3>
                <p className="paragraph_base">
                    Обратная операция к возведению в степень.
                    Пример: <Highlight>√16 = 4</Highlight>, так как <Highlight>4² = 16</Highlight>.
                </p>
                <h3 className="header_h3">6. Модули</h3>
                <p className="paragraph_base">
                    <Highlight>Модуль числа</Highlight> (<Highlight>|𝑎|</Highlight>): расстояние от числа до нуля.
                    Пример: <Highlight>|−5| = 5</Highlight>.
                </p>
                <h3 className="header_h3">7. Отношения</h3>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Равенство</Highlight>: <Highlight>𝑎 = 𝑏</Highlight>.
                    </li>
                    <li>
                        <Highlight>Неравенство</Highlight>: <Highlight>{"𝑎 > 𝑏"}</Highlight>, <Highlight>{"𝑎 < 𝑏"} </Highlight>, <Highlight>𝑎 ≥ 𝑏</Highlight>, <Highlight>𝑎 ≤ 𝑏</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">8. Делимость</h3>
                <p className="paragraph_base">
                    <Highlight>𝑎</Highlight> делится на <Highlight>𝑏</Highlight>, если <Highlight>𝑎 = 𝑏 ⋅ 𝑘</Highlight>, где <Highlight>𝑘</Highlight> — целое число.
                    Пример: <Highlight>15</Highlight> делится на <Highlight>3</Highlight>, так как <Highlight>15 = 3 ⋅ 5</Highlight>.
                </p>
                <h3 className="header_h3">9. Остаток</h3>
                <p className="paragraph_base">
                    Результат деления, который &ldquo;не вмещается&ldquo;.
                    Пример: <Highlight>17 / 5 = 3</Highlight> (остаток <Highlight>2</Highlight>).
                </p>
            </Section>



            <Section title="Дополнительные концепции арифметики" parity>
                <h3 className="header_h3">10. Пропорции и дроби</h3>
                <p className="paragraph_base">
                    <Highlight>Пропорция</Highlight> — это равенство двух отношений:
                    <Highlight>𝑎 / 𝑏 = 𝑐 / 𝑑</Highlight>, где <Highlight>𝑏 ≠ 0</Highlight> и <Highlight>𝑑 ≠ 0</Highlight>.
                    Пример: <Highlight>2 / 3 = 4 / 6</Highlight>.
                </p>
                <h4 className="header_h4">Сложение дробей</h4>
                <p className="paragraph_base">
                    <Highlight>𝑎 / 𝑏 + 𝑐 / 𝑑 = (𝑎 ⋅ 𝑑 + 𝑏 ⋅ 𝑐) / (𝑏 ⋅ 𝑑)</Highlight>.
                    Пример: <Highlight>1 / 2 + 1 / 3 = 3 / 6 + 2 / 6 = 5 / 6</Highlight>.
                </p>
                <h4 className="header_h4">Умножение дробей</h4>
                <p className="paragraph_base">
                    <Highlight>𝑎 / 𝑏 ⋅ 𝑐 / 𝑑 = (𝑎 ⋅ 𝑐) / (𝑏 ⋅ 𝑑)</Highlight>.
                    Пример: <Highlight>2 / 3 ⋅ 4 / 5 = 8 / 15</Highlight>.
                </p>
                <h4 className="header_h4">Деление дробей</h4>
                <p className="paragraph_base">
                    <Highlight>𝑎 / 𝑏 ÷ 𝑐 / 𝑑 = 𝑎 / 𝑏 ⋅ 𝑑 / 𝑐</Highlight>.
                    Пример: <Highlight>2 / 3 ÷ 4 / 5 = 2 / 3 ⋅ 5 / 4 = 10 / 12 = 5 / 6</Highlight>.
                </p>

                <h3 className="header_h3">11. Остаток от деления (модульная арифметика)</h3>
                <p className="paragraph_base">
                    Остаток: <Highlight>𝑎 mod 𝑏</Highlight> — это остаток от деления <Highlight>𝑎</Highlight> на <Highlight>𝑏</Highlight>.
                    Пример: <Highlight>17 mod 5 = 2</Highlight>.
                    <br />
                    Модульная арифметика используется в циклических системах, например, при вычислении времени:
                    <Highlight>(23 + 5) mod 24 = 4</Highlight> (часы).
                </p>

                <h3 className="header_h3">12. Возведение в степень и логарифмы</h3>
                <h4 className="header_h4">Возведение в степень</h4>
                <p className="paragraph_base">
                    <Highlight>𝑎ⁿ = 𝑎 ⋅ 𝑎 ⋅ … ⋅ 𝑎</Highlight> (𝑛 раз).
                    Пример: <Highlight>2⁴ = 2 ⋅ 2 ⋅ 2 ⋅ 2 = 16</Highlight>.
                </p>
                <h4 className="header_h4">Свойства степеней</h4>
                <ul className="unordered_list">
                    <li><Highlight>𝑎ᵐ ⋅ 𝑎ⁿ = 𝑎ᵐ⁺ⁿ</Highlight></li>
                    <li><Highlight>𝑎ᵐ / 𝑎ⁿ = 𝑎ᵐ⁻ⁿ</Highlight></li>
                    <li><Highlight>(𝑎ᵐ)ⁿ = 𝑎ᵐ⋅ⁿ</Highlight></li>
                </ul>
                <h4 className="header_h4">Логарифмы</h4>
                <p className="paragraph_base">
                    <Highlight>logₐ(𝑏) = 𝑐</Highlight>, если <Highlight>𝑎ᶜ = 𝑏</Highlight>.
                    Пример: <Highlight>log₂(8) = 3</Highlight>, так как <Highlight>2³ = 8</Highlight>.
                </p>
                <h4 className="header_h4">Свойства логарифмов</h4>
                <ul className="unordered_list">
                    <li><Highlight>logₐ(𝑥 ⋅ 𝑦) = logₐ(𝑥) + logₐ(𝑦)</Highlight></li>
                    <li><Highlight>logₐ(𝑥 / 𝑦) = logₐ(𝑥) − logₐ(𝑦)</Highlight></li>
                    <li><Highlight>logₐ(𝑥ⁿ) = 𝑛 ⋅ logₐ(𝑥)</Highlight></li>
                </ul>

                <h3 className="header_h3">13. Среднее арифметическое</h3>
                <p className="paragraph_base">
                    Среднее арифметическое <Highlight>𝑛</Highlight> чисел:
                    <Highlight>Среднее = (𝑥₁ + 𝑥₂ + ⋯ + 𝑥ₙ) / 𝑛</Highlight>.
                    Пример: <Highlight>Среднее для 3, 5, 7 = (3 + 5 + 7) / 3 = 5</Highlight>.
                </p>

                <h3 className="header_h3">14. Факториал</h3>
                <p className="paragraph_base">
                    <Highlight>𝑛! = 𝑛 ⋅ (𝑛 − 1) ⋅ (𝑛 − 2) ⋅ … ⋅ 1</Highlight>, где <Highlight>0! = 1</Highlight>.
                    Пример: <Highlight>5! = 5 ⋅ 4 ⋅ 3 ⋅ 2 ⋅ 1 = 120</Highlight>.
                </p>
            </Section>


        </>
    )
}