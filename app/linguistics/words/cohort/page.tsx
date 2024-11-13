import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Section} from "@/app/ui/math/components/Section";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Highlight} from "@/app/ui/math/components/Highlight";

export default function Cohort() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Этимология слова "Когорта"
            </h1>

            <Section title="Этимология">
                <p className="paragraph">
                    Слово <Highlight>когорта</Highlight> происходит от латинского <i>cohors</i>, что означало <strong>отряд</strong> или <strong>группа</strong>. В Древнем Риме когорта была военной единицей, входившей в состав легиона. Латинское слово <i>cohors</i> также имело более широкое значение, обозначая любую организованную группу людей.
                </p>
            </Section>

            <Section title="Морфемный разбор" parity>
                <ul className="unordered_list">
                    <li>
                        <strong>Корень "когорт"</strong> — обозначает отряд, группу.
                    </li>
                    <li>
                        <strong>Окончание "-а"</strong> — типично для существительных женского рода.
                    </li>
                </ul>
            </Section>

            <Section title="Исторический контекст" parity>
                <p className="paragraph">
                    В Древнем Риме <Highlight>когорта</Highlight> была основной тактической единицей в составе легиона, состоявшей из нескольких сотен воинов. Она имела важное значение на поле боя благодаря своей организованности и дисциплине. Римские когорты славились своей боеспособностью и эффективностью в тактических манёврах. В военной структуре Римской империи когорта представляла собой промежуточное звено между манипулой и легионом.
                </p>
                <p className="paragraph">
                    Со временем слово <Highlight>когорта</Highlight> стало использоваться не только в военном контексте, но и для обозначения любой группы людей, объединённых общей целью или задачей. В современном языке когорта может обозначать как профессиональную группу, так и социальное или научное сообщество.
                </p>
            </Section>

            <Section title="Современное значение">
                <p className="paragraph">
                    В настоящее время слово <Highlight>когорта</Highlight> используется для обозначения группы людей, связанных общими интересами, целями или характеристиками. Это может быть группа учёных, спортсменов, политиков, студентов или представителей других профессий, которые работают вместе или объединены каким-либо общим делом.
                </p>
            </Section>

            <Section title="Интересный факт" parity>
                <p className="paragraph">
                    В социологии и демографии термин <Highlight>когорта</Highlight> имеет более специфическое значение и используется для обозначения группы людей, родившихся в один и тот же период времени, например, когорта 1990 года рождения. Это позволяет изучать поведение, социальные предпочтения и другие характеристики определённых возрастных групп в течение их жизни.
                </p>
            </Section>

            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Когорта — это не просто группа людей, это сила, объединённая общей целью."
                        annotation="Цитата подчёркивает, что когорта действует как единое целое, когда её члены объединены общей идеей или стремлением."
                    />
                    <Quote_with_annotation
                        quote="Когда когорта объединяется ради общего блага, она превращается в мощную силу перемен."
                        annotation="Здесь говорится о том, что группа людей, работающих на благо общества, может инициировать большие изменения."
                    />
                    <Quote_with_annotation
                        quote="Когорта — это больше, чем просто сообщество. Это команда, движимая одной целью."
                        annotation="Эта цитата подчёркивает важность коллективной работы и единства внутри группы."
                    />
                    <Quote_with_annotation
                        quote="Когорта может состоять из разных людей, но её успех зависит от их способности действовать вместе."
                        annotation="Указывается на то, что разнородная группа может быть успешной только при наличии слаженности и совместных усилий."
                    />
                    <Quote_with_annotation
                        quote="Великие достижения всегда начинаются с небольшой когорты смелых и решительных людей."
                        annotation="Цитата подчёркивает, что большие изменения часто инициируются небольшой группой единомышленников."
                    />
                </div>
            </Section>

            <Section title="Примеры использования слова 'когорта'">
                <ul className="space-y-6">
                    <Base_card
                        title="Научные исследования"
                        description="Когорта учёных собралась для обсуждения новых открытий — учёные объединились для обсуждения результатов своих исследований."
                        icon="🔬"
                    />
                    <Base_card
                        title="Исторический контекст"
                        description="В древности когорты римских солдат были известны своей дисциплиной — римские когорты славились военной выучкой и организованностью."
                        icon="⚔️"
                    />
                    <Base_card
                        title="Политическая активность"
                        description="Когорта сторонников реформ организовала протесты — группа людей, поддерживающих реформы, выступила с протестами."
                        icon="📢"
                    />
                    <Base_card
                        title="Образование"
                        description="Когорта студентов защитила свои проекты на конференции — студенты выступили с защитой проектов как единая группа."
                        icon="🎓"
                    />
                    <Base_card
                        title="Медицина"
                        description="Когорта врачей работала над разработкой вакцины — группа врачей совместно трудилась над созданием вакцины."
                        icon="💉"
                    />
                    <Base_card
                        title="Спорт"
                        description="В эту когорту входили лучшие спортсмены страны — группа состояла из самых успешных спортсменов."
                        icon="🏅"
                    />
                    <Base_card
                        title="Литература"
                        description="Когорта писателей выступила с общим заявлением — писатели объединились, чтобы выразить свою позицию."
                        icon="📚"
                    />
                    <Base_card
                        title="Технологии"
                        description="Когорта программистов создала новый стартап — группа программистов работала над созданием новой компании."
                        icon="💻"
                    />
                    <Base_card
                        title="Экология"
                        description="Когорта защитников природы борется за сохранение лесов — экологические активисты объединились для защиты лесов."
                        icon="🌲"
                    />
                    <Base_card
                        title="Юриспруденция"
                        description="Когорта юристов помогла заключить важное соглашение — группа юристов работала над заключением юридически важного договора."
                        icon="⚖️"
                    />
                </ul>
            </Section>

            <Audio_Navigate
                path={"/words/cohorta/cohorta.record"}
                to={{
                    nextTask: "./censure",
                    nextExercise: "",
                }}
            />
        </div>
    );
}