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
                        Губернатор: Этимология, История и Лингвистический Анализ
                    </h1>

                    <Section title="Этимология слова 'губернатор'">
                        <p className="text-lg leading-relaxed mb-4">
                            Слово <Highlight>губернатор</Highlight> происходит от латинского <i>gubernator</i>, что в
                            буквальном переводе означает
                            "управляющий", "рулевой", "направляющий". Латинский глагол <i>gubernare </i> (управлять,
                            направлять) также восходит к древнегреческому
                            <i> κυβερνάω </i> (kybernao) — "рулить", "вести корабль".
                        </p>
                    </Section>

                    <Section title="Исторический контекст">
                        <p className="text-lg leading-relaxed mb-4">
                            Исторически слово "губернатор" использовалось для обозначения лица, управляющего
                            территорией, колонией или провинцией.
                            В Римской империи это были "проконсулы" и "преторы", которые назначались сенатом или
                            императором для управления провинциями.
                            В эпоху колонизации губернаторы назначались для управления заморскими колониями, представляя
                            интересы короны.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            В России институт губернаторов был введён при Петре I в 1708 году. Губернаторы руководили
                            губерниями — крупными административными единицами.
                            В современной России должность губернатора была восстановлена в 1991 году для управления
                            областями, краями и республиками.
                        </p>
                    </Section>

                    <Section title="Морфемный разбор">
                        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                            <li>
                                <strong>Корень:</strong> <Highlight>губерн-</Highlight> — восходит к латинскому
                                "gubernare", что означает "управлять".
                            </li>
                            <li>
                                <strong>Суффикс:</strong> <Highlight>-атор</Highlight> — образует существительные,
                                обозначающие людей, выполняющих определённые функции (например, "диктатор",
                                "император").
                            </li>
                            <li>
                                <strong>Окончание:</strong> <Highlight>-ор</Highlight> — типичное окончание для
                                существительных мужского рода (например, "директор", "инспектор").
                            </li>
                        </ul>
                    </Section>

                    <Section title="Лексико-семантический анализ">
                        <p className="text-lg leading-relaxed mb-4">
                            В современном русском языке слово <Highlight>губернатор</Highlight> употребляется в значении
                            "руководитель субъекта федерации".
                            Это официальное лицо, назначаемое или избираемое для административного управления регионом и
                            представляющее центральную власть.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            <strong>Семантическое поле:</strong> Слово связано с такими понятиями, как "власть",
                            "управление", "администрация", "регион".
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            <strong>Синонимы:</strong> могут включать "правитель", "управляющий", "администратор".
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            <strong>Антонимы:</strong> "подчинённый", "исполнитель".
                        </p>
                    </Section>

                    <Section title="Словообразование">
                        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                            <li>
                                <Highlight>Губерния</Highlight>: историческое название административно-территориальной
                                единицы в России с 1708 по 1929 год.
                            </li>
                            <li>
                                <Highlight>Губернаторство</Highlight>: должность губернатора или период пребывания на
                                этом посту.
                            </li>
                            <li>
                                <Highlight>Губернаторский</Highlight>: прилагательное, относящееся к губернатору
                                (например, "губернаторские выборы").
                            </li>
                        </ul>
                    </Section>

                    <Section title="Заключение">
                        <p className="text-lg leading-relaxed">
                            Слово <Highlight>губернатор</Highlight> прошло долгий путь, начиная от древнегреческого
                            "рулевого" до современного государственного деятеля.
                            В русском языке оно было заимствовано в Петровскую эпоху и до сих пор сохраняет своё
                            значение административного руководителя региона.
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


