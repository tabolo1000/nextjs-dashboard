import {FaCalculator} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Math() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Mathematics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <LessonCard
                to={"/math/classes"}
                title="Basic Math"
                description="Core mathematical concepts from the school curriculum: from addition and subtraction to fractions and percentages."
                icon={<FaCalculator/>}
                iconColor="text-purple-600"
            />
        </div>
    </div>
}