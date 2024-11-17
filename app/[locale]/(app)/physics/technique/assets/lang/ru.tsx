import {FaSnowflake} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



export default async function Technique() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Технологии
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Refrigerator Technology */}
            <LessonCard
                to={"./technique/refrigerator/"}
                title="Технология холодильника"
                description="Узнайте, как работают холодильники, используя термодинамику для охлаждения и сохранения продуктов."
                icon={<FaSnowflake />}
                iconColor="text-blue-500"
            />
        </div>
    </div>
}


