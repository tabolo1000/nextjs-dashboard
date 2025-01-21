import {FaHashtag, FaShapes, FaRuler} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Physics() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Категории уроков
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Натуральные числа */}
            <LessonCard
                to={"./class_fifth/lesson_first"}
                title="Натуральные числа"
                description="Погружение в мир чисел: от основ натуральных чисел до десятичных систем и их применения в повседневной жизни."
                icon={<FaHashtag />}
                iconColor="text-blue-600"
            />

            {/* Основы геометрии */}
            <LessonCard
                to={"./class_fifth/lesson_second"}
                title="Основы геометрии"
                description="Изучение основных понятий геометрии: работа с отрезками, треугольниками, плоскостями и единицами измерения."
                icon={<FaShapes />}
                iconColor="text-red-600"
            />

            {/* Измерительные инструменты и шкалы */}
            <LessonCard
                to={"./class_fifth/lesson_third"}
                title="Измерительные инструменты и шкалы"
                description="Изучение принципов работы измерительных приборов — от линеек и термометров до весов и координатных лучей."
                icon={<FaRuler />}
                iconColor="text-orange-500"
            />


            {/* Измерительные инструменты и шкалы */}
            <LessonCard
                to={"./class_fifth/lesson_fourth"}
                title="lesson_fourth"
                description="Изучение принципов работы измерительных приборов — от линеек и термометров до весов и координатных лучей."
                icon={<FaRuler />}
                iconColor="text-orange-500"
            />

            {/* Измерительные инструменты и шкалы */}
            <LessonCard
                to={"./class_fifth/lesson_fifth"}
                title="lesson_fifth"
                description="Изучение принципов работы измерительных приборов — от линеек и термометров до весов и координатных лучей."
                icon={<FaRuler />}
                iconColor="text-orange-500"
            />

            {/* Измерительные инструменты и шкалы */}
            <LessonCard
                to={"./class_fifth/lesson_sixth"}
                title="lesson_sixth"
                description="Изучение принципов работы измерительных приборов — от линеек и термометров до весов и координатных лучей."
                icon={<FaRuler />}
                iconColor="text-orange-500"
            />

            {/* Измерительные инструменты и шкалы */}
            <LessonCard
                to={"./class_fifth/lesson_seventh"}
                title="lesson_seventh"
                description="Изучение принципов работы измерительных приборов — от линеек и термометров до весов и координатных лучей."
                icon={<FaRuler />}
                iconColor="text-orange-500"
            />

            {/* Измерительные инструменты и шкалы */}
            <LessonCard
                to={"./class_fifth/lesson_eighth"}
                title="lesson_eighth"
                description="Изучение принципов работы измерительных приборов — от линеек и термометров до весов и координатных лучей."
                icon={<FaRuler />}
                iconColor="text-orange-500"
            />

            {/* Измерительные инструменты и шкалы */}
            <LessonCard
                to={"./class_fifth/lesson_ninth"}
                title="lesson_ninth"
                description="Изучение принципов работы измерительных приборов — от линеек и термометров до весов и координатных лучей."
                icon={<FaRuler />}
                iconColor="text-orange-500"
            />
            <LessonCard
                to={"./class_fifth/brief_arithmetic"}
                title="lesson_ninth"
                description="Изучение принципов работы измерительных приборов — от линеек и термометров до весов и координатных лучей."
                icon={<FaRuler />}
                iconColor="text-orange-500"
            />

        </div>
    </div>
}


