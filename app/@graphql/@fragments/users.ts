import {gql} from "@apollo/client";

const MorphemeWord = gql`
    fragment MorphemeWord on Morpheme {
        prefix
        root
        suffix
        end
    }
`

export const  WordsFragments = {
    MorphemeWord
}