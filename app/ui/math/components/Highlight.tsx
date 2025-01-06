import React from "react";

export const Highlight = ({children}: HighlightProps) => (
    <span className="bg-green-400 text-green-700 font-semibold px-6
        py-3 rounded-lg shadow-md text-xl border-b-4 border-green-500
        pt-1 pb-1
    bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-800">{children}</span>
);


interface HighlightProps {
    children: React.ReactNode,
}