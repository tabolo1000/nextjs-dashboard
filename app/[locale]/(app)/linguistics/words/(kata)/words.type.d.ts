import {WordFragment} from "@/app/@graphql/@generated/graphql";

export type Word = {
    _id: string
    title: string;
    morpheme: Morpheme;
    description: string;
    icon: string;
    quote: string;
    annotation: string;
    joke: string;
    derivatives: string[];
    collections: string[];
}
 
/*type Morpheme = {
    prefix?: string[];
    root: string[];
    suffix?: string[];
    end?: string[];
}*/


// old type
export type CodexFormValues = Omit<Word, "_id">
export type WordWithoutId  = Omit<Word, "_id">

// new type
export type UpdateField<T extends keyof WordFragment> = Pick<WordFragment, "_id" | T>;
