import { FaLanguage } from 'react-icons/fa';
import { LessonCard } from "@/app/ui/math/components/LessonCard";


/**
 *  Russian main navigation panel for linguistics
 * which helps you to select the required course.
 *
 */
export default async function Linguistics() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Лингвистика
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <LessonCard
                    to={"./linguistics/words"}
                    title="Этимология и история слов"
                    description="Погружение в историю происхождения слов: их развитие, изменения значений и влияния различных языков и культур. Узнайте больше о скрытых корнях современной лексики."
                    icon={<FaLanguage />}
                    iconColor="text-purple-600"
                />
                <LessonCard
                    to={"./linguistics/words/slider_words_theme"}
                    title="Словесная карусель"
                    description="Интерактивное изучение слов, их значений и контекстов. Откройте для себя новые способы запоминания и понимания лексики."
                    icon={<FaLanguage />}
                    iconColor="text-purple-600"
                />
                <LessonCard
                    to={"./linguistics/words/conversation_topics"}
                    title="Темы для обсуждений"
                    description="Коллекция интересных тем для разговоров: от лингвистических особенностей до культурных различий. Улучшайте навыки общения и понимания через увлекательные диалоги."
                    icon={<FaLanguage />}
                    iconColor="text-purple-600"
                />
            </div>
        </div>
    )
}


