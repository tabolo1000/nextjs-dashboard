import {Section} from "@/app/ui/math/components/Section";
import Image from "next/image";
import {Highlight} from "@/app/ui/math/components/Highlight";
import {Audio_button} from "@/app/ui/math/components/audio_player/Audio_button";
import NavigateButton from "@/app/ui/math/components/Navigate_button";
import React from "react";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";


export default function Sacre() {

    return (
        <div className="main_block_task">
                <h1 className="header_h1">
                    Чураться: Этимология и История
                </h1>
            <Image
                src={"/words/chur/chur.jpg"}
                width={200}
                height={200}
                alt="Чур"
            />
                    <Section title="Этимология" parity>
                        <p className="paragraph">
                            Слово <Highlight>чураться</Highlight> происходит от древнерусского
                            глагола <Highlight>чуритися</Highlight>,
                            который имел значение "сторониться", "избегать", "отстраняться". В основе этого глагола
                            лежит корень <Highlight>чур</Highlight>,
                            тесно связанный с древними магическими и оберегающими обрядами славян.
                            Слово <Highlight>чур</Highlight> использовалось как магическая
                            формула или заклинание, призывающее защиту от чего-то чуждого, нежелательного или опасного.
                            Таким образом, <Highlight>чур</Highlight> можно
                            рассматривать как символическое выражение границы, которую не следует переступать, своего
                            рода запрет или защита.
                        </p>
                    </Section>

                    <Section title="Морфемный разбор">
                        <ul className="unordered_list">
                            <li>
                                <strong className="text-indigo-500">Корень </strong>: <Highlight>чур</Highlight> — в
                                значении "сторониться", "избегать", что связано с древним обрядом отгораживания себя от
                                чего-то нежелательного.
                            </li>
                            <li>
                                <strong className="text-indigo-500">Суффикс </strong>: <Highlight>-а-</Highlight> — это
                                глагольный суффикс, формирующий основное значение действия.
                            </li>
                            <li>
                                <strong className="text-indigo-500">Окончание </strong>: <Highlight>-ть</Highlight> —
                                окончание инфинитива (начальной формы глагола).
                            </li>
                            <li>
                                <strong className="text-indigo-500">Постфикс </strong>: <Highlight>-ся</Highlight> —
                                возвратная частица, указывающая на то, что действие направлено на самого субъекта или
                                имеет рефлексивный характер.
                            </li>
                        </ul>
                    </Section>

                    <Section title="Современное значение" parity>
                        <p className="paragraph">
                            В современном русском языке <Highlight>чураться</Highlight> употребляется в значении
                            "избегать кого-либо или чего-либо", "сторониться", "уклоняться от чего-то".
                            Этот глагол имеет негативную коннотацию, подразумевая не просто отказ от чего-то, а
                            намеренное стремление держаться подальше, избегать контактов или ситуаций, которые считаются
                            неприятными или небезопасными.
                        </p>
                    </Section>

                    <Section title="Примеры употребления">
                        <ul className="unordered_list">
                            <li>Он всегда <Highlight>чура́лся</Highlight> разговоров на эту тему.</li>
                            <li>Она старалась <Highlight>чураться</Highlight> людей, которые были слишком настойчивы.
                            </li>
                            <li>В детстве Петя <Highlight>чура́лся</Highlight> больших компаний.</li>
                            <li>Не стоит <Highlight>чураться</Highlight> проблем, с ними нужно справляться.</li>
                            <li>Она <Highlight>чура́ется</Highlight> официальных мероприятий.</li>
                            <li>Он <Highlight>чура́ется</Highlight> старых друзей, так как они напоминали ему о прошлом.
                            </li>
                            <li>Не стоит <Highlight>чураться</Highlight> своей ответственности.</li>
                            <li>Они долго <Highlight>чура́ются</Highlight> встречи, но все же пересеклись.</li>
                            <li>Он <Highlight>чура́ется</Highlight> сплетен и интриг в коллективе.</li>
                            <li>Не нужно <Highlight>чураться</Highlight> перемен — они ведут к развитию.</li>
                        </ul>
                    </Section>

                    <Section title="Цитата" parity>
                        <blockquote className="border-l-4 pl-4 italic text-gray-600">
                            "Кто не боится, тот не будет <Highlight>чураться</Highlight> правды." — народная мудрость.
                        </blockquote>
                    </Section>

                    <Section title="История бога Чура">
                        <p className="paragraph">
                            <Highlight>Чур</Highlight> — это древнее славянское божество, которое олицетворяло охрану
                            границ и защиту от всего чужого и враждебного. В народных верованиях
                            <Highlight>Чур</Highlight> был древним духом-хранителем, который оберегал дом и семью от
                            злых сил и чужого воздействия. В славянской мифологии <Highlight>Чур</Highlight>
                            связывался с понятием личного пространства, которое нельзя нарушать без разрешения. Его имя
                            часто произносили в обрядовых заклинаниях, когда хотели обозначить
                            границу между "своим" и "чужим".
                        </p>
                        <p className="paragraph">
                            В древности при обозначении границ земель или собственности произносили
                            слово <Highlight>чур</Highlight>, чтобы защитить свое имущество от посягательств. Это слово
                            служило
                            своего рода магическим щитом, который не позволял злым духам или недоброжелателям пересекать
                            эту границу.
                        </p>
                        <p className="paragraph">
                            С течением времени значение этого божества трансформировалось и сохранилось в языке как
                            элемент обережной функции, что и отразилось в глаголе <Highlight>чураться</Highlight>:
                            "сторониться", "избегать" чего-то, что может быть опасным или нежелательным.
                        </p>
                    </Section>

                    <Section title="Мифологический контекст" parity>
                        <p className="paragraph">
                            <Highlight>Чур</Highlight> как дух-защитник был важной частью повседневной жизни славян. Его
                            призывали для охраны от злых духов и бедствий. Считалось, что <Highlight>Чур</Highlight>
                            защищает не только границы физические, но и психические — личное пространство, внутренний
                            мир человека. Поэтому словосочетание <Highlight>чур меня</Highlight> использовалось как
                            своеобразное
                            заклинание, чтобы оградить себя от чего-то нежелательного.
                        </p>
                    </Section>

            <Audio_Navigate
                path={"/words/chur/chur.record"}
                to={{
                    nextTask: "./distance_units_of_measurement",
                    nextExercise: "",
                }}/>
        </div>
    );
};


