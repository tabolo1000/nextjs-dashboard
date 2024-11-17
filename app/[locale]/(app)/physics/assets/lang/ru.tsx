import { FaAtom, FaCog, FaBolt, FaLightbulb, FaStar, FaMicroscope } from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Physics() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Категории уроков
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Базовая физика */}
            <LessonCard
                to={"#"}
                title="Базовая физика"
                description="Основы физики, начиная с законов Ньютона и заканчивая основными понятиями механики."
                icon={<FaAtom/>}
                iconColor="text-indigo-600"
            />

            {/* Техника и принципы её работы */}
            <LessonCard
                to={"./physics/technique"}
                title="Техника и принципы её работы"
                description="Изучение механизмов и устройств, от простых машин до сложных современных технологий."
                icon={<FaCog/>}
                iconColor="text-green-600"
            />

            {/* Электричество и магнетизм */}
            <LessonCard
                to={"#"}
                title="Электричество и магнетизм"
                description="Погружение в мир электромагнитных явлений, токов, напряжений и их применения в жизни."
                icon={<FaBolt/>}
                iconColor="text-yellow-500"
            />

            {/* Оптика */}
            <LessonCard
                to={"#"}
                title="Оптика"
                description="Как устроены зеркала, линзы и свет. Законы отражения и преломления."
                icon={<FaLightbulb/>}
                iconColor="text-pink-500"
            />

            {/* Астрофизика */}
            <LessonCard
                to={"#"}
                title="Астрофизика"
                description="Изучение звёзд, планет, галактик и всех космических явлений."
                icon={<FaStar/>}
                iconColor="text-purple-600"
            />

            {/* Квантовая физика */}
            <LessonCard
                to={"#"}
                title="Квантовая физика"
                description="Погружение в мир атомов и субатомных частиц, где действуют законы квантовой механики."
                icon={<FaMicroscope/>}
                iconColor="text-red-500"
            /> 
        </div>
    </div>
}


