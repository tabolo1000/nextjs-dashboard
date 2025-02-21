import {FaBook, FaHeartbeat, FaLaptopCode, FaLeaf, FaMicrochip, FaPalette, FaUsers, FaUtensils} from "react-icons/fa";
import {TopicWord} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@types/main";
import TopicSelected from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/TopicSelected";


/**
* TopicWords — это структурированный массив тем, предназначенных для лингвистических обсуждений.
* Каждая тема включает уникальный набор лексики и выражений, адаптированных под определённые сценарии:
    * от повседневного общения до сложных философских дискуссий.
*
* Задача этой структуры данных — предоставить разработчикам готовый выбор тем,
* которые легко интегрировать в компоненты пользовательского интерфейса или образовательные приложения.
*
* Поля:
* - `topic`: Уникальный идентификатор темы (используется для маршрутизации или логики).
* - `title`: Название темы, отображаемое в интерфейсе.
* - `description`: Подробное описание лексики и цели темы.
* - `icon`: Иконка, визуально представляющая тему.
* - `iconColor`: Классы Tailwind CSS для стилизации иконки.
*
* Пример использования:
 * Отображать этот массив в компоненте, чтобы дать пользователям возможность
* изучать лексику по интересным темам.
*/
const topicWords: TopicWord[] = [
    {
        topic: "all",
        title: "Слова: Общие темы для обсуждения",
        description: "Всеобъемлющий набор слов для обсуждений на различные темы: от повседневной жизни до сложных философских вопросов.",
        icon: <FaBook />,
        iconColor: "text-blue-500",
    },
    /*{
        topic: "conversation_topic_dream",
        title: "Слова: Мечты и вдохновение",
        description: "Слова и выражения, связанные с мечтами, целями и вдохновением. Отлично подходят для обсуждения амбиций и планов на будущее.",
        icon: <FaLeaf />,
        iconColor: "text-green-500",
    },
    {
        topic: "conversation_topic_anger",
        title: "Слова: Злость и раздражение",
        description: "Лексика для обсуждения эмоций, таких как злость и раздражение. Полезно для исследования чувств и их выражения.",
        icon: <FaBook />,
        iconColor: "text-orange-500",
    },
    {
        topic: "conversation_topic_programmer",
        title: "Слова: Программирование и кодинг",
        description: "Слова и выражения, связанные с программированием, языками кодирования и разработкой ПО. Идеально подходят для любителей технологий и профессионалов.",
        icon: <FaLaptopCode />,
        iconColor: "text-red-500",
    },
    {
        topic: "conversation_topic_food",
        title: "Слова: Еда и кулинария",
        description: "Слова, связанные с блюдами, ингредиентами и кулинарными предпочтениями. Отлично подходят для обсуждения любимых блюд и рецептов.",
        icon: <FaUtensils />,
        iconColor: "text-red-500",
    },
    {
        topic: "conversation_topic_hobbies",
        title: "Слова: Хобби и увлечения",
        description: "Лексика для обсуждения хобби, интересов и досуга. Отлично подходят для разговоров о творчестве и отдыхе.",
        icon: <FaPalette />,
        iconColor: "text-purple-500",
    },
    {
        topic: "conversation_topic_health",
        title: "Слова: Здоровье и фитнес",
        description: "Слова и выражения, связанные с физическим и ментальным здоровьем, а также с фитнесом и спортом.",
        icon: <FaHeartbeat />,
        iconColor: "text-teal-500",
    },
    {
        topic: "conversation_topic_technology",
        title: "Слова: Технологии и инновации",
        description: "Лексика, посвящённая обсуждению современных технологий, гаджетов, интернета и научных достижений.",
        icon: <FaMicrochip />,
        iconColor: "text-gray-500",
    },
    {
        topic: "conversation_topic_environment",
        title: "Слова: Экология и природа",
        description: "Слова о защите окружающей среды, изменении климата и сохранении природных ресурсов. Подходят для экологически осознанных обсуждений.",
        icon: <FaLeaf />,
        iconColor: "text-green-700",
    },
    {
        topic: "conversation_topic_relationships",
        title: "Слова: Отношения и общение",
        description: "Слова и фразы, связанные с общением, дружбой, любовью и межличностными отношениями. Подходят для личных разговоров.",
        icon: <FaUsers />,
        iconColor: "text-pink-500",
    },*/
];

export default function Words() {
    return  <TopicSelected topicWords={topicWords} />
}

