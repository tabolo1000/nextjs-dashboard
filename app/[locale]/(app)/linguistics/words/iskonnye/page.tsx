import React from 'react';
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import {Section} from "@/app/ui/math/components/Section";
import {Highlight} from "@/app/ui/math/components/Highlight";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Base_card} from "@/app/ui/math/components/Base_card";

export default function Iskonnye (){
    return (
        <div className="main_block_task">
                <h1 className="header_h1">
                    Этимология слова "Исконный"
                </h1>

                 <Section title="Этимология">
                    <p className="paragraph">
                        Слово <Highlight>исконный</Highlight> происходит от старославянского <i>искони</i>, что означало с древних времён, изначально, с самого начала. Оно связано с понятием древности и корней чего-либо, указывая на происхождение или существование с самого истока. В древнерусском языке <i>искони</i> использовалось для обозначения чего-то, что существует с незапамятных времён, указывая на его историческую или культурную значимость.
                    </p>
                </Section>

                <Section title="Морфемный разбор" parity>
                    <ul className="unordered_list">
                        <li>
                            <strong>Приставка "ис-"</strong> — происходит от старославянского <i>из-</i>, указывающего на начало действия, исходную точку или процесс. В этом контексте приставка подчёркивает идею начала, истока или происхождения чего-либо.
                        </li>
                        <li>
                            <strong>Корень "кон"</strong> — связан с понятием начала, истока. Этот корень встречается и в других словах русского языка, таких как <Highlight>конец</Highlight>, где он указывает на предел чего-либо (в данном случае, конец как противоположное начало).
                        </li>
                        <li>
                            <strong>Суффикс "-н"</strong> — служит для образования прилагательных и указывает на качество или признак, присущий чему-либо. Он образует прилагательное, которое описывает что-то существующее с самого начала, первоначальное.
                        </li>
                    </ul>
                </Section>
                <Section title="Исторический контекст" parity>
                    <p className="paragraph">
                        Слово <Highlight>исконный</Highlight> уходит корнями в древнеславянскую культуру, где оно использовалось для обозначения чего-то, что существовало изначально и было неотъемлемой частью жизни и уклада народа. Это могло касаться как территорий, так и традиций, обычаев, языка, верований и других элементов культуры.
                    </p>
                    <p className="paragraph">
                        В старославянских текстах слово <i>искони</i> часто упоминалось в контексте древних времён, подчёркивая связь с прошлым, с корнями народа. В древнерусской литературе и религиозных текстах <i>искони</i> нередко использовалось для описания библейских или мифологических событий, происходивших в древности, например, для указания на древние времена, когда были заложены основы мира или общества.
                    </p>
                </Section>

                <Section title="Современное значение">
                    <p className="paragraph">
                        Сегодня слово <Highlight>исконный</Highlight> используется для описания чего-то, что существовало с самого начала, является изначальным или коренным. Оно может относиться как к территориям и народам, так и к идеям, верованиям, традициям, принципам и даже правам. <strong>Исконный</strong> подчеркивает аутентичность, историческую значимость и первозданность чего-либо.
                    </p>
                </Section>

                <Section title="Интересный факт" parity>
                    <p className="paragraph">
                        Слово <Highlight>исконный</Highlight> особенно часто используется в контексте национальной идентичности и культурных традиций. Оно выражает идею коренных, неподдельных ценностей, которые передаются из поколения в поколение и сохраняются на протяжении веков. В некоторых случаях оно используется для защиты культурного наследия или территориальных прав, утверждая, что что-то принадлежит народу или территории с незапамятных времён.
                    </p>
                </Section>

                <Section title="Цитаты">
                        <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                            <Quote_with_annotation
                                quote="Исконные корни народа — это фундамент его культуры."
                                annotation="Эта цитата подчёркивает, что культурные традиции и обычаи любого народа напрямую связаны с его историческим прошлым. Именно исконные корни формируют уникальную идентичность народа, его мировоззрение и культурный код."
                            />
                            <Quote_with_annotation
                                quote="Истинная мудрость — это возвращение к исконным истинам, которые мы забыли в суете современности."
                                annotation="Лао-цзы подчёркивает важность обращения к древним истинам, которые остаются актуальными вне зависимости от времени. Современная жизнь может отвлечь нас от этих основополагающих принципов, но истинная мудрость заключается в их осознании и возвращении к ним."
                            />
                            <Quote_with_annotation
                                quote="Исконное знание — это то, что передаётся не через книги и слова, а через дух и сердце."
                                annotation="Руми говорит о том, что подлинные знания и мудрость нельзя изучить только через письменные источники. Истинные знания передаются через внутренний опыт, ощущение и понимание, которые невозможно выразить словами."
                            />
                            <Quote_with_annotation
                                quote="Человек, забывающий свои исконные корни, теряет не только прошлое, но и будущее."
                                annotation="Конфуций подчёркивает важность сохранения исторической памяти и традиций. Если человек забывает свои корни, он теряет связь с прошлым, что ведёт к утрате ориентиров для будущего развития."
                            />
                            <Quote_with_annotation
                                quote="В исконных ценностях скрыта сила, которая помогает народу выстоять в самых трудных испытаниях."
                                annotation="Лев Толстой акцентирует внимание на том, что именно исконные ценности и традиции дают силу народу. Когда происходят кризисы, именно эти древние принципы помогают сохранять стойкость и единство нации."
                            />
                    </div>
                </Section>

            <Section title="Примеры использования слова 'исконный'">
                <ul className="space-y-6">
                    <Base_card
                        title="Территориальное значение"
                        description="Это исконные земли наших предков — здесь подчёркивается, что территория исторически принадлежала предкам данного народа."
                        icon="🌍"
                    />
                    <Base_card
                        title="Культурные традиции"
                        description="Исконные традиции народа чтятся до сих пор — слово исконные указывает на древние, коренные обычаи, которые сохраняются."
                        icon="🎎"
                    />
                    <Base_card
                        title="Язык и культура"
                        description="Исконный язык этого региона почти исчез — подчёркивается, что язык был изначальным, древним для данного региона, но почти исчез."
                        icon="🗣️"
                    />
                    <Base_card
                        title="Возвращение к корням"
                        description="Они вернулись к исконным принципам воспитания — исконные принципы означают первозданные, традиционные подходы к воспитанию, существовавшие с древних времён."
                        icon="🌱"
                    />
                    <Base_card
                        title="Права и свободы"
                        description="Исконное право человека — это свобода — исконное подчёркивает, что право на свободу является фундаментальным, существующим с самого начала."
                        icon="⚖️"
                    />
                    <Base_card
                        title="Местные обычаи"
                        description="Исконные жители этих мест всегда жили в гармонии с природой — указывает на древних, коренных жителей, которые сохраняли исконные традиции взаимодействия с природой."
                        icon="🏞️"
                    />
                </ul>
            </Section>
            <Audio_Navigate
                path={"/words/iskonnye/iskonnye.record"}
                to={{
                    nextTask: "./protege",
                    nextExercise: "",
                }}/>

        </div>
    );
};



