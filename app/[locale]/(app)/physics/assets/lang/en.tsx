import { FaAtom, FaCog, FaBolt, FaLightbulb, FaStar, FaMicroscope } from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";



// Функция для статического чтения файлов
export default async function Physics() {
    return <div className="main_block_task">
        <h1 className="header_h1">
            Lesson Categories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Базовая физика */}
            <LessonCard
                to ={"#"}
                title="Basic Physics"
                description="The basics of physics, from Newton's laws to the basic concepts of mechanics."
                icon={<FaAtom />}
                iconColor="text-indigo-600"
            />

            <LessonCard
                to ={"./physics/technique"}
                title="Technology and how it works"
                description="Learn about mechanisms and devices, from simple machines to complex modern technology."
                icon={<FaCog />}
                iconColor="text-green-600"
            />

            {/* Electricity and Magnetism */}
            <LessonCard
                to ={"#"}
                title="Electricity and Magnetism"
                description="Dive into the world of electromagnetic phenomena, currents, voltages and their applications in life."
                icon={<FaBolt />}
                iconColor="text-yellow-500"
            />

            {/* Optics */}
            <LessonCard
                to ={"#"}
                title="Optics"
                description="How mirrors, lenses and light work. Laws of reflection and refraction."
                icon={<FaLightbulb />}
                iconColor="text-pink-500"
            />

            {/* Astrophysics */}
            <LessonCard
                to ={"#"}
                title="Astrophysics"
                description="The study of stars, planets, galaxies and all cosmic phenomena."
                icon={<FaStar />}
                iconColor="text-purple-600"
            />

            {/* Quantum Physics */}
            <LessonCard
                to ={"#"}
                title="Quantum Physics"
                description="Dive into the world of atoms and subatomic particles where the laws of quantum mechanics apply."
                icon={<FaMicroscope />}
                iconColor="text-red-500"
            />
        </div>
    </div>
}


