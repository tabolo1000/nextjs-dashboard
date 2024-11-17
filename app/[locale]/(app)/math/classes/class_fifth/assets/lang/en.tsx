import {FaHashtag, FaShapes, FaRuler} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Physics() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Lesson Categories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Натуральные числа */}
            <LessonCard
                to={"./class_fifth/lesson_first"}
                title="Natural Numbers"
                description="Dive into the world of numbers: from the basics of natural numbers to decimal systems and their applications in daily life."
                icon={<FaHashtag />}
                iconColor="text-blue-600"
            />

            {/* Основы геометрии */}
            <LessonCard
                to={"./class_fifth/lesson_second"}
                title="Basic Geometry"
                description="Study the fundamental concepts of geometry: working with line segments, triangles, planes, and measurement units."
                icon={<FaShapes />}
                iconColor="text-red-600"
            />

            {/* Измерительные инструменты и шкалы */}
            <LessonCard
                to={"./class_fifth/lesson_third"}
                title="Measuring Tools and Scales"
                description="Learn how to use measuring instruments — from rulers and thermometers to scales and number lines."
                icon={<FaRuler />}
                iconColor="text-orange-500"
            />
        </div>
    </div>
}


