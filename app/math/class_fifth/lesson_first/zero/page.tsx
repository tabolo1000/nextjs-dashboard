import NavigateButton from "@/app/ui/math/components/Navigate_button";


export default function Zero() {
    return <div className="mb-8">
        <h1 className="header_h1">Нуль</h1>
        <p className="mb-4">
            <strong>Нуль</strong> (0) — это число, которое обозначает отсутствие какого-либо количества или предметов.
            В натуральный ряд нуль не входит, но он играет важную роль в десятичной системе счисления, так как
            используется для обозначения пустого разряда.
        </p>
        <h3 className="text-xl font-semibold mb-2">Свойства нуля:</h3>
        <ul className="list-disc list-inside mb-4">
            <li>Нуль указывает на <strong>отсутствие</strong> объектов или величин.</li>
            <li>В десятичной системе нуль используется для обозначения <strong>пустых разрядов</strong>.</li>
        </ul>
        <p className="font-semibold mb-2">Пример:</p>
        <p className="mb-4">В числе <strong>502</strong>, ноль обозначает, что в разряде десятков нет числового
            значения.</p>
        <NavigateButton to = {"./place_values"}/>
    </div>
}