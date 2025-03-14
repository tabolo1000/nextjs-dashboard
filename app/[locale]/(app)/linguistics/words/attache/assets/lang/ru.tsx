import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import attacheImage from "@/app/[locale]/(app)/linguistics/words/attache/assets/img/attache.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import axios from "axios";

export default async function Attache() {
    let data: Data_first[] = []
  //  try {
  //      const res = await fetch("http://localhost:3000/login"); // Ждём ответ от сервера
   //     data = await res.json(); // Ждём, пока JSON распарсится
   //     console.log(data); // Работайте с данными здесь
   //     debugger; // Остановимся после получения данных
   // } catch (error) {
   //     console.error("Ошибка при запросе:", error);
    //    debugger;
   // }

   try{
    let dataPerson = await axios.post("http://localhost:3000/login/post", {name: "Mickale", age: 28});
    debugger
    data.push(dataPerson.data.person);
    debugger
   }
   catch(error){
    console.error("Ошибка при запросе:", error);
    debugger
   };


    debugger;
    return (
        <div className="main_block_task">
            {data.map((e, i)=>{
                return <div>
                    <h2>{e.name}</h2>
                    <h2>{e.age}</h2>
                </div>
            })}
            sfdfsdfds
            <h1 className="header_h1">Атташе</h1>

            <Section title="Этимология слова 'Атташе'">
                <p className="paragraph">
                    <Highlight>Происхождение:</Highlight> Слово <Highlight>атташе</Highlight> происходит от французского слова <Highlight>attaché</Highlight>, что переводится как «прикреплённый» или «назначенный». Французский глагол <Highlight>attacher</Highlight> означает «прикреплять», «присоединять», «закреплять». Это отражает функцию атташе в дипломатической практике — он прикреплён к посольству или другому дипломатическому представительству для выполнения определённых задач.
                </p>
            </Section>

            <Interactive_Image src={attacheImage} alt={"Атташе"} width={500} height={500} />

            <Section title="Значение слова 'Атташе'">
                <p className="paragraph">
                    <Highlight>Атташе</Highlight> — это должностное лицо, которое прикреплено к дипломатическому учреждению для выполнения специальных функций. Как правило, атташе — это младший дипломатический сотрудник, который занимается определённой областью работы (например, культурой, обороной, экономикой и т.д.).
                </p>
                <p className="paragraph">
                    В современном дипломатическом контексте атташе может быть как младшим специалистом, только начинающим карьеру в дипломатии, так и экспертом в определённой области, приглашённым для решения конкретных задач.
                </p>
            </Section>

            <Section title="Виды атташе">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Военный атташе</Highlight> — представитель вооружённых сил, прикреплённый к посольству для ведения военных или оборонных дел. Военные атташе поддерживают отношения между армиями стран и следят за военными аспектами двусторонних отношений.
                    </li>
                    <li>
                        <Highlight>Культурный атташе</Highlight> — отвечает за культурное взаимодействие между странами, организует культурные обмены, мероприятия, выставки, концерты и другие проекты, которые способствуют продвижению культуры своей страны за рубежом.
                    </li>
                    <li>
                        <Highlight>Пресс-атташе</Highlight> — дипломат, отвечающий за работу с прессой и средствами массовой информации, а также за формирование имиджа посольства и страны в принимающем государстве.
                    </li>
                    <li>
                        <Highlight>Торговый атташе</Highlight> — представитель, ответственный за экономические и торговые отношения между странами. Торговый атташе занимается вопросами внешней торговли и привлечения инвестиций.
                    </li>
                    <li>
                        <Highlight>Научный атташе</Highlight> — специалист, отвечающий за научное сотрудничество между странами, координирует совместные научные проекты и обмены учёными.
                    </li>
                </ul>
            </Section>

            <Section title="Функции и обязанности атташе">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Представительство интересов своей страны</Highlight> — атташе выступает в качестве официального представителя в области, за которую он отвечает (культура, наука, экономика или оборона).
                    </li>
                    <li>
                        <Highlight>Информационно-аналитическая работа</Highlight> — сбор и анализ информации, подготовка отчётов для своего правительства.
                    </li>
                    <li>
                        <Highlight>Организация мероприятий</Highlight> — атташе организует различные мероприятия (выставки, конференции, встречи), чтобы продвигать интересы своей страны за рубежом.
                    </li>
                    <li>
                        <Highlight>Поддержание контактов</Highlight> — атташе развивает и поддерживает отношения с ключевыми фигурами в стране пребывания.
                    </li>
                </ul>
            </Section>

            <Section title="Исторический контекст">
                <p className="paragraph">
                    Титул <Highlight>атташе</Highlight> появился в XVIII веке, когда европейские страны начали развивать свои дипломатические службы. Изначально атташе были младшими дипломатическими служащими, выполняющими вспомогательные функции. Со временем их роли расширялись, и появились специализированные должности — военные, культурные, торговые атташе.
                </p>
                <p className="paragraph">
                    В XIX и XX веках роль атташе значительно возросла, особенно в контексте международных отношений. Военные и торговые атташе играли важную роль в поддержании стратегических и экономических связей между странами.
                </p>
            </Section>

            <Section title="Примеры использования">
                <ul className="space-y-6">
                    <Base_card
                        title="Военный атташе"
                        description="Военный атташе посольства Франции провёл встречу с представителями Министерства обороны для обсуждения сотрудничества в области безопасности."
                        icon="🎖️"
                    />
                    <Base_card
                        title="Культурный атташе"
                        description="Культурный атташе организовал выставку современных художников для продвижения искусства своей страны за рубежом."
                        icon="🎨"
                    />
                    <Base_card
                        title="Пресс-атташе"
                        description="Пресс-атташе посольства дал интервью местным СМИ, разъяснив позицию своей страны по международному вопросу."
                        icon="📰"
                    />
                    <Base_card
                        title="Торговый атташе"
                        description="Торговый атташе организовал бизнес-форум для укрепления экономических связей между странами."
                        icon="💼"
                    />
                </ul>
            </Section>

            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Дипломатия — это искусство говорить 'хороший пёс' до тех пор, пока не найдёшь камень."
                        annotation="Уинстон Черчилль — о тонкостях дипломатического мастерства"
                    />
                    <Quote_with_annotation
                        quote="В наше время дипломатия играет ключевую роль в поддержании мира между государствами."
                        annotation="Кофи Аннан — о важности дипломатических отношений"
                    />
                    <Quote_with_annotation
                        quote="Атташе — это глаза и уши посольства в стране пребывания."
                        annotation="Неизвестный автор — о роли атташе в дипломатии"
                    />
                </div>
            </Section>

            <Section title="Значение атташе в современном мире">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Военные атташе</Highlight> играют важную роль в развитии оборонных и стратегических связей между странами.
                    </li>
                    <li>
                        <Highlight>Культурные атташе</Highlight> способствуют продвижению культурных ценностей и обменов между народами.
                    </li>
                    <li>
                        <Highlight>Торговые атташе</Highlight> укрепляют экономические связи, способствуя развитию торговли и инвестиций.
                    </li>
                    <li>
                        <Highlight>Научные атташе</Highlight> координируют международное научное сотрудничество и обмен опытом между исследователями.
                    </li>
                </ul>
            </Section>
        </div>
    );
}




export interface Data_first {
    title: string;
    translation: string;
    morpheme: {
      root: string[];
      prefix?: string; // Делаем свойства необязательными, если они могут отсутствовать
      suffix?: string;
      end?: string;
    };
    description: string;
    icon: string;
    quote: string;
    annotation: string;
  }