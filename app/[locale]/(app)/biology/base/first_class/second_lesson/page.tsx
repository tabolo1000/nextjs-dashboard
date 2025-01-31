import {Section} from "@/app/ui/math/components/Section";
import {Highlight} from "@/app/ui/math/components/Highlight";

export function CellStructureAndFunctions() {
    return (
        <>
            {/* Клеточное строение живых организмов */}
            <Section title="Клеточное строение живых организмов" parity>
                <h3 className="header_h3">§ 3. Клеточное строение живых организмов. Строение растительной клетки</h3>
                <p className="paragraph_base">
                    Все живые организмы состоят из клеток — мельчайших единиц жизни. Растительная клетка уникальна благодаря наличию <Highlight>клеточной стенки</Highlight>, <Highlight>вакуолей</Highlight>, и <Highlight>хлоропластов</Highlight>, которые позволяют осуществлять фотосинтез.
                </p>

                <h3 className="header_h3">Лабораторная работа 3: Строение клеток кожицы лука</h3>
                <p className="paragraph_base">
                    Изучение клеток кожицы лука под микроскопом позволяет увидеть их чёткую структуру: клеточную стенку, ядро и цитоплазму.
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">Аккуратно снимите тонкий слой кожицы с луковицы.</li>
                    <li className="unordered_list_li">Поместите его на предметное стекло, добавьте каплю воды и накройте покровным стеклом.</li>
                    <li className="unordered_list_li">Рассмотрите микропрепарат под микроскопом.</li>
                </ul>

                <h3 className="header_h3">Лабораторная работа 4: Строение клеток листа элодеи</h3>
                <p className="paragraph_base">
                    Лист элодеи под микроскопом позволяет наблюдать <Highlight>хлоропласты</Highlight> в движении, которые играют ключевую роль в фотосинтезе.
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">Срежьте тонкий лист элодеи.</li>
                    <li className="unordered_list_li">Приготовьте микропрепарат аналогично предыдущей работе.</li>
                    <li className="unordered_list_li">Рассмотрите под микроскопом движение цитоплазмы.</li>
                </ul>

                <h3 className="header_h3">§ 4. Строение животной клетки</h3>
                <p className="paragraph_base">
                    Животные клетки отличаются отсутствием клеточной стенки и хлоропластов, но имеют органеллы, такие как <Highlight>митохондрии</Highlight>, <Highlight>рибосомы</Highlight> и <Highlight>ядро</Highlight>, выполняющие важные функции.
                </p>

                <h3 className="header_h3">Лабораторная работа 5: Строение клеток крови лягушки</h3>
                <p className="paragraph_base">
                    Изучение клеток крови лягушки помогает увидеть <Highlight>эритроциты</Highlight> с ядром, что отличает их от клеток крови млекопитающих.
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">Возьмите готовый микропрепарат крови лягушки.</li>
                    <li className="unordered_list_li">Обратите внимание на форму и строение клеток.</li>
                </ul>

                <h3 className="header_h3">§ 5. Жизнедеятельность клеток</h3>
                <p className="paragraph_base">
                    Клетки обмениваются веществами с окружающей средой, делятся, растут и выполняют специфические функции благодаря органеллам, таким как митохондрии и рибосомы.
                </p>

                <h3 className="header_h3">§ 6. Размножение и рост клеток</h3>
                <p className="paragraph_base">
                    Размножение клеток осуществляется путём деления. Основные типы деления: <Highlight>митоз</Highlight>, обеспечивающий рост и восстановление тканей, и <Highlight>мейоз</Highlight>, приводящий к образованию половых клеток.
                </p>
            </Section>
        </>
    );
}

export default CellStructureAndFunctions;
