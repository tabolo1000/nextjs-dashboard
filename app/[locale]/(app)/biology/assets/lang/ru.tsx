import { FaLeaf} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Math() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Биология
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <LessonCard
                to={"/biology/vitamins"}
                title="Витамины: Биология и здоровье"
                description="Изучение всех типов витаминов, их функций, источников и влияния на здоровье человека."
                icon={<FaLeaf />}
                iconColor="text-green-500"
            />
            <LessonCard
                to={"/biology/products"}
                title="Продукты: Биология и здоровье"
                description="Изучение всех типов витаминов, их функций, источников и влияния на здоровье человека."
                icon={<FaLeaf />}
                iconColor="text-green-500"
            />
            <LessonCard
                to={"/biology/base"}
                title="Базовый курс: Биология и здоровье"
                description="Изучение всех типов витаминов, их функций, источников и влияния на здоровье человека."
                icon={<FaLeaf />}
                iconColor="text-green-500"
            />
        </div>
    </div>
}


