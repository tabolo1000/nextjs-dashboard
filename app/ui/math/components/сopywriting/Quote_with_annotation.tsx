export const Quote_with_annotation = ({ quote, annotation }: Quote_with_annotation_Props) => (
    <div className="relative card-base card-hover bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl">
        {/* Блок с цитатой */}
        <blockquote className="text-2xl font-semibold italic mb-4 before:content-['“'] before:text-5xl before:font-bold before:text-indigo-300 after:content-['”'] after:text-5xl after:font-bold after:text-indigo-300">
            {quote}
        </blockquote>
        {/* Блок с аннотацией */}
        <div className="text-gray-200 text-base bg-white/10 p-4 rounded-lg shadow-inner">
            <p className="italic">
                <span className="font-bold text-purple-100">Аннотация:</span> {annotation}
            </p>
        </div>
        {/* Декоративный элемент */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
    </div>
);


interface Quote_with_annotation_Props {
    quote: string,
    annotation: string,
}