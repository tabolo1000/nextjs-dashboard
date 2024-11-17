import {LessonCard} from "@/app/ui/math/components/LessonCard";
import {FaSnowflake} from "react-icons/fa";

export default async function Technique() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Technique
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Refrigerator Technology */}
            <LessonCard
                to={"./technique/refrigerator/"}
                title="Refrigerator Technology"
                description="Learn how refrigerators work using thermodynamics to cool and preserve food."
                icon={<FaSnowflake />} // Иконка снежинки, символизирующая охлаждение
                iconColor="text-blue-500"
            />

        </div>
    </div>
}