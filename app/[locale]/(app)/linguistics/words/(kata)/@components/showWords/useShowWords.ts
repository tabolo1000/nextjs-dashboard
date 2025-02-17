import {useState} from "react";
import {useSuspenseQuery} from "@apollo/client";
import {SearchWordsQuery, SearchWordsQueryVariables} from "@/app/@graphql/@generated/graphql";
import {queriesSliderWords} from "@/app/@graphql/@queries/words.slider";
import {usePathname} from "next/navigation";
import {
    localizedShowWords,
    LocalizedShowWords
} from "@/app/[locale]/(app)/linguistics/words/(kata)/@components/showWords/@assets/language";


const useShowWords = ({searchTerm}: useShowWordsProps) => {
    const [limit] = useState<number>(4);
    const lang = usePathname().split("/")[1];
    const showWordsText: LocalizedShowWords = localizedShowWords(lang)
    const { data } = useSuspenseQuery<SearchWordsQuery, SearchWordsQueryVariables>(queriesSliderWords.SEARCH_WORDS, {
        variables: {
            substring: searchTerm,
            limit: limit,
        },
        skip: !searchTerm.trim(),
        returnPartialData: true,
    });


    return {
        data,
        showWordsText,
    }
}

export default useShowWords;

type useShowWordsProps = {
    searchTerm: string
}