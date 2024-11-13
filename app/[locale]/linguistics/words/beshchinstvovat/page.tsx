import {Section} from "@/app/ui/math/components/Section";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
//import {Highlight} from "@/app/ui/math/components/Highlight";
import {routing} from "@/i18n/routing";
import {setRequestLocale} from "next-intl/server";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
    try {
        return (await import(`./assets/lang/${locale}.json`)).default;
    } catch (error) {
        return new Error("n18n " + error); // Возвращаем пустой объект в случае ошибки
    }
}

export default async function Beshchinstvovat({
                                                  params: { locale }
                                              }: {
    params: { locale: string };
}) {
    setRequestLocale(locale);
    const messages = await getMessages(locale);

    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                {messages.title}
            </h1>

            {/* Секция: Этимология */}
            <Section title={messages.sections[0].title}>
                <p className="paragraph">
                    {messages.sections[0].content}
                </p>
            </Section>

            {/* Секция: Морфемный разбор */}
            <Section title={messages.sections[1].title} parity>
                <ul className="unordered_list">
                    {messages.sections[1].content.map((item, index) => (
                        <li key={index}>
                            <strong>{item.part}</strong> — {item.description}
                        </li>
                    ))}
                </ul>
            </Section>

            {/* Секция: Исторический контекст */}
            <Section title={messages.sections[2].title} parity>
                {messages.sections[2].content.map((paragraph, index) => (
                    <p className="paragraph" key={index}>
                        {paragraph}
                    </p>
                ))}
            </Section>

            {/* Секция: Современное значение */}
            <Section title={messages.sections[3].title}>
                <p className="paragraph">
                    {messages.sections[3].content}
                </p>
            </Section>

            {/* Секция: Интересный факт */}
            <Section title={messages.sections[4].title} parity>
                <p className="paragraph">
                    {messages.sections[4].content}
                </p>
            </Section>

            {/* Секция: Цитаты */}
            {/* Секция: Цитаты */}
            {/* Секция: Цитаты */}
            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    {messages?.sections?.[5]?.quotes?.length > 0 ? (
                        messages.sections[5].quotes.map((quote, index) => (
                            <Quote_with_annotation
                                key={index}
                                quote={quote.quote}
                                annotation={quote.annotation}
                            />
                        ))
                    ) : (
                        <p>No quotes available.</p> // Сообщение, если цитаты отсутствуют
                    )}
                </div>
            </Section>

            {/* Секция: Примеры использования слова "бесчинствовать" */}
            <Section title="Examples of Uses of the Word 'Rampage'">
                <ul className="space-y-6">
                    {messages?.sections?.[6]?.examples?.length > 0 ? (
                        messages.sections[6].examples.map((example, index) => (
                            <Base_card
                                key={index}
                                title={example.title}
                                description={example.description}
                                icon={example.icon}
                            />
                        ))
                    ) : (
                        <p>No examples available.</p> // Сообщение, если примеры отсутствуют
                    )}
                </ul>
            </Section>



            <Audio_Navigate
                path={"/words/beshchinstvovat/beshchinstvovat.record"}
                to={{
                    nextTask: "./cohort",
                    nextExercise: "",
                }}
            />
        </div>
    );
}

