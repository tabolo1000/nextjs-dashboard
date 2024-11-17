import { FaLanguage} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Linguistics() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Лингвистика 
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <LessonCard
                to={"./linguistics/words"}
                title="Этимология и история слов"
                description="Изучение происхождения слов, их изменения во времени и влияния разных языков на современную лексику."
                icon={<FaLanguage />}
                iconColor="text-purple-600"
            />
        </div>
    </div>
}


