import { FaLeaf} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Math() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Biology
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <LessonCard
                to={"/biology/vitamins"}
                title="Vitamins: Biology and Health"
                description="A comprehensive study of all types of vitamins, their functions, sources, and impact on human health."
                icon={<FaLeaf />}
                iconColor="text-green-500"
            />
        </div>
    </div>
}


