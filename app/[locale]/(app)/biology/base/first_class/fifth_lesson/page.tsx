import {Highlight} from "@/app/ui/math/components/Highlight";
import {Section} from "@/app/ui/math/components/Section";

export function Ecosystems() {
    return (
        <>
            {/* Экосистемы */}
            <Section title="Экосистемы" parity>
                <h3 className="header_h3">§ 21. Среда обитания. Экологические факторы. Экосистемы</h3>
                <p className="paragraph_base">
                    <Highlight>Экосистема</Highlight> — это совокупность живых организмов и их среды обитания, которые взаимодействуют друг с другом. Важные понятия:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Среда обитания</Highlight>: вода, воздух, почва или живой организм, где существует вид.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Экологические факторы</Highlight>: абиотические (свет, температура, влага) и биотические (влияние других организмов).
                    </li>
                </ul>
                <p className="paragraph_example">
                    Интересный факт: самая большая экосистема на Земле — это мировой океан, покрывающий более 70% поверхности планеты.
                </p>

                <h3 className="header_h3">§ 22. Пресноводная экосистема — озеро</h3>
                <p className="paragraph_base">
                    Пресноводные экосистемы, такие как озёра, уникальны своей структурой и биологическим разнообразием. Озеро делится на три основные зоны:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Прибрежная зона</Highlight>: водные растения, насекомые, мелкие рыбы.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Толща воды</Highlight>: планктон, рыбы.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Дно</Highlight>: бактерии, черви, донные организмы.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Пример: озеро Байкал — самое глубокое пресноводное озеро в мире, содержащее 20% всей пресной воды на планете.
                </p>

                <h3 className="header_h3">§ 23. Наземная экосистема — лес</h3>
                <p className="paragraph_base">
                    <Highlight>Лес</Highlight> — одна из самых сложных наземных экосистем, включающая деревья, кустарники, травы, грибы и животных. Структура леса:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Ярусы</Highlight>: верхний (деревья), средний (кустарники) и нижний (травы, мхи).
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Круговорот веществ</Highlight>: опад листьев, разложение органики.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Интересный факт: тропические леса, несмотря на небольшой процент площади, производят около 40% кислорода Земли.
                </p>

                <h3 className="header_h3">§ 24. Сезонные изменения экосистем. Весна. Лето</h3>
                <p className="paragraph_base">
                    Сезонные изменения — это циклические процессы, которые влияют на все экосистемы. Весной и летом:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Весной</Highlight>: пробуждение растений, начало размножения животных.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Летом</Highlight>: активный рост растений, наибольшая биологическая активность.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Пример: в лесах летом наблюдается максимальная продуктивность фотосинтеза.
                </p>

                <h3 className="header_h3">§ 25. Сезонные изменения экосистем. Осень. Зима</h3>
                <p className="paragraph_base">
                    Осенью и зимой экосистемы переживают периоды покоя и адаптации к низким температурам:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Осенью</Highlight>: листопад, подготовка растений и животных к зиме.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Зимой</Highlight>: минимальная активность, использование накопленных ресурсов.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Интересный факт: у некоторых животных, например, медведей, зимой замедляются обменные процессы — это состояние называют спячкой.
                </p>
            </Section>
        </>
    );
}

export default Ecosystems;
