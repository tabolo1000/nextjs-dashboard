import {Section} from "@/app/ui/math/components/Section";
import {Highlight} from "@/app/ui/math/components/Highlight";

export function ReproductionAndCommunities() {
    return (
        <>
            {/* Размножение организмов и сообщества */}
            <Section title="Размножение организмов и сообщества" parity>
                <h3 className="header_h3">§ 17. Размножение живых организмов. Бесполое размножение</h3>
                <p className="paragraph_base">
                    <Highlight>Бесполое размножение</Highlight> — это процесс, при котором новый организм возникает от одного родителя, без участия половых клеток. Примеры:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Деление клетки</Highlight>, характерное для бактерий и одноклеточных.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Почкование</Highlight>, как у гидры.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Вегетативное размножение</Highlight>, например, корневыми побегами у растений.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Интересный факт: клубни картофеля, которые мы употребляем в пищу, — это орган размножения растения.
                </p>

                <h3 className="header_h3">Практическая работа 2. Вегетативное размножение комнатных растений</h3>
                <p className="paragraph_base">
                    Для выполнения практической работы вам потребуется лист или побег комнатного растения:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        Срежьте лист растения, например, бегонии или фиалки.
                    </li>
                    <li className="unordered_list_li">
                        Поместите его во влажный субстрат или воду.
                    </li>
                    <li className="unordered_list_li">
                        Наблюдайте за появлением корней и ростом нового растения.
                    </li>
                </ul>

                <h3 className="header_h3">§ 18. Половое размножение организмов</h3>
                <p className="paragraph_base">
                    <Highlight>Половое размножение</Highlight> включает участие двух родителей, у которых формируются половые клетки — <Highlight>гаметы</Highlight>. Основные преимущества:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        Генетическое разнообразие потомства.
                    </li>
                    <li className="unordered_list_li">
                        Устойчивость к изменениям в окружающей среде.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Знаете ли вы, что у морских звёзд возможно как половое, так и бесполое размножение? Это помогает им выживать в суровых условиях.
                </p>

                <h3 className="header_h3">§ 19. Вид</h3>
                <p className="paragraph_base">
                    <Highlight>Вид</Highlight> — это совокупность организмов, обладающих схожими признаками, способных скрещиваться и давать плодовитое потомство. Например, все собаки относятся к виду <Highlight>Canis lupus familiaris</Highlight>.
                </p>
                <p className="paragraph_example">
                    На Земле существует около 8,7 миллионов видов, но каждый год открывают сотни новых.
                </p>

                <h3 className="header_h3">§ 20. Сообщества живых организмов</h3>
                <p className="paragraph_base">
                    <Highlight>Сообщества</Highlight> — это группы разных видов, обитающих в одном месте и взаимодействующих друг с другом. Примеры:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        Лесное сообщество: деревья, грибы, животные.
                    </li>
                    <li className="unordered_list_li">
                        Пресноводное сообщество: рыбы, водоросли, бактерии.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Интересный факт: коралловый риф — одно из самых разнообразных сообществ на Земле, где обитают тысячи видов.
                </p>
            </Section>
        </>
    );
}

export default ReproductionAndCommunities;
