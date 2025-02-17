import React from "react";
import useShowWords from "@/app/[locale]/(app)/linguistics/words/(kata)/@components/showWords/useShowWords";

/**
 * Displays the word by the string that comes from the props
 * @param searchTerm - Required query string
 * @constructor
 */
const ShowWords: React.FC<ShowWordsProps> = ({ searchTerm }) => {
    const {
        data,
        showWordsText,
    } = useShowWords({ searchTerm });

    // If there is no substring
    if (!searchTerm.trim()) {
        return <div className="text-gray-500">{showWordsText.enterText}</div>;
    }

    // Apollo returns a possible null of data
    const words = data?.searchWords;

    // if the words didn't come
    if (!words?.length) {
        return <div className="text-gray-500">{showWordsText.notFound}</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {words.map((el) => (
                <div key={el?._id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">{el?.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        {el?.morpheme
                            ? [el?.morpheme.prefix, el?.morpheme.root, el?.morpheme.suffix, el?.morpheme.end]
                                .filter(Boolean)
                                .join(" ")
                            : "Морфемы отсутствуют"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">{el?.description || "Описание отсутствует"}</p>
                </div>
            ))}
        </div>
    );
};

export default ShowWords;

type ShowWordsProps = {
    searchTerm: string
}