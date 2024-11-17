import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import discouragement from "../img/discouragement.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function Discouragement() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Обескураженный
            </h1>

            {/* Этимология */}
            <Section title="Этимология">
                <p className="paragraph">
                    Слово <Highlight>обескураженный [dɪˈskɝː.ɪdʒ.mənt]</Highlight> происходит от французского слова{" "}
                    <Highlight>courage</Highlight>, что означает "мужество" или "храбрость". Приставка{" "}
                    <Highlight>обес-</Highlight> и суффикс <Highlight>-нный</Highlight> формируют слово,
                    которое указывает на результат действия, приводящего к утрате мужества или решимости.
                    Таким образом, <Highlight>обескураженный</Highlight> буквально означает "лишённый мужества"
                    или "лишённый уверенности".
                </p>
            </Section>
            <Interactive_Image src={discouragement} alt={"Обескураженный"} width={500} height={500}/>

            {/* Морфемный разбор */}
            <Section title="Морфемный разбор">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Обес-</Highlight> — приставка, указывающая на утрату или лишение чего-либо.
                    </li>
                    <li>
                        <Highlight>-кураж-</Highlight> — корень, связанный с понятием мужества, отваги.
                    </li>
                    <li>
                        <Highlight>-енн-</Highlight> — суффикс, образующий страдательное причастие.
                    </li>
                    <li>
                        <Highlight>-ый</Highlight> — окончание.
                    </li>
                </ul>
            </Section>

            {/* Значение */}
            <Section title="Значение">
                <p className="paragraph">
                    <Highlight>Обескураженный</Highlight> — это состояние человека, который оказался в
                    затруднительном положении и не знает, как действовать дальше. Это чувство растерянности,
                    когда человек теряет уверенность в своих силах, планах или действиях.
                </p>
            </Section>

            {/* Синонимы */}
            <Section title="Синонимы">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li><Highlight>Растерянный</Highlight></li>
                    <li><Highlight>Озадаченный</Highlight></li>
                    <li><Highlight>Потрясённый</Highlight></li>
                    <li><Highlight>Смятенный</Highlight></li>
                    <li><Highlight>Удручённый</Highlight></li>
                </ul>
            </Section>

            {/* Примеры использования */}
            <Section title="Примеры использования">
                <ul className="space-y-6">
                    <Base_card
                        title="В повседневной жизни"
                        description="Когда я увидел результаты экзаменов, я был абсолютно обескуражен — такого провала я не ожидал."
                        icon="📚"
                    />
                    <Base_card
                        title="В профессиональной сфере"
                        description="После внезапного увольнения сотрудники были обескуражены и не знали, как реагировать на новую ситуацию."
                        icon="💼"
                    />
                    <Base_card
                        title="В личных отношениях"
                        description="Она была обескуражена его внезапным решением закончить отношения без объяснений."
                        icon="💔"
                    />
                    <Base_card
                        title="В спорте"
                        description="Команда была обескуражена, когда пропустила гол в последние минуты матча."
                        icon="⚽"
                    />
                </ul>
            </Section>

            {/* Цитаты */}
            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Обескураженный человек — это тот, кто потерял ориентиры, но ещё не потерял возможности найти новые."
                        annotation="Цитата подчёркивает, что обескураженность — это временное состояние, и у человека всегда есть шанс найти новые решения."
                    />
                    <Quote_with_annotation
                        quote="Когда ты обескуражен, главное — не сдаваться, а искать новые пути."
                        annotation="Эта цитата напоминает о важности продолжать двигаться вперёд, даже если обстоятельства кажутся сложными."
                    />
                </div>
            </Section>

            {/* Причины обескураженности */}
            <Section title="Причины обескураженности">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li><Highlight>Неожиданные события</Highlight> — внезапные перемены или неожиданные новости могут вызвать обескураженность, когда человек не готов к изменениям.</li>
                    <li><Highlight>Неудачи и провалы</Highlight> — после серьёзных ошибок или неудач человек может потерять уверенность в своих способностях.</li>
                    <li><Highlight>Сложные решения</Highlight> — когда перед человеком стоит трудный выбор, он может чувствовать себя обескураженным из-за страха ошибиться.</li>
                    <li><Highlight>Отсутствие поддержки</Highlight> — недостаток поддержки со стороны близких или коллег может лишить человека уверенности в своих действиях.</li>
                </ul>
            </Section>

            {/* Как справиться с обескураженностью */}
            <Section title="Как справиться с обескураженностью">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li><Highlight>Принятие ситуации</Highlight> — важно признать, что обескураженность — это нормальная реакция на сложные обстоятельства.</li>
                    <li><Highlight>Планирование следующих шагов</Highlight> — даже когда ситуация кажется безвыходной, попытка разработать план действий может вернуть уверенность.</li>
                    <li><Highlight>Обратная связь</Highlight> — обращение за советом или поддержкой к другим людям может помочь выйти из состояния растерянности.</li>
                    <li><Highlight>Отдых и перезагрузка</Highlight> — иногда кратковременный отдых или отвлечение на другие задачи может помочь взглянуть на проблему с новой стороны.</li>
                </ul>
            </Section>
        </div>
    );
}