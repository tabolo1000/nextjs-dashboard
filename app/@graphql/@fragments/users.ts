import {gql} from "@apollo/client";

const MorphemeWord = gql`
    fragment MorphemeWord on Morpheme {
        prefix
        root
        suffix
        end
    }
`
const WordWithoutID = gql`
    fragment WordWithoutID on Word {
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

const SliderWord = gql`
    fragment Word on Word {
        _id,
        ...WordWithoutID
    }
`

export const  WordsFragments = {
    MorphemeWord,
    SliderWord,
    WordWithoutID,
}