import NavigateButton from "@/app/ui/math/components/Navigate_button";


export default function Single_and_Two_and_Multi_digit_numbers() {
    return <div>
        <section className="mb-8">
            <h1 className="header_h1">Однозначные и двузначные числа</h1>
            <p className="mb-4">
                <strong>Однозначные числа</strong> — это числа, состоящие из одной цифры:
            </p>
            <p className="italic mb-4">1, 2, 3, …, 9</p>
            <p className="mb-4">Эти числа занимают <strong>один разряд</strong> и являются самыми простыми числами.</p>
            <p className="mb-4">
                <strong>Двузначные числа</strong> — это числа, состоящие из двух цифр:
            </p>
            <p className="italic mb-4">10, 11, 12, …, 99</p>
            <p className="mb-4">Эти числа занимают <strong>два разряда</strong>: разряд <strong>десятков</strong> и
                разряд <strong>единиц</strong>.</p>
            <p className="font-semibold mb-2">Пример:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Цифра <strong>4</strong> занимает разряд десятков,</li>
                <li>Цифра <strong>7</strong> — разряд единиц.</li>
            </ul>
        </section>
        <section className="mb-8">
            <h2 className="header_h1">Многозначные числа</h2>
            <p className="mb-4">
                <strong>Многозначные числа</strong> — это числа, состоящие из <strong>трёх или более цифр</strong>. Они
                занимают несколько разрядов и могут быть очень большими.
            </p>
            <h3 className="text-xl font-semibold mb-2">Примеры многозначных чисел:</h3>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Трёхзначное число</strong>: 345 (состоит из сотен, десятков и единиц).</li>
                <li><strong>Четырёхзначное число</strong>: 1 234 (состоит из тысяч, сотен, десятков и единиц).</li>
                <li><strong>Пятизначное число</strong>: 12 345 (десятки тысяч, тысячи, сотни, десятки, единицы).</li>
            </ul>
            <p className="mb-4">
                Такие числа могут быть разделены на <strong>классы</strong>. Они позволяют записывать любые величины, от
                небольших до крайне больших.
            </p>
            <p className="font-semibold mb-2">Пример:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Класс единиц: 456,</li>
                <li>Класс тысяч: 123.</li>
            </ul>
        </section>
        <NavigateButton to = {"./conclusion_natural_numbers"}/>
    </div>
}