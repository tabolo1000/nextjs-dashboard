import {ReactNode} from "react";


export const Section = ({title, parity, children}:SectionProps) => (
    <section className = {
        `mb-8 w-full p-3 bg-opacity-50 dark:bg-opacity-5 shadow
        ${parity ? "bg-white dark:bg-gray-800" : "bg-blue-50 dark:bg-gray-750"}
        `}>
        {(parity)
            ? <h2 className="header_h2_even">{title}</h2>
            : <h2 className="header_h2_odd">{title}</h2>
        }

        {children}
    </section>
);

interface SectionProps {
    title: string;
    children: ReactNode;
    parity?: boolean;
}