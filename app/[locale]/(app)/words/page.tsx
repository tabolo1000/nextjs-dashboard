"use client";

import {useQuery } from '@apollo/client';
import {GetWordsDocument} from "@/@graphql/generated";


const WordsList = ({ collectionName }: {collectionName: string}) => {
    const { data, loading, error } = useQuery(GetWordsDocument, {
        variables: { collectionName },
    });

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <ul>
            {data?.words.map((word, el) => (
                <li key={el}>{word.title}</li>
            ))}
        </ul>
    );
};

export default WordsList;










/*const GET_WORDS = gql`
    query GetWords($collectionName: String) {
        words(collectionName: $collectionName) {
            title
            joke
        }
    }
`;*/