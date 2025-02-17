import {gql} from "@apollo/client";

const SEARCH_WORDS = gql`
    query searchWords($substring: String!, $limit: Int!) {
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


export const  queriesSliderWords = {
    SEARCH_WORDS
}