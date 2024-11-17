import {FaBook} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Math() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Математика
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <LessonCard
                to={"./classes/class_fifth"}
                title="Математика для первого класса"
                description="Школьная программа по математике для первого класса: от натуральных чисел и дробей до измерений и вычислений."
                icon={<FaBook/>}
                iconColor="text-blue-500"
            />
        </div>
    </div>
}


