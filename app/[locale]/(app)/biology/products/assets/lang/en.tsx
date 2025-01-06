import {FaHeartbeat} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Vitamins() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Vitamins
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <LessonCard
                to={"./vitamins/vitamin_k"}
                title="Vitamin K"
                description="A crucial vitamin responsible for blood clotting, bone health, and proper cardiovascular system functioning."
                icon={<FaHeartbeat />}
                iconColor="text-red-500"
            />
        </div>
    </div>
}