/*
import {Section} from "@/app/ui/math/components/Section";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Highlight} from "@/app/ui/math/components/Highlight";
import {routing} from "@/i18n/routing";
import {setRequestLocale} from "next-intl/server";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
    try {
        return (await import(`./assets/lang/${locale}.json`)).default;
    } catch (error) {
        return new Error("n18n " + error); // Возвращаем пустой объект в случае ошибки
    }
}

export default async function Beshchinstvovat({
                                                  params: { locale }
                                              }: {
    params: { locale: string };
}) {
    setRequestLocale(locale);
    const messages = await getMessages(locale);
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Этимология слова "Бесчинствовать"
            </h1>

            <Section title="Этимология">
                <p className="paragraph">
                    Слово <Highlight>бесчинствовать</Highlight> происходит от корня <strong>чин</strong>, обозначающего порядок или службу, и приставки <strong>бес-</strong>, которая указывает на отрицание или отсутствие чего-либо. Таким образом, <Highlight>бесчинствовать</Highlight> буквально означает действовать без порядка, нарушать установленный порядок.
                </p>
            </Section>

            <Section title="Морфемный разбор" parity>
                <ul className="unordered_list">
                    <li>
                        <strong>Приставка "бес-"</strong> — отрицание, указывает на отсутствие порядка или чего-то положительного.
                    </li>
                    <li>
                        <strong>Корень "чин"</strong> — связан с понятием порядка, организации, должности.
                    </li>
                    <li>
                        <strong>Суффикс "-ствова"</strong> — обозначает действие в процессе.
                    </li>
                    <li>
                        <strong>Окончание "-ть"</strong> — указывает на глагольную форму.
                    </li>
                </ul>
            </Section>

            <Section title="Исторический контекст" parity>
                <p className="paragraph">
                    Слово <Highlight>бесчинствовать</Highlight> указывает на нарушение общественного или социального порядка. В древности и в средние века <Highlight>чин</Highlight> ассоциировался с установленной иерархией, служебными обязанностями и порядком в обществе. Те, кто нарушал этот порядок, могли быть названы <Highlight>бесчинствующими</Highlight>, потому что их действия шли вразрез с законом, традициями или установленными правилами.
                </p>
                <p className="paragraph">
                    В исторической перспективе <Highlight>бесчинства</Highlight> часто сопровождали периоды социальных волнений или политических беспорядков. В такие времена люди, чувствуя себя свободными от контроля властей, могли начинать нарушать общественный порядок, участвовать в погромах, разрушениях и других актах вандализма. В литературе и исторических хрониках слово <Highlight>бесчинствовать</Highlight> часто употреблялось для описания таких ситуаций.
                </p>
            </Section>

            <Section title="Современное значение">
                <p className="paragraph">
                    В современном языке <Highlight>бесчинствовать</Highlight> означает совершать беспорядочные, хулиганские или вандалистские действия. Оно указывает на нарушение установленных норм и правил, как социальных, так и правовых. Чаще всего слово употребляется в контексте массовых беспорядков, уличных хулиганств или вандализма, когда действия людей выходят за рамки дозволенного и приводят к хаосу и разрушению.
                </p>
            </Section>

            <Section title="Интересный факт" parity>
                <p className="paragraph">
                    Слово <Highlight>бесчинствовать</Highlight> имеет тесную связь с понятием <Highlight>чин</Highlight>, которое и сегодня используется в значении должность, статус или порядок. Интересно, что в русском языке слово <Highlight>чиновник</Highlight> — это человек, занимающий определённую должность в государственной службе, что также связано с понятием порядка и организации. Таким образом, <Highlight>бесчинствовать</Highlight> — это прямо противоположное поведение, когда нарушаются установленные законы и нормы.
                </p>
            </Section>

            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Там, где бесчинствуют, правит хаос."
                        annotation="Эта цитата подчёркивает, что бесчинство ведёт к нарушению порядка и установлению хаоса."
                    />
                    <Quote_with_annotation
                        quote="Бесчинствовать — значит игнорировать не только закон, но и моральные нормы, которые удерживают общество от разрушения."
                        annotation="Цитата говорит о том, что бесчинства разрушают не только правовые, но и моральные основы общества."
                    />
                    <Quote_with_annotation
                        quote="Когда толпа начинает бесчинствовать, разум и порядок отступают перед силой разрушения."
                        annotation="В этой цитате подчёркивается опасность массовых беспорядков, когда эмоции и агрессия подавляют здравый смысл."
                    />
                    <Quote_with_annotation
                        quote="Бесчинства всегда происходят там, где ослабевает власть закона."
                        annotation="Здесь подчёркивается важность сильных правовых норм для предотвращения беспорядков."
                    />
                    <Quote_with_annotation
                        quote="Люди бесчинствуют, когда чувствуют безнаказанность."
                        annotation="Цитата указывает на то, что бесчинства происходят чаще там, где нарушители не боятся последствий."
                    />
                </div>
            </Section>

            <Section title="Примеры использования слова 'бесчинствовать'">
                <ul className="space-y-6">
                    <Base_card
                        title="Массовые беспорядки"
                        description="Толпа начала бесчинствовать после митинга — участники митинга перешли к беспорядочным и деструктивным действиям."
                        icon="🚨"
                    />
                    <Base_card
                        title="Нарушение закона"
                        description="Бесчинствовать — значит не уважать закон и общественные нормы — бесчинства идут вразрез с правовыми и моральными нормами общества."
                        icon="⚖️"
                    />
                    <Base_card
                        title="Подростковое хулиганство"
                        description="Подростки бесчинствовали на улицах города — подростки вели себя грубо и нарушали общественный порядок."
                        icon="👟"
                    />
                    <Base_card
                        title="Вандализм"
                        description="Вандалы бесчинствовали, разрушая памятники — хулиганы занимались разрушением общественных или культурных объектов."
                        icon="🛠️"
                    />
                    <Base_card
                        title="Нарушение общественного порядка"
                        description="Бесчинствовать в общественных местах — это грубое нарушение порядка — в общественных местах подобные действия считаются особенно серьёзным нарушением."
                        icon="🏛️"
                    />
                    <Base_card
                        title="Беспорядки во время митингов"
                        description="Во время беспорядков люди начали бесчинствовать, поджигая автомобили — беспорядочные действия привели к поджогам и разрушениям."
                        icon="🔥"
                    />
                    <Base_card
                        title="Нарушение покоя"
                        description="Они бесчинствовали всю ночь, не давая спать соседям — шумное поведение нарушало покой окружающих."
                        icon="😴"
                    />
                    <Base_card
                        title="Воровство"
                        description="Воры бесчинствовали в доме, разбрасывая вещи повсюду — воры вели себя хаотично, не только воруя, но и разрушая порядок в доме."
                        icon="🏚️"
                    />
                    <Base_card
                        title="Бесчинства ради забавы"
                        description="Бесчинствовать ради забавы — это проявление неуважения к окружающим — действия, совершённые ради развлечения, нарушают права и покой других людей."
                        icon="🎉"
                    />
                    <Base_card
                        title="Массовые беспорядки"
                        description="Разгневанная толпа бесчинствовала на площади — толпа вела себя агрессивно и разрушительно в общественном месте."
                        icon="👥"
                    />
                </ul>
            </Section>



            <Audio_Navigate
                path={"/words/beshchinstvovat/beshchinstvovat.record"}
                to={{
                    nextTask: "./cohort",
                    nextExercise: "",
                }}
            />
        </div>
    );
}


 */