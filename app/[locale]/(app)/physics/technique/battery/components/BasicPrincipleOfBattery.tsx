import {Section} from "@/app/ui/math/components/Section";
import {Highlight} from "@/app/ui/math/components/Highlight";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import anod from "@/app/[locale]/(app)/physics/technique/battery/assets/img/anod (4).jpg";
import zink from "@/app/[locale]/(app)/physics/technique/battery/assets/img/zink.jpg";
import cuSO4 from "@/app/[locale]/(app)/physics/technique/battery/assets/img/cuSO4.jpg";
import React from "react";
import battery from "@/app/[locale]/(app)/physics/technique/battery/assets/img/battery.png";


export function BasicPrincipleOfBattery () {
    return <>
        {/* Основной принцип работы батареек */}
        <Section title="Основной принцип работы батарейки" parity>
            {/* Введение */}
            <p className="paragraph_base">
                <Highlight>Батарейка</Highlight> — это электрохимическое устройство,
                которое преобразует химическую энергию в электрическую.
                Это стало возможным благодаря открытиям в химии и физике,
                начиная с работы Алессандро Вольта в XVIII веке,
                когда была создана первая батарейка — &#34;вольтов столб&#34;.
            </p>

            <Interactive_Image src={battery} alt={"batter"} width={300} height={300}/>

            {/* Основные компоненты */}
            <h3 className="header_h3"> Основные компоненты батарейки </h3>
            <ul className="unordered_list">
                <li>
                    <p className="paragraph_base">
                        <Highlight>Анод:</Highlight> Источник электронов. Например, цинковая пластина в обычной батарейке.
                        <p>
                            <span className={"third_priority_content"}>Этимология: </span> от греческого
                            слова &#34;ἄνοδος&#34; (анодос), что означает &#34;восхождение&#34;. Это связано с движением
                            заряда от анода в направлении внешней цепи.
                        </p>
                    </p>
                    <Interactive_Image src={zink} alt={"batter"} width={300} height={300}/>

                </li>
                <li>
                   <p className="paragraph_base">
                       <Highlight>Катод:</Highlight> Приёмник электронов. Например, угольный стержень или медная пластина.
                       <p>
                           <span className={"third_priority_content"}>Этимология: </span>
                            от греческого &#34;κάθοδος&#34; (катодос), что означает &#34;нисхождение&#34;. Это отражает движение заряда к катоду внутри батарейки.
                       </p>
                   </p>
                    <Interactive_Image
                        src={anod}
                        alt={"Изображение с изображением катода медной пластинки."}
                        width={300}
                        height={300}/>
                </li>
                <li>
                    <p className="paragraph_base">
                        <Highlight>Электролит:</Highlight> Среда, в которой происходят реакции. Например, раствор солей или кислоты.
                        <p>
                            <span className={"third_priority_content"}>Этимология: </span>
                            от греческого &#34;ἤλεκτρον&#34; (электрон, янтарь) и &#34;λύσις&#34; (разложение). Электролит — это вещество, которое проводит электрический ток за счёт движения ионов.
                        </p>
                    </p>
                    <Interactive_Image
                        src={cuSO4}
                        alt={"batter"}
                        width={300}
                        height={300}/>
                </li>
            </ul>

            {/* Метафора для упрощения понимания */}
            <p className="paragraph_base">
                Если представить батарейку как систему подачи воды, то анод — это резервуар, из которого &#34;вытекает&#34; вода (электроны), катод — это место, где вода &#34;собирается&#34;, а электролит — это трубы, по которым вода движется, чтобы соединить оба конца.
            </p>

            {/* Как работает батарейка */}
            <h3 className="header_h3">Как работает батарейка?</h3>
            <p className="paragraph_base">
                Во время работы батарейки электроны перемещаются от анода к катоду по внешней цепи, создавая электрический ток. Внутри батарейки происходит следующее:
            </p>
            <ul className="unordered_list">
                <li className="unordered_list_li paragraph_example">
                    На аноде (например, цинковой пластине) происходит окисление: металл отдаёт электроны и превращается в ионы.
                </li>
                <li className="unordered_list_li paragraph_example">
                    На катоде (например, угольном стержне или медной пластине) происходит восстановление: ионы из электролита принимают электроны и превращаются в нейтральные атомы.
                </li>
                <li className="unordered_list_li paragraph_example">
                    Электролит переносит ионы между анодом и катодом, обеспечивая протекание реакции.
                </li>
            </ul>

            {/* Примеры батареек */}
            <h3 className="header_h3 ">Примеры батареек</h3>
            <ul className="unordered_list">
                <li className="unordered_list_li paragraph_example">
                    <Highlight>Щелочная батарейка:</Highlight> Использует цинк (анод) и диоксид марганца (катод) с щелочным электролитом (например, гидроксид калия). Это самый распространённый тип батареек.
                </li>
                <li className="unordered_list_li paragraph_example">
                    <Highlight>Литий-ионная батарейка:</Highlight> Использует литий как анод и соединения кобальта, никеля или марганца как катод. Электролит — литиевая соль в органическом растворителе. Применяется в смартфонах и электромобилях.
                </li>
                <li className="unordered_list_li paragraph_example ">
                    <Highlight>Свинцово-кислотная батарея:</Highlight> Использует свинец и оксид свинца с серной кислотой в качестве электролита. Часто применяется в автомобильных аккумуляторах.
                </li>
            </ul>

            {/* Заключение секции */}
            <p className="paragraph_base ">
                Батарейки — это результат удивительного взаимодействия химии и электричества. Понимание их устройства помогает не только оценить их работу, но и выбрать подходящий тип батарейки для конкретной задачи.
            </p>
        </Section>
    </>
}