import React from "react";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Section} from "@/app/ui/math/components/Section";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Highlight} from "@/app/ui/math/components/Highlight";
import methodology from "@/app/[locale]/(app)/linguistics/words/methodology/assets/img/methodology.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function Methodology() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Способ</h1>

            <Section title="Этимология слова 'способ'">
                <p className="paragraph">
                    <Highlight>Происхождение:</Highlight>
                    Слово <Highlight>способ</Highlight> происходит от древнерусского <Highlight>спосѡбъ</Highlight>,
                    которое восходит к праславянскому <Highlight>spǫsobъ</Highlight>. Оно состоит из двух частей:
                </p>
                <p className="paragraph">
                    Первоначально слово <Highlight>способ</Highlight> обозначало метод или средство, при помощи которого
                    можно что-то сделать или достичь определённого результата.
                </p>
            </Section>

            <Interactive_Image src={methodology} alt={"methodology"} width={500} height={500}/>

            <Section title="Морфологические элементы">
                <ul className="unordered_list">
                    <li><Highlight>Приставка "с-"</Highlight> — указывает на совместное действие или взаимодействие.
                    </li>
                    <li><Highlight>Корень "-пособ-"</Highlight> — связан с понятием помощи или содействия.</li>
                    <li><Highlight>Окончание "–"</Highlight> — стандартное окончание для существительных мужского рода в
                        единственном числе.
                    </li>
                </ul>
            </Section>

            <Section title="Исторический контекст">
                <p className="paragraph">
                    В древнерусском языке <Highlight>способ</Highlight> использовался для обозначения метода или
                    средства, с помощью которого можно достичь цели или выполнить задачу. Этот термин встречался в
                    различных сферах жизни, от бытовых задач до более сложных ремесленных или военных действий.
                </p>
                <p className="paragraph">
                    Со временем слово стало использоваться всё шире, включая в себя не только физические методы
                    выполнения задач, но и абстрактные способы решения проблем, подходы к управлению или организации
                    процессов.
                </p>
            </Section>

            <Section title="Современное значение">
                <p className="paragraph">
                    Сегодня <Highlight>способ</Highlight> — это метод, приём или средство, с помощью которого можно
                    достичь какой-либо цели, выполнить действие или решить задачу. Это универсальное понятие, применимое
                    в самых разных областях: от науки и техники до повседневной жизни.
                </p>
            </Section>

            <Section title="Виды способов">
                    <Highlight>Физические способы</Highlight> — методы, связанные с физическим воздействием на
                        объекты или материалы. Примеры:
                        <ul className="unordered_list">
                            <li>Резка</li>
                            <li>Сварка</li>
                            <li>Плавка</li>
                        </ul>

                    <Highlight>Математические способы</Highlight> — методы, используемые для решения математических
                        задач. Примеры:
                        <ul className="unordered_list">
                            <li>Метод подстановки</li>
                            <li>Метод исключения</li>
                            <li>Метод математической индукции</li>
                        </ul>

                    <Highlight>Химические способы</Highlight> — методы, применяемые для проведения химических
                        реакций или анализа веществ. Примеры:
                        <ul className="unordered_list">
                            <li>Способ титрования</li>
                            <li>Способ дистилляции</li>
                        </ul>

                    <Highlight>Биологические способы</Highlight> — методы, связанные с исследованием и модификацией
                        живых организмов. Примеры:
                        <ul className="unordered_list">
                            <li>Способ клонирования</li>
                            <li>Способ селекции</li>
                        </ul>

                    <Highlight>Организационные способы</Highlight> — методы управления, планирования и выполнения
                        задач в коллективе или компании. Примеры:
                        <ul className="unordered_list">
                            <li>Способ делегирования полномочий</li>
                            <li>Способ распределения ресурсов</li>
                        </ul>
            </Section>

            <Section title="Примеры использования слова 'способ'">
                <ul className="space-y-6">
                    <Base_card
                        title="Наука"
                        description="Учёные разработали новый способ получения чистого водорода из воды."
                        icon="🔬"
                    />
                    <Base_card
                        title="Техника"
                        description="Этот способ сборки позволяет сократить время производства в два раза."
                        icon="⚙️"
                    />
                    <Base_card
                        title="Образование"
                        description="Лучший способ выучить иностранный язык — это регулярная практика."
                        icon="📚"
                    />
                    <Base_card
                        title="Быт"
                        description="Этот способ приготовления кофе оказался самым быстрым и удобным."
                        icon="☕"
                    />
                </ul>
            </Section>

            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Война — это не способ достигнуть цели, а крайняя мера, когда все другие способы оказались бесполезными."
                        annotation="Лев Толстой"
                    />
                    <Quote_with_annotation
                        quote="Единственный способ избежать ошибок — не иметь новых идей."
                        annotation="Альберт Эйнштейн"
                    />
                    <Quote_with_annotation
                        quote="Лучший способ предсказать будущее — создать его."
                        annotation="Конфуций"
                    />
                </div>
            </Section>

            <Section title="Значение способов">
                <p className="paragraph">
                    <Highlight>Способ</Highlight> — это ключевое понятие в любой деятельности, от простой задачи до
                    сложных научных исследований. Способы помогают находить решения, оптимизировать процессы и достигать
                    поставленных целей.
                </p>
            </Section>
        </div>
    );
}

