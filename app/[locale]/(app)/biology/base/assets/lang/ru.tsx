import {FaHeartbeat} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Vitamins() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Базовый курс
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <LessonCard
                to={"./base/first_class"}
                title="Первый класс"
                description="Важный витамин, отвечающий за свёртывание крови, здоровье костей и правильное функционирование сердечно-сосудистой системы."
                icon={<FaHeartbeat />}
                iconColor="text-red-500"
            />
            <LessonCard
                to={"./base/brif"}
                title="Первый класс"
                description="Важный витамин, отвечающий за свёртывание крови, здоровье костей и правильное функционирование сердечно-сосудистой системы."
                icon={<FaHeartbeat />}
                iconColor="text-red-500"
            />
        </div>
    </div>
}


