import {FaHeartbeat} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Vitamins() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Классы
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <LessonCard
                to={"./first_class/first_lesson"}
                title="Первый Урок"
                description="Важный витамин, отвечающий за свёртывание крови, здоровье костей и правильное функционирование сердечно-сосудистой системы."
                icon={<FaHeartbeat />}
                iconColor="text-red-500"
            />
            <LessonCard
                to={"./first_class/second_lesson"}
                title="Второй Урок"
                description="Важный витамин, отвечающий за свёртывание крови, здоровье костей и правильное функционирование сердечно-сосудистой системы."
                icon={<FaHeartbeat />}
                iconColor="text-red-500"
            />
            <LessonCard
                to={"./first_class/third_lesson"}
                title="Третий Урок"
                description="Важный витамин, отвечающий за свёртывание крови, здоровье костей и правильное функционирование сердечно-сосудистой системы."
                icon={<FaHeartbeat />}
                iconColor="text-red-500"
            />
            <LessonCard
                to={"./first_class/fourth_lesson"}
                title="Четвертый Урок"
                description="Важный витамин, отвечающий за свёртывание крови, здоровье костей и правильное функционирование сердечно-сосудистой системы."
                icon={<FaHeartbeat />}
                iconColor="text-red-500"
            />
            <LessonCard
                to={"./first_class/fifth_lesson"}
                title="Пятый Урок"
                description="Важный витамин, отвечающий за свёртывание крови, здоровье костей и правильное функционирование сердечно-сосудистой системы."
                icon={<FaHeartbeat />}
                iconColor="text-red-500"
            />
            <LessonCard
                to={"./first_class/sixth_lesson"}
                title="Шестой Урок"
                description="Важный витамин, отвечающий за свёртывание крови, здоровье костей и правильное функционирование сердечно-сосудистой системы."
                icon={<FaHeartbeat />}
                iconColor="text-red-500"
            />
        </div>
    </div>
}


