import {gql} from "@apollo/client";

const SEARCH_WORDS = gql`
    query searchWords($substring: String!, $limit: Float!) {
        searchWords(substring: $substring, limit: $limit) {
            _id
            title
            description
            morpheme {
                ...MorphemeWord

            }
        }
    }
`

const GET_WORDS = gql`
    query getWords {
        words {
            ...Word
        }
    }
`

const UPDATE_WORDS = gql`
    mutation updateWord($word: UpdateWordInput!) {
        updateWord(word: $word) {
            ...Word
        }
}`

const DELETE_WORDS = gql`
    mutation deleteWord($id: String!) {
        deleteWord(id: $id) {
            ...Word
        }
    }
`

const CREATE_WORD = gql`
    mutation createWord($word: AddWordInput!) {
        createWord(word: $word) {
            ...Word
        }
    }
`


export const  queriesSliderWords = {
    SEARCH_WORDS,
    GET_WORDS,
    UPDATE_WORDS,
    DELETE_WORDS,
    CREATE_WORD,
}