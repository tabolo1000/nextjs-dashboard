import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import egocentrismImage from "./../img/egocentrism.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Egocentrism() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Эгоцентризм</h1>

            <Section title="Этимология слова 'эгоцентризм'">
                <p className="paragraph">
                    <Highlight>Происхождение:</Highlight> Слово <Highlight>эгоцентризм</Highlight> происходит от латинских слов:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>"ego"</Highlight> — я, самость.</li>
                    <li><Highlight>"centrum"</Highlight> — центр.</li>
                </ul>
                <p className="paragraph">
                    Таким образом, <Highlight>эгоцентризм</Highlight> буквально означает "помещение себя в центр". Это отражает главную идею этого понятия — склонность человека воспринимать всё, что происходит вокруг, через призму своих собственных интересов, взглядов и потребностей.
                </p>
            </Section>

            <Interactive_Image src={egocentrismImage} alt={"Эгоцентризм"} width={500} height={500} />

            <Section title="Определение">
                <p className="paragraph">
                    <Highlight>Эгоцентризм</Highlight> — это психологический термин, обозначающий тенденцию человека рассматривать себя в качестве центральной фигуры окружающего мира, неспособность или нежелание учитывать точку зрения других людей. Эгоцентрик склонен видеть действия и события в первую очередь с позиции того, как они влияют на него самого, и может не осознавать, что другие люди могут иметь отличные от его собственных мысли, чувства и нужды.
                </p>
                <p className="paragraph">
                    Эгоцентризм часто связан с чрезмерной сосредоточенностью на своих потребностях и желаниях, что может приводить к недостаточному пониманию или уважению к мыслям и чувствам окружающих.
                </p>
            </Section>

            <Section title="Психологический аспект">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Детское развитие</Highlight>: В раннем детстве дети, естественно, склонны к эгоцентризму. Они ещё не способны полностью осознавать, что другие люди могут иметь свои собственные мысли и чувства, отличные от их собственных. Знаменитый швейцарский психолог Жан Пиаже описывал эгоцентризм как нормальный этап когнитивного развития. По мере взросления дети начинают понимать точку зрения других людей и учатся учитывать её в своих действиях.
                    </li>
                    <li>
                        <Highlight>Взрослый эгоцентризм</Highlight>: Хотя эгоцентризм часто считается характерной чертой детства, некоторые взрослые могут сохранять эгоцентрические черты на протяжении жизни. Это может проявляться в неспособности или нежелании понять перспективу других, что затрудняет построение здоровых межличностных отношений.
                    </li>
                    <li>
                        <Highlight>Когнитивный эгоцентризм</Highlight>: Это неспособность или трудность в принятии точки зрения другого человека в познавательных процессах. Например, человек может считать, что все люди думают так же, как он, или что его мнение является единственно правильным.
                    </li>
                    <li>
                        <Highlight>Эмоциональный эгоцентризм</Highlight>: Это склонность сосредотачиваться на своих собственных эмоциях, не учитывая чувства и эмоциональные переживания других людей. Эмоциональный эгоцентрик может ожидать, что окружающие всегда будут реагировать на его переживания, но сам не отвечает взаимностью.
                    </li>
                </ul>
            </Section>

            <Section title="Примеры проявления эгоцентризма">
                <ul className="unordered_list">
                    <li>
                        <Highlight>В детях</Highlight>: Маленький ребёнок может думать, что если он закроет глаза, то его никто не увидит, поскольку он сам ничего не видит. Это классический пример детского эгоцентризма, когда ребёнку трудно понять, что другие люди воспринимают мир иначе.
                    </li>
                    <li>
                        <Highlight>Во взрослых</Highlight>: Взрослый человек может проявлять эгоцентризм, если он, например, ожидает, что его проблемы будут самыми важными для всех окружающих, и не принимает во внимание, что другие могут иметь свои собственные заботы и трудности.
                    </li>
                    <li>
                        <Highlight>В общении</Highlight>: Эгоцентричный человек может постоянно прерывать других в разговоре, переводя тему на себя и свои переживания, не уделяя внимания тому, о чём говорят окружающие.
                    </li>
                </ul>
            </Section>

            <Section title="Разновидности эгоцентризма">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Когнитивный эгоцентризм</Highlight>: Человек полагает, что его точка зрения является единственно правильной. Он с трудом понимает или учитывает, что у других людей могут быть свои мнения или восприятия.
                    </li>
                    <li>
                        <Highlight>Эмоциональный эгоцентризм</Highlight>: Человек сосредоточен на своих эмоциональных состояниях и не способен или не хочет понимать эмоциональные переживания других людей.
                    </li>
                    <li>
                        <Highlight>Моральный эгоцентризм</Highlight>: Человек считает, что его моральные принципы или убеждения являются универсальными и применимыми ко всем, не учитывая, что другие могут иметь разные моральные и этические взгляды.
                    </li>
                </ul>
            </Section>

            <Section title="Отличия от эгоизма">
                <p className="paragraph">
                    Эгоцентризм часто путают с <Highlight>эгоизмом</Highlight>, хотя это разные понятия:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Эгоизм</Highlight> — это сознательная ориентация на свои собственные интересы и выгоды, пренебрежение интересами других людей ради личной выгоды.</li>
                    <li><Highlight>Эгоцентризм</Highlight> — это скорее неосознанная склонность воспринимать мир через призму своих собственных переживаний и нужд, при этом человек может не замечать, что игнорирует интересы других.</li>
                </ul>
                <p className="paragraph">
                    Эгоист может осознанно использовать других для достижения своих целей, тогда как эгоцентрик просто не понимает, что его поведение может задевать других.
                </p>
            </Section>

            <Section title="Примеры в культуре">
                <ul className="space-y-6">
                    <Base_card
                        title="Литература"
                        description="В произведениях, таких как 'Маленький принц' Антуана де Сент-Экзюпери, эгоцентризм обсуждается через персонажей, которые видят мир только с одной — своей — точки зрения. Например, король на своей планете, который считает, что все должны ему подчиняться, представляет собой типичный пример эгоцентризма."
                        icon="📚"
                    />
                    <Base_card
                        title="Кино"
                        description="В фильмах часто можно встретить эгоцентричных персонажей, которые не способны понять или учитывать чувства других. Например, в фильме 'Дьявол носит Prada', главная героиня Миранда Пристли — эгоцентричный персонаж, сосредоточенный исключительно на своих требованиях и ожиданиях от окружающих."
                        icon="🎬"
                    />
                </ul>
            </Section>

            {/* Цитаты */}
            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Эгоцентризм — это когда мир вокруг кажется тебе лишь фоном для собственной жизни."
                        annotation="Эгоцентрик воспринимает окружающий мир как нечто второстепенное, существующее только для того, чтобы поддерживать его собственные цели и существование, не осознавая значимость других людей и их жизней."
                    />

                    <Quote_with_annotation
                        quote="Эгоцентрик всегда удивляется, почему другие не видят мир так, как он."
                        annotation="Эгоцентрики считают свою точку зрения единственной правильной и не могут понять, почему другие люди могут видеть или воспринимать ситуацию иначе."
                    />

                    <Quote_with_annotation
                        quote="Эгоцентризм — это не столько любовь к себе, сколько неспособность заметить других."
                        annotation="Речь идёт о том, что эгоцентризм — это скорее не чрезмерная любовь к себе, а отсутствие внимания к чувствам, мыслям и потребностям окружающих."
                    />

                    <Quote_with_annotation
                        quote="Тот, кто ставит себя в центр вселенной, часто оказывается одинок."
                        annotation="Эгоцентрики могут отталкивать людей, так как неспособность учитывать интересы и чувства других ведёт к изоляции и одиночеству."
                    />

                    <Quote_with_annotation
                        quote="Эгоцентризм — это когда ты не способен увидеть в зеркале ничего, кроме собственного отражения."
                        annotation="Эгоцентрик зациклен на себе настолько, что не может увидеть мир за пределами своих собственных интересов и потребностей."
                    />
                </div>
            </Section>

            <Section title="Влияние эгоцентризма на отношения">
                <p className="paragraph">
                    Эгоцентризм может негативно сказываться на межличностных отношениях, так как он мешает человеку понимать и учитывать потребности других людей. Эгоцентрики могут проявлять следующие черты:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Неспособность к эмпатии</Highlight>: Эгоцентрик с трудом понимает, что другие люди могут испытывать чувства, отличные от его собственных. Это может приводить к недоразумениям и конфликтам в отношениях.</li>
                    <li><Highlight>Ожидание, что все должны подстраиваться</Highlight>: Эгоцентрик может ожидать, что все окружающие будут следовать его желаниям и интересам, не учитывая их собственные нужды.</li>
                    <li><Highlight>Невнимание к обратной связи</Highlight>: Эгоцентрик может игнорировать критику и обратную связь, так как он не способен понять точку зрения другого человека.</li>
                </ul>
            </Section>
        </div>
    );
}