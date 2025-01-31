import {Highlight} from "@/app/ui/math/components/Highlight";
import {Section} from "@/app/ui/math/components/Section";

export function HumanAndNature() {
    return (
        <>
            {/* Человек и его роль в природе */}
            <Section title="Человек и его роль в природе" parity>
                <h3 className="header_h3">§ 26. Человек — часть природы</h3>
                <p className="paragraph_base">
                    <Highlight>Человек</Highlight> — это биосоциальное существо, которое является неотъемлемой частью природы. Мы зависим от окружающей среды, а природа обеспечивает нас всем необходимым для жизни: воздухом, водой, пищей и материалами. Основные аспекты взаимосвязи человека с природой:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Биологическое единство</Highlight>: человек, как и другие организмы, состоит из клеток, дышит кислородом и использует энергию, полученную из пищи.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Социальное влияние</Highlight>: использование природы для создания технологий и культуры.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Пример: в течение тысячелетий люди использовали растения для питания, лечения и строительства, сохраняя биологическую связь с природой.
                </p>

                <h3 className="header_h3">§ 27. Роль человека в природе</h3>
                <p className="paragraph_base">
                    Человек оказывает значительное воздействие на природу, которое может быть как положительным, так и отрицательным. Основные аспекты роли человека:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Созидательное воздействие</Highlight>: создание заповедников, восстановление утраченных экосистем.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Разрушительное воздействие</Highlight>: вырубка лесов, загрязнение атмосферы и вод.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Технологическое развитие</Highlight>: создание новых методов для рационального использования природных ресурсов.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Интересный факт: благодаря усилиям человека популяции исчезающих видов, таких как зубры и амурские тигры, были частично восстановлены.
                </p>

                <h3 className="header_h3">§ 28. Охрана живой природы</h3>
                <p className="paragraph_base">
                    <Highlight>Охрана природы</Highlight> — это система мер, направленных на сохранение биоразнообразия и предотвращение разрушения экосистем. Основные направления охраны природы:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Создание природоохранных зон</Highlight>: заповедников, национальных парков.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Восстановление природных ресурсов</Highlight>: лесов, водоёмов.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Экологическое образование</Highlight>: повышение осведомлённости о значении природы.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Пример: крупнейший заповедник в России — Великий Арктический заповедник — создан для сохранения уникальной природы Арктики.
                </p>
            </Section>
        </>
    );
}

export default HumanAndNature;
