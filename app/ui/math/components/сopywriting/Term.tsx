



export default function Term ({children,  right} : Term_Props) {
    return <strong
        className={`bg-red-100 text-red-800 font-semibold px-6 
        py-3 rounded-lg shadow-md text-xl ${(right) ? "border-r-4":"border-l-4"} border-red-500 
        pt-1 pb-1`}>{children}</strong>
}


interface Term_Props {
    children: string,
    right?: "right" | "left",
}