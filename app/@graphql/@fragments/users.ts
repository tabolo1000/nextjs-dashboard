import {gql} from "@apollo/client";

const MorphemeWord = gql`
    fragment MorphemeWord on Morpheme {
        prefix
        root
        suffix
        end
    }
`
const SliderWord = gql`
    fragment Word on Word {
        _id,
        title,
        description,
        morpheme {
            ...MorphemeWord
        },
        quote,
        joke,
        annotation,
        derivatives,
        collections,
    }
`

export const  WordsFragments = {
    MorphemeWord,
    SliderWord,
}