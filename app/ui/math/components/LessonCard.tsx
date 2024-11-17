"use client"

import Link from "next/link";

export const LessonCard: React.FC<LessonCardProps> = ({title, description, icon, iconColor, to}) => {

    return (
        <Link
            href={to}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
            <div className={`text-4xl mb-4 ${iconColor}`}>{icon}</div>
            <h4 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h4>
            <p className="text-gray-600 text-lg">{description}</p>
            <div className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium transition-colors">
                Learn More →
            </div>
        </Link>
    );
};




//----------------------------Types-------------------------------------------

interface LessonCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    iconColor: string;
    to: string;
}