import {Section} from "@/app/ui/math/components/Section";
import React from "react";


export function ColdConditions() {
    return <>
        <Section title="Почему аккумулятор разряжается быстрее на холоде?" parity={true}>

            <p className="paragraph_example ">
                На первый взгляд кажется, что аккумулятор не должен терять электроны на холоде.
                Однако его «разряд» связан не с утечкой заряда, а с физико-химическими процессами,
                которые замедляются при низких температурах. Давайте разберёмся подробнее.
            </p>

            {/* Основные причины */}
            <h3 className="header_h3">Основные причины</h3>
            <ul className="unordered_list ">
                <li className={"unordered_list_it paragraph_example"}>
                    <span className={"second_priority_content"}>Замедление химических реакций:</span>
                    При температуре около <span className={"third_priority_content"}>-10°C</span> скорость электрохимических процессов
                    уменьшается примерно на <span className={"third_priority_content"}>30–40%</span>, что значительно снижает мощность
                    аккумулятора. При <span className={"third_priority_content"}>-20°C</span> снижение может достигать <span className={"third_priority_content"}>50%</span>.
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    <span className={"second_priority_content"}>Увеличение внутреннего сопротивления:</span>
                    На морозе (например, <span className={"third_priority_content"}>-15°C</span>) внутреннее сопротивление аккумулятора
                    может увеличиваться в 2–3 раза по сравнению с комнатной температурой. Это снижает
                    напряжение и доступную мощность.
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    <span className={"second_priority_content"}>Поведение электролита:</span>
                    При температуре ниже <span className={"third_priority_content"}>-20°C</span> электролит в большинстве литий-ионных
                    аккумуляторов становится настолько вязким, что его проводимость падает на
                    <span className={"third_priority_content"}>70–80%</span>. В свинцово-кислотных батареях при <span className={"third_priority_content"}>-30°C</span>
                    электролит может частично замерзнуть.
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    <span className={"second_priority_content"}>Снижение скорости диффузии ионов:</span>
                    При <span className={"third_priority_content"}>-10°C</span> ионы лития в литий-ионных батареях перемещаются в 2–3
                    раза медленнее, чем при +20°C. Это вызывает снижение ёмкости и замедляет зарядку.
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    <span className={"second_priority_content"}>Системы самозащиты:</span>
                    При температуре ниже <span className={"third_priority_content"}>-15°C</span> многие современные литий-ионные батареи
                    автоматически ограничивают доступную мощность, чтобы предотвратить повреждения.
                    Это создаёт эффект «быстрого разряда».
                </li>
            </ul>

            {/* Пример из практики */}
            <h3 className="header_h3">Пример из практики</h3>
            <p className="paragraph_base">
                Представьте, что вы используете смартфон на морозе. При температуре <span className={"third_priority_content"}>-10°C</span>
                аккумулятор может потерять до <span className={"third_priority_content"}>30%</span> своей ёмкости, а при <span className={"third_priority_content"}>-20°C</span> —
                до <span className={"third_priority_content"}>50%</span>. Телефон может внезапно выключиться, так как напряжение падает ниже
                рабочего порога. Если вы согреете устройство до комнатной температуры, часть ёмкости
                восстановится.
            </p>
            <p className="paragraph_base">
                Аналогичная ситуация происходит с автомобильными аккумуляторами. При <span className={"third_priority_content"}>-15°C</span>
                они теряют около <span className={"third_priority_content"}>20–30%</span> своей пусковой мощности, а при <span className={"third_priority_content"}>-30°C</span>
                потеря достигает <span className={"third_priority_content"}>50%</span>. Поэтому зимой автомобили часто сложно завести.
            </p>

            {/* Как предотвратить эффект холода */}
            <h3 className="header_h3">Как предотвратить быструю разрядку на холоде?</h3>
            <ul className="unordered_list">
                <li className={"unordered_list_it paragraph_example"}>Держите аккумуляторы в тепле, например, в кармане или в утеплённом чехле.</li>
                <li className={"unordered_list_it paragraph_example"}>
                    Для автомобильных аккумуляторов используйте термоизоляционные чехлы или храните
                    машину в гараже.
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    Выбирайте аккумуляторы, устойчивые к низким температурам. Например, литий-фосфатные
                    (LiFePO₄) аккумуляторы сохраняют до <span className={"third_priority_content"}>80%</span> ёмкости при <span className={"third_priority_content"}>-10°C</span>,
                    в то время как обычные литий-ионные работают менее эффективно.
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    Избегайте использования устройств на сильном морозе. Если это необходимо, согрейте
                    аккумулятор перед использованием.
                </li>
            </ul>

            {/* Заключение */}
            <div className="conclusion_of_article">
                <h4 className="header_h4 text-center">
                    Заключение
                </h4>
                <p>
                    Аккумулятор разряжается быстрее на холоде не из-за потери электронов, а из-за
                    замедления химических реакций, увеличения сопротивления и снижения проводимости
                    электролита. Например, при <span className={"third_priority_content"}>-20°C</span> ёмкость может снизиться до
                    <span className={"third_priority_content"}>50%</span>, а при <span className={"third_priority_content"}>-30°C</span> батарея может вообще перестать работать.
                    Эти эффекты временные, и ёмкость частично восстанавливается при нагреве. Следуйте
                    рекомендациям, чтобы сохранить работоспособность аккумуляторов даже в мороз!
                </p>
            </div>
        </Section>
    </>
}