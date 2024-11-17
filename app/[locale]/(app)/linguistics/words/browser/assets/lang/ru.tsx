import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import browserImage from "@/app/[locale]/(app)/linguistics/words/browser/assets/img/browser.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Browser() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Браузер: Этимология, Значение и Примеры</h1>

            {/* Этимология */}
            <Section title="Этимология слова 'Браузер'">
                <p className="paragraph">
                    Слово <Highlight>«браузер»</Highlight> происходит от английского термина <Highlight>*browser*</Highlight>, который образован от глагола <Highlight>*to browse*</Highlight>, что означает «просматривать», «листать», «искать». Изначально этот термин применялся для неспешного просмотра книг и журналов, но позже стал обозначать программы для просмотра веб-страниц.
                </p>
                <p className="paragraph">
                    <Highlight>1. Английский корень:</Highlight> Глагол <Highlight>*to browse*</Highlight> описывает процесс поиска информации, что символизирует основную функцию браузера — просмотр веб-страниц.
                </p>
                <p className="paragraph">
                    <Highlight>2. Заимствование в русский язык:</Highlight> Слово <Highlight>«браузер»</Highlight> было заимствовано в конце 1990-х годов, когда интернет стал широко доступен в России.
                </p>
            </Section>

            {/* Интерфейс браузера */}
            <Interactive_Image src={browserImage} alt={"Интерфейс браузера"} width={500} height={500} />

            {/* Значение */}
            <Section title="Значение слова 'Браузер'">
                <p className="paragraph">
                    <Highlight>Браузер</Highlight> — это программа для доступа к веб-страницам и их отображения. Браузеры интерпретируют код веб-страниц (HTML, CSS, JavaScript) и выводят их в визуально понятном формате для пользователей.
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Просмотр веб-страниц:</Highlight>
                        Браузер отображает содержимое сайтов, превращая код в понятный интерфейс.
                        <br />
                        <i>"С помощью браузера можно посещать сайты, читать новости и взаимодействовать с веб-приложениями."</i>
                    </li>
                    <li>
                        <Highlight>2. Поиск информации:</Highlight>
                        Браузер позволяет находить информацию через поисковые системы.
                        <br />
                        <i>"Введите запрос в строку поиска в браузере для поиска нужной информации."</i>
                    </li>
                    <li>
                        <Highlight>3. Интерактивность:</Highlight>
                        Браузеры поддерживают интерактивные функции, такие как просмотр мультимедиа и заполнение онлайн-форм.
                        <br />
                        <i>"Современные браузеры поддерживают новейшие веб-приложения и технологии."</i>
                    </li>
                </ul>
            </Section>

            {/* Примеры популярных браузеров */}
            <Section title="Примеры популярных браузеров">
                <ul className="space-y-6">
                    <Base_card
                        title="Google Chrome"
                        description="Один из самых популярных браузеров, известен своей скоростью и поддержкой множества расширений."
                        icon="🌐"
                    />
                    <Base_card
                        title="Mozilla Firefox"
                        description="Открытый браузер, который делает акцент на конфиденциальность и возможности настройки."
                        icon="🦊"
                    />
                    <Base_card
                        title="Microsoft Edge"
                        description="Браузер от Microsoft, использующий движок Chromium для повышения производительности."
                        icon="🖥️"
                    />
                    <Base_card
                        title="Safari"
                        description="Браузер от Apple, оптимизированный для устройств с macOS и iOS."
                        icon="🍎"
                    />
                    <Base_card
                        title="Opera"
                        description="Браузер с уникальными функциями, такими как встроенный VPN и блокировщик рекламы."
                        icon="🚀"
                    />
                </ul>
            </Section>

            {/* Цитаты о браузерах */}
            <Section title="Цитаты о браузерах и их значении">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Браузер — это ваш портал в мир интернета."
                        annotation="Значение: Браузер открывает доступ к огромному количеству информации в интернете."
                    />
                    <Quote_with_annotation
                        quote="Безопасность браузера — это безопасность ваших данных."
                        annotation="Значение: Браузеры играют важную роль в защите личных данных пользователей."
                    />
                    <Quote_with_annotation
                        quote="Выбор браузера — это выбор стиля работы и удобства использования интернета."
                        annotation="Значение: Разные браузеры предлагают разные функции и возможности для работы в сети."
                    />
                </div>
            </Section>

            {/* Основные компоненты браузера */}
            <Section title="Основные компоненты браузера">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Адресная строка:</Highlight>
                        Поле для ввода URL-адреса веб-страницы или поискового запроса.
                    </li>
                    <li>
                        <Highlight>2. Вкладки:</Highlight>
                        Возможность открывать несколько веб-страниц в одном окне браузера.
                    </li>
                    <li>
                        <Highlight>3. История просмотров:</Highlight>
                        Журнал посещённых веб-страниц, который можно просматривать и очищать.
                    </li>
                    <li>
                        <Highlight>4. Куки (Cookies):</Highlight>
                        Файлы, которые сохраняют данные о пользователе и его действиях на сайте.
                    </li>
                    <li>
                        <Highlight>5. Расширения:</Highlight>
                        Дополнительные модули, которые добавляют новые функции в браузер, например, блокировка рекламы.
                    </li>
                </ul>
            </Section>

            {/* Важные аспекты работы браузеров */}
            <Section title="Важные аспекты работы браузеров">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Безопасность:</Highlight>
                        Современные браузеры защищают пользователей от вредоносных сайтов и фишинга.
                    </li>
                    <li>
                        <Highlight>2. Конфиденциальность:</Highlight>
                        Браузеры предлагают режим инкогнито и инструменты для блокировки трекеров.
                    </li>
                    <li>
                        <Highlight>3. Производительность:</Highlight>
                        Скорость браузера зависит от движка и количества открытых вкладок и расширений.
                    </li>
                    <li>
                        <Highlight>4. Кросс-платформенность:</Highlight>
                        Возможность синхронизации закладок и истории между устройствами.
                    </li>
                </ul>
            </Section>
        </div>
    );
}