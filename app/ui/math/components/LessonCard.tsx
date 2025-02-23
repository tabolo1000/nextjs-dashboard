import Link from "next/link";
import React from "react";

export const LessonCard: React.FC<LessonCardProps> = ({title, description, icon, iconColor, to}) => {
    const isFunction = typeof to === "function";
    return (
        isFunction ? (
            <div
                className="base-animation-all dark:bg-dark-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
                <div className={`text-4xl mb-4 ${iconColor}`}>{icon}</div>
                <h4 className="header_h4">{title}</h4>
                <p className="dark:text-gray-300 text-gray-600 text-lg">{description}</p>
                <button
                    onClick={to}
                    className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium transition-colors"
                >
                    Learn More →
                </button>
            </div>
        ) : (
            <Link
                href={to || "#"}
                className="base-animation-all dark:bg-dark-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
                <div className={`text-4xl mb-4 ${iconColor}`}>{icon}</div>
                <h4 className="header_h4">{title}</h4>
                <p className="dark:text-gray-300 text-gray-600 text-lg">{description}</p>
                <div className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium transition-colors">
                    Learn More →
                </div>
            </Link>
        )
    );
};

//----------------------------Types-------------------------------------------

interface LessonCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    iconColor: string;
    to: string | (() => void);
}