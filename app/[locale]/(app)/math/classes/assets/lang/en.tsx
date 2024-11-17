import {FaBook} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function First_class() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            First class
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <LessonCard
                to={"./classes/class_fifth"}
                title="First Grade Math"
                description="The first-grade math curriculum: from natural numbers and fractions to measurements and calculations."
                icon={<FaBook/>}
                iconColor="text-blue-500"
            />
        </div>
    </div>
}