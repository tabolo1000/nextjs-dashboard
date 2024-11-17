import Term from "@/app/ui/math/components/сopywriting/Term";
import {Section} from "@/app/ui/math/components/Section";
import compressor from "../img/compressor.webp";
import evaporator from "../img/evaporator.webp";
import refrigerant from "../img/refrigerant.jpg";
import capillary_tube from "../img/capillary_tube.webp";
import condenser from "../img/condenser.jpg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import schema from "../img/schema.jpg";
import Link from "next/link";
import {pathWords} from "@/app/lib/path";



export default function FridgeExplanation ()   {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Как работает холодильник
            </h1>
            <Section title={"Магия холода у вас дома"} parity>
                <p className="paragraph">
                    Представьте себе летний день: жара давит, солнце палит… И вот вы открываете дверцу холодильника,
                    чувствуя, как свежий прохладный воздух обволакивает вас. Просто волшебство! Но, как ни странно,
                    "волшебство" холодильника не связано с тем, что он наполняется холодом извне. На самом деле, он
                    делает
                    нечто совершенно противоположное: <strong>он вытягивает тепло</strong> из продуктов и отправляет его
                    в
                    окружающий воздух.
                </p>
            </Section>


            <Section title={"Магия охлаждения: как холодильник создает холод?"}>
                <p className="paragraph">
                    Когда впервые слышишь о том, что холодильник не "создает" холод, а <strong>убирает тепло</strong>,
                    это
                    может показаться нелогичным. Но этот процесс не только прост, но и гениален! Давайте узнаем, что за
                    этим
                    стоит.
                </p>
                <Interactive_Image src={schema} alt={"schema"} width={500} height={500}/>

                <h3 className="header_h3">Главные герои холодильной системы</h3>
                <ul className={"unordered_list"}>
                    <li>
                        <Link href={"/linguistics/words/compressor"}><Term>Компрессор</Term></Link>
                        — сердце холодильника. Перекачивает и сжимает хладагент.
                        <Interactive_Image src={compressor} alt={"Компрессор"} width={400} height={400}/>
                    </li>
                    <li>
                        <Link href={`${pathWords}/capacitor`}><Term>Конденсатор</Term></Link>
                        — отдает тепло в окружающую среду через заднюю стенку холодильника.
                        <Interactive_Image src={condenser} alt={"Конденсатор"} width={400} height={400}/>
                    </li>
                    <li>
                        <Link href={`${pathWords}/capillary_tube`}><Term>Капиллярная трубка</Term></Link>
                        — регулирует поток хладагента между конденсатором и испарителем.
                        <Interactive_Image src={capillary_tube} alt={"Капиллярная трубка"} width={400} height={400}/>
                    </li>
                    <li>
                        <Link href={`${pathWords}/evaporator`}><Term>Испаритель</Term></Link>
                        — здесь хладагент превращается в газ, поглощая тепло из продуктов.
                        <Interactive_Image src={evaporator} alt={"Испаритель"} width={400} height={400}/>
                    </li>
                    <li>
                        <Link href={`${pathWords}/coolant`}><Term>Хладагент</Term></Link>
                        — основное вещество, переносящее тепло в холодильной системе.
                    </li>
                    <Interactive_Image src={refrigerant} alt={"Хладагент"} width={400} height={400}/>
                </ul>
            </Section>

            <Section title={"Как работает холодильник: шаг за шагом"} parity>
                <ol className="order_list paragraph">
                    <li>Компрессор включается и втягивает газообразный хладагент из испарителя.</li>
                    <li>Компрессор сжимает хладагент, увеличивая его давление и температуру.</li>
                    <li>Хладагент проходит через конденсатор, где он остывает и превращается в жидкость, отдавая
                        тепло.
                    </li>
                    <li>Фильтр очищает хладагент перед входом в капиллярную трубку.</li>
                    <li>Жидкий хладагент поступает в испаритель, где давление падает, и он превращается в газ.</li>
                    <li>В испарителе хладагент поглощает тепло из продуктов и вновь превращается в газ.</li>
                    <li>Газ возвращается в компрессор, и цикл повторяется.</li>
                </ol>

                <h3 className="header_h3">Пример из жизни: испарение</h3>
                <p className="paragraph">
                    Вспомните, как вы выходите из бассейна в жаркий день, и вам становится холодно, хотя на улице 30°C.
                    Почему так? Вода на вашей коже испаряется, забирая с собой тепло, и вы чувствуете прохладу. Точно
                    так же
                    работает и ваш холодильник: испарение хладагента забирает тепло из продуктов, а не добавляет холод.
                </p>
                <h3 className="header_h3">Холодильник с зоной свежести BioFresh</h3>
                <p className="paragraph">
                    Холодильники с зоной свежести BioFresh поддерживают температуру около 0°C и оптимальную влажность.
                    Это
                    отделение помогает хранить продукты свежими дольше. Воздух забирается вентилятором, охлаждается за
                    задней стенкой и распределяется между контейнерами для создания идеальных условий.
                </p>
            </Section>
            <Section title={"Итог: холодильник — это настоящее чудо техники!"}>
                <p className="paragraph">
                    Каждый раз, когда вы открываете холодильник, вы становитесь свидетелем удивительного процесса: тепло
                    покидает ваши продукты и отправляется в окружающую среду. Это не просто машина для хранения
                    продуктов —
                    это сложное устройство, которое использует физические законы, чтобы сделать вашу жизнь проще и
                    комфортнее.
                </p>
            </Section>
        </div>
    )
        ;
};

