"use client";

import { gql, useQuery } from "@apollo/client";
import { GetWordsQuery } from "@/graphql/generated";

const GET_WORDS = gql`
    query GetWords {
        words {
            title
            description
            joke
        }
    }
`;

export default function Home() {
    const { loading, error, data } = useQuery<GetWordsQuery>(GET_WORDS);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <div className={"dark:text-dark-text_color"}>
            <h1 className={"text-center size-3"}>Список слов: </h1>
            <ul>
                {data?.words?.map((word, it) => (
                    <li key={it} className={"p-5 border border-amber-500 rounded-md mb-2"}>
                        <strong className={"text-center size-3"}>{word.title + ": "}</strong>
                        <p>{word.description}</p>
                        <p>{word.joke}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}